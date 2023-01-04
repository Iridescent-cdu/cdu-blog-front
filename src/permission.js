import router from '@/router/index.js'
import { useUserStore } from '@/store/user.js'

// 路由白名单，用户未登录允许进入的页面
const whiteListPath = ['/login', '/', '/tags', '/sign']
const whtieListName = ['article']
// 登录后不允许进入的页面
const loginList = ['/login', '/sign']

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (userStore.token) {
    if (loginList.includes(to.path)) {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteListPath.includes(to.path) || whtieListName.includes(to.name)) {
      next()
    } else {
      next('/')
    }
  }
})
