import VueGtag, { trackRouter } from 'vue-gtag-next'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-R8ER18JW7C'
    }
  })
  trackRouter(useRouter())
})
