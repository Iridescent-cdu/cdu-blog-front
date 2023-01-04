<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const handleGoBack = () => {
  router.go(-1)
}
</script>

<template>
  <div class="flex justify-between w-full h-37.5 mt-33.75 px-46 py-15.25 font-serif text-xl">
    <div class="cursor-pointer">
      <span @click="handleGoBack">Go back </span>
      <!-- <span>Boom boom pow is et Letstrade.</span> -->
    </div>
    <!-- <div class="cursor-pointer">
      <span>Next up: </span>
      <span>Lorem ipsum so Ceat Riak</span>
    </div> -->
  </div>
</template>

<style scoped lang="scss"></style>
