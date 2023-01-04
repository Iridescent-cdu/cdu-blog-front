<script setup>
defineProps({
  data: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="flex w-179.5 h-50">
    <div class="w-50 h-50 mr-18.75">
      <img
        v-lazy
        class="w-50 h-50 rounded-full"
        :src="data.avatar" />
    </div>
    <div class="flex flex-col flex-1">
      <h2 class="text-10xl font-sans">{{ data.nickname }}</h2>
      <span class="text-m-gray">{{ data.email }}</span>
      <p v-html="data.selfIntro"></p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
