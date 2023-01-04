<script setup>
import { ref, watch } from 'vue'
import changeAvatarVue from './change-avatar.vue'
import { useUserStore } from '@/store/user.js'
const UserStore = useUserStore()
const inputFileTarget = ref(null)
const currentAvatar = ref(null)
const isDialogVisible = ref(false)
/**
 * 点击拉起文件选择
 */
const onClickAvatar = () => {
  inputFileTarget.value.click()
}
/**
 * 处理选择后的文件
 */
const onChangeAvatar = () => {
  const imgFile = inputFileTarget.value.files[0]
  const blobUrl = URL.createObjectURL(imgFile)
  currentAvatar.value = blobUrl
  isDialogVisible.value = true
}
/**
 * 关闭时清空输入框保存的img
 */
watch(isDialogVisible, () => {
  if (isDialogVisible.value === false) {
    inputFileTarget.value.value = null
  }
})
</script>

<template>
  <div class="pl-20 mb-10 mt-10">
    <span class="ml-2 font-light text-[#606266]">更换头像</span>
    <div
      class="group w-20 mt-3 relative"
      @click="onClickAvatar">
      <img
        class="group rounded-full w-20 h-20"
        :src="UserStore.userInfo.avatar" />
      <div
        class="absolute flex-col justify-start items-center rounded-full top-0 w-20 h-20 bg-black/40 cursor-pointer hidden group-hover:flex duration-300">
        <div>
          <m-svg-icon
            name="change-header-image"
            class="w-6 h-6 mt-4"></m-svg-icon>
        </div>
        <div class="text-center text-xs text-white scale-90 mt-0.5">点击更换头像</div>
      </div>
      <input
        v-show="false"
        ref="inputFileTarget"
        type="file"
        accept=".png,.jpeg,.jpg,.gif"
        @change="onChangeAvatar" />
    </div>
    <teleport to="body">
      <m-dialog
        v-model="isDialogVisible"
        title="裁剪头像">
        <change-avatar-vue
          :current-avatar="currentAvatar"
          @close="isDialogVisible = false"></change-avatar-vue>
      </m-dialog>
    </teleport>
  </div>
</template>

<style scoped lang="scss"></style>
