<script setup>
import { useSearchStore } from '@/store/search.js'
const searchStore = useSearchStore()
</script>

<template>
  <!-- <div class="flex w-280.5 h-243.75 px-30.25 pt-11"> -->
  <div class="flex flex-col items-center w-203 h-226.5 pt-16.75">
    <m-article
      v-for="item in searchStore.articles"
      :key="item.id"
      :data="item"
      type="small"></m-article>
    <span v-if="!searchStore.articles.length">暂时没有数据</span>
  </div>
  <!-- </div> -->
</template>

<style scoped lang="scss"></style>
