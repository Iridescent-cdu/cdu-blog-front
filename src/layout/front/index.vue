<script setup>
import { onMounted } from 'vue'
import headerVue from './header/index.vue'
import { useSearchStore } from '@/store/search.js'

const searchStore = useSearchStore()

onMounted(async () => {
  searchStore.getTagsResult()
})
</script>

<template>
  <div class="flex flex-col h-screen max-w-screen-xl m-auto">
    <header-vue class="relative z-50"></header-vue>
    <router-view
      class="relative z-10 h-full overflow-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thumb-rounded-md scrollbar-track-rounded-md"></router-view>
  </div>
</template>

<style scoped lang="scss"></style>
