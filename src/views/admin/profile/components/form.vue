<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store/user'
import { postProfile } from '@/api/user.js'

const userStore = useUserStore()
const formRef = ref(null)
const isLoading = ref(false)
const form = reactive({
  username: '',
  password: '',
  nickname: '',
  email: '',
  selfIntro: '',
})
const rules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名是必填项',
    },
  ],
  password: [
    { required: true, message: '密码是必填项' },
    { min: 4, max: 16, message: 'Length should be 4 to 16', trigger: 'blur' },
  ],
  nickname: [
    {
      required: true,
      message: '昵称是必填项',
      trigger: 'blur',
    },
  ],
  email: [
    {
      required: true,
      message: '邮箱是必填项',
      trigger: 'blur',
    },
  ],
  selfIntro: [
    {
      message: '自我介绍是必填项',
      required: true,
      trigger: 'blur',
    },
  ],
})
/**
 * 重置表单
 */
const onReset = (formRef) => {
  formRef.resetFields()
}

/**
 * 保存和提交表单
 */
const onSubmit = async () => {
  formRef.value.validate(async (valid, fields) => {
    if (valid) {
      isLoading.value = true
      const res = await postProfile(form)
      if (res) {
        ElMessage.success('修改成功')
        userStore.getUserInfoAction()
        isLoading.value = false
      } else {
        ElMessage.error('修改失败')
      }
    } else {
      return null
    }
  })
}
</script>

<template>
  <div>
    <el-form
      ref="formRef"
      :rules="rules"
      :model="form"
      label-width="120px">
      <el-form-item
        label="用户名"
        prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password">
        <el-input
          v-model="form.password"
          type="password"
          show-password></el-input>
      </el-form-item>
      <el-form-item
        label="昵称"
        prop="nickname">
        <el-input v-model="form.nickname"></el-input>
      </el-form-item>
      <el-form-item
        label="邮箱"
        prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item
        label="个人介绍"
        prop="selfIntro">
        <el-input
          v-model="form.selfIntro"
          rows="5"
          type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :loading="isLoading"
          @click="onSubmit"
          >修改</el-button
        >
        <el-button @click="onReset(formRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.el-input :deep(.el-input__inner) {
  width: 66.125rem;
}
</style>
