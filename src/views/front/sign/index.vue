<script setup>
import { ref } from 'vue'
import { validatePassword, validateUsername } from '../login/validate'
import { signUp } from '@/api/user.js'
import { useUserStore } from '@/store/user.js'

const userStore = useUserStore()

const password = ref('')
const username = ref('')

const onSignHandler = async () => {
  if (validateUsername(username.value) && validatePassword(password.value)) {
    const res = await signUp({
      password: password.value,
      username: username.value,
    })
    if (res) {
      userStore.toLogin({
        password: password.value,
        username: username.value,
      })
    }
  }
}
</script>

<template>
  <div class="flex justify-center w-full mt-38.75">
    <div class="flex flex-col justify-start items-center w-81 h-83 text-center align-middle">
      <!-- 欢迎信息和描述 -->
      <h2 class="w-69 h-9.75 mb-3.5 font-serif text-9xl">Welcome !</h2>
      <p class="w-77.75 h-6.75 mb-5.75 font-sans">Sign up to get the most out of nuntium.</p>
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

      <!-- 登录按钮 -->
      <m-button
        type="long"
        @click="onSignHandler"
        >Sign
      </m-button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
