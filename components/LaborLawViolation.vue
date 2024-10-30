<script setup lang="ts">
type Item = {
  punishDate: string;
  city: string;
  punishCode: string;
  law: string;
  content: string;
}

defineProps<{ item: Item }>()
</script>

<template>
  <div>
    <div class="flex items-center">
      <div class="text-xs bg-stone-700 px-2 py-1 inline-block mr-2 whitespace-nowrap rounded mt-0.5">{{ item.punishDate }}</div>
      <div class="text-xs bg-stone-700 px-2 py-1 inline-block mr-2 whitespace-nowrap rounded mt-0.5">{{ item.city }}</div>
      <div class="text-xs">{{ item.punishCode }}</div>
    </div>
    <div class="text-sm mt-2" v-html="item.law" />
    <div v-html="item.content" />
  </div>
</template>
