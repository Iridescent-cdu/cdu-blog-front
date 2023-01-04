<script setup>
import { onMounted } from 'vue'
import pinsVue from './components/pins.vue'
import { useUserStore } from '@/store/user.js'
const userStore = useUserStore()

onMounted(async () => {
  await userStore.getUserInfoAction()
})
</script>

<template>
  <div class="flex flex-col mt-27.75">
    <!-- profile -->
    <div class="flex justify-center items-center">
      <pins-vue :data="userStore.userInfo"></pins-vue>
    </div>
    <!-- articles -->
    <div v-if="userStore.articles.length">
      <!-- main -->
      <div class="relative flex justify-center mt-28.25">
        <img
          v-lazy
          class="w-250 h-112.5 mx-48.75"
          :src="userStore.articles[0].picture" />
        <m-article
          :data="userStore.articles[0]"
          class="absolute bg-light-50 mt-0 right-19.5"></m-article>
      </div>
      <!-- article -->
      <div class="w-full h-full flex justify-center">
        <div class="w-203 h-226.5 flex flex-col">
          <m-article
            v-for="item in userStore.articles"
            :key="item.id"
            type="small"
            :data="item"></m-article>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
