import { defineStore } from 'pinia'
import { getTags } from '@/api/home.js'
import { getSearch } from '@/api/article.js'
export const useSearchStore = defineStore('search', {
  state: () => {
    return {
      allTags: [],
      articles: [],
      tags: '',
      isSearched: false,
    }
  },
  actions: {
    // 获取所有分类tags
    async getTagsResult() {
      const res = await getTags()
      this.allTags = res
    },
    // 获取搜索结果
    async getSearchResult() {
      const res = await getSearch({
        tags: this.tags,
      })
      this.articles = res
      this.isSearched = true
    },
    // 清空搜索结果
    clearSearchResult() {
      this.articles = []
      this.isSearched = false
    },
    // 设置keyword关键字
    setKeyword(newKeyword) {
      this.tags = newKeyword
      this.getSearchResult()
    },
    // 清空keyword关键字
    clearKeyword() {
      this.tags = ''
    },
  },
})
