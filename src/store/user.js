import { defineStore } from 'pinia'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getUserInfo, login, signOut } from '@/api/user.js'
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userId: '',
      token: '',
      userInfo: {},
      articles: [],
    }
  },
  actions: {
    async toLogin(data) {
      const { sessionId, userId } = await login(data)

      if (sessionId) {
        this.token = sessionId
        this.userId = userId
        if (this.token) {
          this.$router.replace('/')
        }
        this.getUserInfoAction()
      } else {
        ElMessage({
          type: 'error',
          message: '登录失败',
        })
      }
    },
    /**
     * 获取用户信息
     */
    async getUserInfoAction() {
      const { userInfo, articles } = await getUserInfo(this.userId)
      this.userInfo = userInfo
      this.articles = articles
    },
    async toSignOut() {
      ElMessageBox.confirm('确认要退出吗', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          await signOut()
          this.$router.go(0)
          ElMessage({
            type: 'success',
            message: '退出成功',
          })
          this.token = ''
          this.userInfo = {}
          this.articles = []
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消',
          })
        })
    },
  },
  getters: {
    username: (state) => state.userInfo.name,
  },
  persist: {
    storage: localStorage,
    paths: ['userId', 'token', 'userInfo', 'articles'],
  },
})
