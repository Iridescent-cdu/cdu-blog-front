<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { tagsArr } from '../../../constants'
import profileVue from './components/profile.vue'
import { useSearchStore } from '@/store/search.js'
import { useUserStore } from '@/store/user.js'
import { profileArr } from '@/constants/index.js'
const searchStore = useSearchStore()
const userStore = useUserStore()
const router = useRouter()
/**
 * 处理路由跳转
 */
const onClickHandler = (path) => {
  router.push(path)
}
/**
 * 双向数据绑定
 */
const inputValue = ref('')

const onHandlerSearch = () => {
  router.push('/tags')
  searchStore.setKeyword(inputValue.value)
  inputValue.value = ''
}
/**
 * 点击跳转登录页
 */
const onClickLogin = () => {
  router.push('/login')
}

/**
 * 监听token动态控制登录后页面显示
 */
const isLogin = ref(false)
watch(
  () => userStore.token,
  (val) => {
    if (val) {
      isLogin.value = true
    }
  },
  {
    immediate: true,
  },
)

/**
 * 跳转到admin
 */
const handleMenuAction = (item) => {
  if (item.path) {
    router.push(item.path)
  } else {
    userStore.toSignOut()
  }
}
</script>

<template>
  <div class="flex justify-between w-full px-6.25 mt-7.75 mb-10.75 h-14.25">
    <!-- 左侧logo和tags -->
    <div class="flex justify-between items-center w-98.25 h-full">
      <img
        v-lazy
        class="w-44.5 h-14.25 cursor-pointer"
        src="https://cdu-blog-api.oss-cn-chengdu.aliyuncs.com/logo/Logo.png"
        @click="onClickHandler('/')" />

      <div
        v-for="(item, index) in tagsArr"
        :key="index"
        class="font-serif w-18 h-5 font-bold cursor-pointer"
        @click="onClickHandler(item.path)">
        {{ item.name }}
      </div>
    </div>
    <!-- 右侧search和login -->
    <!-- v-show="$route.meta.showHeaderSearch" -->
    <div class="flex flex-end items-center w-126.75">
      <div class="w-90.75 h-11.5 mr-3">
        <m-search
          v-if="false"
          v-model="inputValue"
          @search="onHandlerSearch"></m-search>
      </div>
      <m-button
        v-if="!isLogin"
        type="primary"
        @click="onClickLogin"
        >Login</m-button
      >
      <div
        v-else
        class="relative group">
        <img
          v-if="userStore.token"
          v-lazy
          class="w-15 h-15 ml-8 cursor-pointer rounded-full bg-transparent"
          :src="userStore.userInfo.avatar" />
        <profile-vue class="absolute right-0 top-17.5 invisible group-hover:visible duration-150">
          <template #default>
            <span
              v-for="item in profileArr"
              :key="item.id"
              class="pt-1.25 cursor-pointer"
              @click="handleMenuAction(item)"
              >{{ item.name }}</span
            >
          </template>
        </profile-vue>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
