import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'

import components from './components'
import directives from './directives'

import 'virtual:windi.css'
import 'virtual:svg-icons-register'
// import '@/utils/mock.js'
import pinia from '@/store/index.js'
import router from '@/router/index.js'
// 路由鉴权
import './permission'

createApp(App)
  .use(router)
  .use(pinia)
  .use(components)
  .use(directives)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount('#app')
