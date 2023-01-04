<script setup>
import menuVue from './components/menu.vue'
</script>

<template>
  <div class="flex h-screen">
    <menu-vue class="flex-shrink-0"></menu-vue>
    <router-view
      class="overflow-auto scrollbar scrollbar-thumb-m-admin scrollbar-track-gray-100 scrollbar-thumb-rounded-md scrollbar-track-rounded-md"></router-view>
  </div>
</template>

<style scoped lang="scss"></style>
