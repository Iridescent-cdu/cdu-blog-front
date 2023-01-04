<script setup>
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { getOSSClient } from '../../../../utils/sts'
import { postProfileAvatar } from '@/api/user.js'
import { useUserStore } from '@/store/user.js'

const props = defineProps({
  currentAvatar: {
    type: String,
    required: true,
  },
})
const emits = defineEmits(['close'])

const userStore = useUserStore()
const imgTarget = ref(null)
const loading = ref(false)

// cropper配置
const cropperOptins = {
  // 剪裁框固定纵横比：1:1
  aspectRatio: 1,
}
/**
 * 创建cropper
 */
let cropper = null
const createCropper = () => {
  if (cropper) {
    return null
  } else {
    cropper = new Cropper(document.querySelector('#cropperContainer'), cropperOptins)
  }
}

/**
 * 更新本地和服务端数据
 */
const updateProfileAvatar = async (avatarUrl) => {
  const res = await postProfileAvatar(avatarUrl)
  if (res) {
    loading.value = false
    emits('close')
    ElMessage.success('修改成功')
    // 重新获取服务端数据信息，更新头像
    userStore.getUserInfoAction()
  } else {
    ElMessage.error('修改失败')
  }
}

/**
 * 使用阿里云OSS上传图片
 */
let ossClient
const putImageToOSS = async (imageFile) => {
  if (!ossClient) {
    ossClient = await getOSSClient()
  }

  try {
    // 1.文件名称
    const fileTypeArr = imageFile.type.split('/')
    const filename = `${userStore.username}/${Date.now()}.${fileTypeArr[fileTypeArr.length - 1]}`

    // 2.拼接文件路径并上传
    const img = await ossClient.put(`images/${filename}`, imageFile)

    await updateProfileAvatar(img.url)
  } catch (e) {
    ElMessage.error(e)
  }
}

/**
 * 图片剪裁完后保存
 */
const onSaveAvatar = () => {
  loading.value = true
  cropper.getCroppedCanvas().toBlob((blob) => {
    // 调用阿里云OSS上传文件对象
    putImageToOSS(blob)
  })
}

onMounted(() => {
  createCropper()
})
</script>

<template>
  <div class="flex flex-col">
    <img
      id="cropperContainer"
      ref="imgTarget"
      class="w-163.5 h-100"
      :src="currentAvatar" />
    <el-button
      class="mt-3"
      type="primary"
      size="large"
      :loading="loading"
      @click="onSaveAvatar"
      >保存</el-button
    >
  </div>
</template>

<style scoped lang="scss"></style>
