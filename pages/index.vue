<script setup lang="ts">
import defaultArticles from '@/assets/json/default-articles.json'
import AppSection from '@/components/AppSection.vue'

const title = '原價屋消費爭議記錄'

useHead({
  title,
  meta: [
    { name: 'keywords', content: '原價屋,二手屋,瑕疵屋,高價屋' },
    { name: 'description', content: '千錯萬錯都是消費者的錯，原價屋跟原廠永遠不會錯' }
  ]
})
</script>

<template>
  <div class="max-w-screen-md mx-auto pt-4 px-4 pb-14">
    <h1 class="text-2xl mt-4 mb-6">{{ title }}</h1>
    <AppSection v-for="article in defaultArticles" class="mt-4" :article="article" />
  </div>
</template>
