<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user.js'
const userStore = useUserStore()
const router = useRouter()
/**
 * 跳转路由
 */
const toProfileHandler = () => {
  router.push('/profile')
}
</script>

<template>
  <div class="flex flex-col w-42.5 py-4.25 border rounded-7xl bg-light-50 font-sans">
    <div class="h-14.75 border-b">
      <div class="flex flex-col pl-5.5 pb-2.625">
        <span
          class="mb-1 font-bold text-base cursor-pointer"
          @click="toProfileHandler"
          >{{ userStore.userInfo.nickname }}</span
        >
        <span class="text-sm cursor-pointer">{{ userStore.userInfo.email }}</span>
      </div>
    </div>

    <div class="flex flex-col pl-5.5 pt-1.75 max-h-48 overflow-auto">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
