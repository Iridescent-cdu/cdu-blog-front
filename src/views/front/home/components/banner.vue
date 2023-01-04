<script>
/**
 * 定义imgPosition枚举
 */
const LEFT_IMG = 'left'
const RIGHT_IMG = 'right'
const IMG_POSITION = [LEFT_IMG, RIGHT_IMG]
</script>

<script setup>
defineProps({
  imgPosition: {
    type: String,
    default: LEFT_IMG,
    validator(val) {
      if (IMG_POSITION.includes(val)) {
        return true
      } else {
        throw new Error(`Banner的类型必须是${IMG_POSITION.join('、')}`)
      }
    },
  },
  data: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="px-6.25 relative">
    <img
      v-lazy
      class="w-full h-148"
      :src="data.picture" />
    <m-article
      :data="data"
      class="absolute bg-light-50"
      :class="(imgPosition === LEFT_IMG && 'mt-0 top-0 left-17.5') || 'mt-0 top-13.75 right-19.5'"></m-article>
  </div>
</template>

<style scoped lang="scss"></style>
