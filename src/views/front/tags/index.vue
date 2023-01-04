<script setup>
import tagsVue from './components/tags.vue'
import resultVue from './components/result.vue'
import searchVue from './components/search.vue'
import { useSearchStore } from '@/store/search.js'
const searchStore = useSearchStore()
</script>

<template>
  <div class="flex flex-col items-center pt-37.75">
    <search-vue></search-vue>
    <tags-vue v-show="!searchStore.isSearched"></tags-vue>
    <result-vue v-show="searchStore.isSearched"></result-vue>
  </div>
</template>

<style scoped lang="scss"></style>
