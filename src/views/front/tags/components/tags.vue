<script setup>
import { useSearchStore } from '@/store/search.js'
const searchStore = useSearchStore()

/**
 * 处理点击
 */
const onClickHandler = (name) => {
  searchStore.setKeyword(name)
}
</script>

<template>
  <div class="flex justify-center flex-wrap w-293.75 mt-14.75">
    <m-button
      v-for="item in searchStore.allTags"
      :key="item.id"
      type="tags"
      class="mr-3.75 mb-6.25"
      @click="onClickHandler(item.name)"
      >#{{ item.name }}</m-button
    >
  </div>
</template>

<style scoped lang="scss"></style>
