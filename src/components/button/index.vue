<script>
/**
 * 定义type类型
 */
const PRIMARY_BUTTON = 'primary'
const LONG_BUTTON = 'long'
const TAGS_BUTTON = 'tags'
const TYPE_ENUM = [PRIMARY_BUTTON, LONG_BUTTON, TAGS_BUTTON]
const SIZE_ENUM = {
  primary: 'w-33.75 h-11.5 border-2px rounded-xl ',
  long: 'w-80.75 h-14.5 border-2px  rounded-xl ',
  tags: ' h-11 px-5.374 border rounded-5xl text-m-gray',
}
</script>

<script setup>
defineProps({
  type: {
    type: String,
    default: PRIMARY_BUTTON,
    validator(val) {
      if (TYPE_ENUM.includes(val)) {
        return true
      } else {
        throw new Error(`Button的类型必须是${TYPE_ENUM.join('、')}`)
      }
    },
  },
})
</script>

<template>
  <button
    class="flex justify-center items-center border-black font-serif font-xl hover:bg-light-900 active:bg-light-800"
    :class="SIZE_ENUM[type]">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss"></style>
