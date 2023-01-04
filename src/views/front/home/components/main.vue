<script setup>
defineProps({
  data: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <!-- content -->
  <div class="flex flex-col justify-center items-center">
    <div class="flex flex-col justify-center items-center mt-12.5">
      <h2 class="w-72.75 h-14 font-sans font-bold text-10xl">Editor’s Picks</h2>
      <!-- 装饰 -->
      <div class="w-47.5 mt-4.25 border-top-5px border-[#1C1C1C]"></div>
    </div>

    <m-article
      v-for="item in data"
      :key="item.id"
      :data="item"
      type="medium"></m-article>
  </div>
</template>

<style scoped lang="scss"></style>
