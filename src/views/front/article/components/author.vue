<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col w-179.5 h-50">
    <p class="text-11xl text-m-gray font-sans mb-3.75">ABOUT THE AUTHOR</p>
    <div class="flex cursor-pointer">
      <div class="w-40 h-40 mr-18.75">
        <img
          class="w-40 h-40 rounded-full"
          :src="data.avatar" />
      </div>
      <div class="flex flex-col flex-1">
        <h2 class="text-9xl font-sans">{{ data.name }}</h2>
        <span class="text-m-gray">{{ data.email }}</span>
        <p class="h-24 overflow-hidden">
          {{ data.selfIntro }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
