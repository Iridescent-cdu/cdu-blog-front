<script setup>
import { ref } from 'vue'
import pinVue from './components/pin.vue'
import totalVue from './components/total.vue'
import { getDashboard } from '@/api/article.js'

/**
 * 获取dashboard数据
 */
const dashboardData = ref({})
const getDashboardData = async () => {
  const res = await getDashboard()
  dashboardData.value = res
}
getDashboardData()
</script>

<template>
  <div class="p-3 w-full">
    <el-card>
      <div class="flex flex-col min-w-285.25 w-full">
        <!-- title -->
        <div class="mt-26.75 h-17.5 pl-10.5 font-serif text-13xl">Dashboard</div>
        <div class="flex mb-9.75">
          <pin-vue class="ml-9.5">
            <template #default>
              <div class="flex items-center">
                <m-svg-icon
                  class="w-7.5 h-7.5 mr-5.25"
                  fill-class="fill-zinc-100 stroke-current"
                  name="edit"></m-svg-icon>
                <span class="font-sans text-9xl">{{ dashboardData.totalPosts }}</span>
              </div>
            </template>
          </pin-vue>
          <pin-vue
            class="ml-9.5"
            title="Total Views">
            <template #default>
              <div class="flex items-center">
                <m-svg-icon
                  class="w-7.5 h-7.5 mr-5.25"
                  fill-class="fill-zinc-100 stroke-current"
                  name="eye"></m-svg-icon>
                <span class="font-sans text-9xl">{{ dashboardData.totalViews }}</span>
              </div>
            </template>
          </pin-vue>
          <pin-vue
            class="w-155.25 ml-9.5"
            title="Most Viewed Article">
            <template #default>
              <div class="flex items-center">
                <span class="font-serif text-14xl">{{ dashboardData.mostViewedArticle }}</span>
              </div>
            </template>
          </pin-vue>
        </div>
        <total-vue></total-vue>
      </div>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.el-card {
  width: 100%;
  height: 100%;
}
</style>
