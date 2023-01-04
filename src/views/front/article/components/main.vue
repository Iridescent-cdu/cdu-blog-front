<script setup>
import { formatDate } from '@/utils/format.js'
defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="w-197.5 px-17.25 mt-13.5 mb-18 flex flex-col">
    <!-- 标题 -->
    <h2 class="text-10xl font-serif font-bold text-center">{{ data.title }}</h2>
    <!-- 作者和时间 -->
    <div class="mt-4.25 mb-3.25 flex justify-center items-center font-sans text-m-gray cursor-pointer">
      <span class="mr-5.5">{{ data.author }}</span>
      <span v-if="data.date">{{ formatDate(data.date) }}</span>
    </div>
    <!-- 标签 -->
    <div class="mb-6.5 flex justify-center items-center font-sans text-m-gray">
      <span class="mr-2 cursor-pointer">{{ data.tags }}</span>
    </div>
    <!-- 正文 -->

    <p
      class="font-sans text-base"
      v-html="data.content"></p>
  </div>
</template>

<style scoped lang="scss"></style>
