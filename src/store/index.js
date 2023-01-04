import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { markRaw } from 'vue'
import router from '@/router/index.js'
const pinia = createPinia()

pinia.use(({ store }) => {
  store.$router = markRaw(router)
})
pinia.use(piniaPluginPersistedstate)
export default pinia
