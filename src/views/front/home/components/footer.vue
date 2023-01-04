<script setup>
import { useRouter } from 'vue-router'
import { useSearchStore } from '@/store/search.js'

defineProps({
  data: {
    type: Array,
    required: true,
  },
})
const router = useRouter()
const searchStore = useSearchStore()

const onClickHandler = (name) => {
  router.push('/tags')
  searchStore.setKeyword(name)
}
</script>

<template>
  <div class="flex w-full h-243.75 px-30.25 pt-11">
    <div class="flex flex-col w-203 h-226.5">
      <m-article
        v-for="item in data"
        :key="item.id"
        :data="item"
        type="small"></m-article>
    </div>
    <div class="flex flex-col w-47.5 h-226.5 overflow-hidden font-sans">
      <h2 class="w-17 h-7.5 font-bold font-11xl text-center align-middle">tags.</h2>
      <span
        v-for="item in searchStore.allTags"
        :key="item.id"
        class="flex items-center pl-4 h-11.25 cursor-pointer"
        @click="onClickHandler(item.name)"
        >{{ item.name }}</span
      >
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
