<script setup>
import { onBeforeUnmount, ref, shallowRef, toRaw, watch } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css'
import { useRoute, useRouter } from 'vue-router'
import { selectOptions } from '../../../constants'
import { useUserStore } from '../../../store/user'
import { getModifyArticle, postArticle, updateArticle } from '@/api/article.js'
// 编辑器配置
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
const userStore = useUserStore()
const isLoading = ref(false)
const form = ref({
  userId: userStore.userInfo.userId,
  title: '',
  tags: '',
  author: userStore.userInfo.nickname,
  picture: 'https://cdu-blog-api.oss-cn-chengdu.aliyuncs.com/logo/Default%20Article%20Image.png',
  content: '',
})
const route = useRoute()
const router = useRouter()

/**
 * 提交表单
 */
const onSubmit = async () => {
  isLoading.value = true
  const rawFormData = toRaw(form.value)
  let res = null
  if (route.name === 'edit') {
    res = await updateArticle(rawFormData)
  } else {
    res = await postArticle(rawFormData)
  }

  if (res) {
    ElMessage.success('提交成功')
    isLoading.value = false
  } else {
    ElMessage.error('提交失败')
  }
}

/**
 * 重置表单
 */
const onReset = () => {
  form.value.tags = ''
  form.value.title = ''
  form.value.content = ''
}
/**
 * 取消修改
 */
const onCancel = () => {
  router.go(-1)
  onReset()
}
/**
 * 监听 route.params.id 变化修改文章
 */
watch(
  () => route.params.id,
  async (id) => {
    if (route.name === 'edit') {
      const res = await getModifyArticle(id)
      form.value = { ...res }
    } else {
      onReset()
    }
  },
  {
    immediate: true,
  },
)
const handleCreated = (editor) => {
  // 记录 editor 实例，重要！
  editorRef.value = editor
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) {
    return
  }
  editor.destroy()
})
</script>

<template>
  <div class="p-3 w-full h-full">
    <el-card class="w-full h-full">
      <el-form-item label="标题">
        <el-input
          v-model="form.title"
          placeholder="Please input" />
      </el-form-item>
      <el-form-item label="分类">
        <el-select
          v-model="form.tags"
          placeholder="Select">
          <el-option
            v-for="item in selectOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled" />
        </el-select>
      </el-form-item>
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :default-config="toolbarConfig"
        :mode="mode" />
      <Editor
        v-model="form.content"
        style="height: 465px; overflow-y: hidden"
        :default-config="editorConfig"
        :mode="mode"
        @onCreated="handleCreated" />
      <el-button
        :loading="isLoading"
        type="primary"
        @click="onSubmit"
        >提交</el-button
      >
      <el-button
        v-if="route.name !== 'edit'"
        @click="onReset"
        >重置</el-button
      >
      <el-button
        v-else
        @click="onCancel"
        >取消</el-button
      >
    </el-card>
  </div>
</template>

<style scoped lang="scss"></style>
