<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { menuArr } from '../../../constants'

const router = useRouter()

const route = useRoute()
const currentIndex = ref(0)
const onClickHander = (item, index) => {
  currentIndex.value = index
  router.push(item.path)
}

const toFrontHandler = () => {
  router.push('/')
}
onMounted(() => {
  currentIndex.value = menuArr.findIndex((item) => {
    return item.path.includes(route.name)
  })
})
</script>

<template>
  <div class="flex flex-col w-56.25 h-screen bg-m-admin">
    <img
      v-lazy
      class="w-44.5 h-14.25 mt-7.75 mb-12.75 ml-6.25 mr-5.5 cursor-pointer"
      src="https://cdu-blog-api.oss-cn-chengdu.aliyuncs.com/logo/Logo%20Admin.png"
      @click="toFrontHandler" />
    <div
      v-for="(item, index) in menuArr"
      :key="item.id"
      class="flex items-center w-full h-14.5 cursor-pointer"
      :class="currentIndex === index && 'bg-m-focus'"
      @click="onClickHander(item, index)">
      <m-svg-icon
        fill-class="fill-transparent stroke-zinc-100"
        class="w-7.5 h-7.5 ml-6.25 mr-3.75"
        :name="item.svg"></m-svg-icon>
      <span class="font-sans text-light-50">{{ item.name }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
