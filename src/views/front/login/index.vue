<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { validatePassword, validateUsername } from './validate'
import { useUserStore } from '@/store/user.js'
const router = useRouter()
const userStore = useUserStore()

const password = ref('')
const username = ref('')

const onLoginHandler = () => {
  if (validateUsername(username.value) && validatePassword(password.value)) {
    userStore.toLogin({
      password: password.value,
      username: username.value,
    })
  }
}
const toSignUp = () => {
  router.push({
    name: 'sign',
  })
}
</script>

<template>
  <div class="flex justify-center w-full mt-38.75">
    <div class="flex flex-col justify-start items-center w-81 h-83 text-center align-middle">
      <!-- 欢迎信息和描述 -->
      <h2 class="w-69 h-9.75 mb-3.5 font-serif text-9xl">Welcome back!</h2>
      <p class="w-77.75 h-6.75 mb-5.75 font-sans">Sign in to get the most out of nuntium.</p>
      <!-- 表单域 -->
      <div class="flex flex-col relative">
        <input
          v-model="username"
          type="text"
          placeholder="Username"
          class="w-81 h-14.5 pl-13.25 py-4 mb-3.5 bg-m-input rounded-xl font-sans" />
        <m-svg-icon
          name="user"
          class="absolute w-6 h-6 top-3.75 left-3.5"></m-svg-icon>
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-81 h-14.5 pl-13.25 py-4 mb-3.5 border bg-m-input rounded-xl font-sans" />
        <m-svg-icon
          name="key"
          class="absolute w-6 h-6 top-22.25 left-3.5"></m-svg-icon>
      </div>
      <!-- 记住密码和注册 -->
      <div class="flex justify-end w-full h-4.25 mt-2.75 mb-3.25 text-m-gray">
        <!-- <div class="flex items-center">
          <div class="w-4.5 h-4.25 border border-black rounded">
            <m-svg-icon
              class="w-4.5 h-4.25"
              name="check"></m-svg-icon>
          </div>
          <span class="ml-1.25">Remember me{{ errorMessage }}</span>
        </div> -->
        <span
          class="flex h-4.25 justify-center items-center cursor-pointer"
          @click="toSignUp"
          >To Sign</span
        >
      </div>
      <!-- 登录按钮 -->
      <m-button
        type="long"
        @click="onLoginHandler"
        >Login</m-button
      >
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
