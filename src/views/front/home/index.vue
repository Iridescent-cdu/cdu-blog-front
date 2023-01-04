<script setup>
import { onMounted, ref } from 'vue'
import { getHome } from '../../../api/home'
import bannerVue from './components/banner.vue'
import mainVue from './components/main.vue'
import footerVue from './components/footer.vue'
import { useSearchStore } from '@/store/search.js'

const searchStore = useSearchStore()
const homeResult = ref({})
onMounted(async () => {
  const res = await getHome()
  homeResult.value = res
  searchStore.getTagsResult()
})
</script>

<template>
  <div v-if="JSON.stringify(homeResult) !== '{}'">
    <!-- banner-1 -->
    <banner-vue :data="homeResult.banners[0]"></banner-vue>
    <!-- main -->
    <main-vue :data="homeResult.main"></main-vue>
    <!-- banner-2 -->
    <banner-vue
      :data="homeResult.banners[1]"
      img-position="right"
      class="mt-12.5"></banner-vue>
    <!-- footer -->
    <footer-vue :data="homeResult.footer"></footer-vue>
  </div>
</template>

<style scoped lang="scss"></style>
