<script>
import { useRouter } from 'vue-router'
import { formatDate } from '@/utils/format.js'
/**
 * 定义size枚举
 */
const LARGE_TYPE = 'large'
const MEDIUM_TYPE = 'medium'
const SMALL_TYPE = 'small'
const TYPE_ENUM = [LARGE_TYPE, MEDIUM_TYPE, SMALL_TYPE]

const STYLE_ENUM = {
  [LARGE_TYPE]: {
    size: 'w-127.25 h-120.75 pt-19 pb-24 px-10',
    picture: false,
  },
  [MEDIUM_TYPE]: {
    size: 'w-107.5 h-77.75 ',
    picture: 'w-92.75 h-74.5 mr-13.75',
  },
  [SMALL_TYPE]: {
    size: 'w-134.5 h-44.25 ',
    picture: 'w-59.25 h-44.25 mr-9.25',
  },
}
</script>

<script setup>
defineProps({
  type: {
    type: String,
    default: LARGE_TYPE,
    validator(val) {
      if (TYPE_ENUM.includes(val)) {
        return true
      } else {
        throw new Error(`Article的类型必须是${TYPE_ENUM.join('、')}`)
      }
    },
  },
  showTags: {
    type: Boolean,
    default: true,
  },
  data: {
    type: Object,
    required: true,
  },
})
const router = useRouter()
/**
 * 跳转到文字详情页
 */
const toArticleDetail = (id) => {
  router.push({
    name: 'article',
    params: {
      id,
    },
  })
}
</script>

<template>
  <div
    class="flex mt-12.5"
    @click="toArticleDetail(data.articleId)">
    <img
      v-if="STYLE_ENUM[type].picture"
      v-lazy
      :class="STYLE_ENUM[type].picture"
      class="w-92.75 h-74.5 cursor-pointer bg-gray-600"
      :src="data.picture" />

    <div
      class="flex flex-col"
      :class="STYLE_ENUM[type].size">
      <!-- 栏目tags -->
      <h4
        v-if="showTags"
        class="h-7.25 font-sans text-m-gray cursor-pointer">
        {{ data.tags }}
      </h4>
      <!-- 标题 -->
      <h2 class="h-20.75 font-serif text-9xl font-bold cursor-pointer">{{ data.title }}</h2>
      <div class="flex font-sans text-m-gray mt-3 mb-3.5 cursor-pointer">
        <!-- 作者 -->
        <span class="h-5.5">{{ data.author }}</span>
        <span>&nbsp;</span>
        <!-- 时间 -->
        <span
          v-if="data.date"
          class="h-5.5"
          >{{ formatDate(data.date) }}</span
        >
        <!-- 内容 -->
      </div>
      <p
        class="h-37.75 font-sans overflow-hidden cursor-pointer"
        v-html="data.content"></p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
