// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  modules: ['nuxt-gtag'],
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-R8ER18JW7C'
  }
})
