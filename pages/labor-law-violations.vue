<script setup lang="ts">
import laborLawViolations from '@/assets/json/labor-law-violations.json'
import LaborLawViolation from '@/components/LaborLawViolation.vue'
</script>

<template>
  <div class="max-w-screen-md mx-auto pt-4 px-4 pb-14">
    <h1 class="text-2xl mt-2 mb-6">
      原價屋違反勞基法記錄
      <a class="ml-2 text-sm"
        href="https://announcement.mol.gov.tw/cmpqry/%E5%8E%9F%E5%83%B9%E5%B1%8B"
        target="_blank">連結</a>
    </h1>
    <LaborLawViolation v-for="item in laborLawViolations" class="mt-4" :item="item" />
  </div>
</template>
