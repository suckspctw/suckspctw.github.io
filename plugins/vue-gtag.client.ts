import VueGtag, { trackRouter } from 'vue-gtag-next'

export default defineNuxtPlugin(nuxtApp => {
  const t = ref(null)
  onNuxtReady(async () => {
    const VueGtag = await import('vue-gtag-next')
    t.value = VueGtag

    nuxtApp.vueApp.use(VueGtag.default, {
      property: {
        id: 'G-R8ER18JW7C'
      },
      appName: 'suckspctw',
      isEnabled: false,
      useDebugger: nuxtApp.payload.config.public.mode !== 'prod',
      pageTrackerScreenviewEnabled: true
    });
    VueGtag.trackRouter(useRouter())

    if (VueGtag) {
      console.info('vue-gtag plugin installed')
    }
  })
})
