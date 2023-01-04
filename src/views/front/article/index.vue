<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import authorVue from './components/author.vue'
import mainVue from './components/main.vue'
import footerVue from './components/footer.vue'
import { getModifyArticle } from '@/api/article.js'
import { getUserInfo } from '@/api/user.js'
const route = useRoute()
const articleImg = ref({})
const articleDetail = ref({})
const articleAuthor = ref({})

watch(
  () => route.params.id,
  async (val) => {
    if (val) {
      const articleResult = await getModifyArticle(val)

      const { userInfo } = await getUserInfo(articleResult.userId)
      articleImg.value = articleResult.picture
      articleAuthor.value = userInfo

      articleDetail.value = articleResult
    }
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex justify-center w-full px-6.25">
      <img
        v-lazy
        class="w-329 h-148"
        :src="articleImg" />
    </div>
    <main-vue :data="articleDetail"></main-vue>
    <author-vue :data="articleAuthor"></author-vue>
    <footer-vue></footer-vue>
  </div>
</template>

<style scoped lang="scss"></style>
