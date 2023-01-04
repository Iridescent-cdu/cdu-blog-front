<script setup>
import avatarVue from './components/avatar.vue'
import formVue from './components/form.vue'
</script>

<template>
  <div class="p-3 w-full">
    <el-card>
      <avatar-vue></avatar-vue>
      <form-vue></form-vue>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.el-card {
  width: 100%;
  height: 100%;
}
</style>
