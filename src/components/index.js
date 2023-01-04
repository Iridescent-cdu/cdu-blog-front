import { defineAsyncComponent } from 'vue'

export default {
  install(app) {
    const components = import.meta.glob('./**/index.vue')
    for (const [path, fn] of Object.entries(components)) {
      const name = path.replace(/\.\/(.+)\/.+/g, `m-$1`)
      app.component(name, defineAsyncComponent(fn))
    }
  },
}
