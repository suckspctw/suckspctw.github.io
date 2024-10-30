<script setup lang="ts">
import defaultArticles from '@/assets/json/default-articles.json'
import AppSection from '@/components/AppSection.vue'
</script>

<template>
  <div class="max-w-screen-md mx-auto pt-4 px-4 pb-14">
    <h1 class="text-2xl mt-4 mb-6">原價屋消費爭議記錄</h1>
    <AppSection v-for="article in defaultArticles" class="mt-4" :article="article" />
  </div>
</template>
