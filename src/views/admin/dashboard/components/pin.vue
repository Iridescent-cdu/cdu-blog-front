<script setup>
defineProps({
  title: {
    type: String,
    default: 'Total Posts',
  },
})
</script>

<template>
  <div class="flex flex-col justify-between h-26.75 w-44 p-2.5 border-m-gray border-2 rounded-xl">
    <h2 class="self-start font-serif text-sm">{{ title }}</h2>
    <slot></slot>
    <span class="self-end text-sm font-serif">This month</span>
  </div>
</template>

<style scoped lang="scss"></style>
