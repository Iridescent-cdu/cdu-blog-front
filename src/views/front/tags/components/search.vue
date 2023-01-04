<script setup>
import { ref, watch } from 'vue'
import { useSearchStore } from '@/store/search.js'
const searchStore = useSearchStore()
/**
 * 双向数据绑定
 */
const inputValue = ref('')

const onHandlerSearch = () => {
  searchStore.setKeyword(inputValue)
}
const onClearSearch = () => {
  searchStore.clearKeyword()
  searchStore.clearSearchResult()
}
const onBlurSearch = () => {
  if (!inputValue.value.trim()) {
    searchStore.isSearched = false
  }
}
watch(
  () => searchStore.tags,
  () => {
    inputValue.value = searchStore.tags
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <m-search
    v-model="inputValue"
    class="w-176.75 h-15"
    type="long"
    placeholder="Find the topics you care about..."
    @search="onHandlerSearch"
    @clear="onClearSearch"
    @blur="onBlurSearch"></m-search>
</template>

<style scoped lang="scss"></style>
