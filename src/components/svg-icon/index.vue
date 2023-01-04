<script setup>
import { computed } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  fillClass: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
})
const symbolId = computed(() => {
  return `#icon-${props.name}`
})
</script>

<template>
  <svg aria-hidden="true">
    <use
      :xlink:href="symbolId"
      :class="fillClass"
      :fill="color"></use>
  </svg>
</template>

<style scoped lang="scss"></style>
