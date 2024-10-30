<script setup lang="ts">
import { computed } from 'vue'

enum LabelType {
  SHIPPING_DEFECT = 'SHIPPING_DEFECT',
  INSTALLATION_DEFECT = 'INSTALLATION_DEFECT',
  REFUND_REJECTED = 'REFUND_REJECTED',
  USED_ITEM_SELLING = 'USED_ITEM_SELLING',
  VIOLENT_INCIDENT = 'VIOLENT_INCIDENT',
  POOR_CUSTOMER_SERVICE = 'POOR_CUSTOMER_SERVICE',
  EXCHANGES_REJECTED = 'EXCHANGES_REJECTED'
}

type Article = {
  createdAt: string;
  title: string;
  url: string;
  desc: string;
  label?: string | string[];
}

const props = defineProps<{ article: Article }>()

const labels = computed(() => {
  const { label } = props.article
  if (Array.isArray(label)) {
    return label
  }
  if (label) {
    return [label]
  }
  return []
})

const getLabelText = (label: string) => {
  switch (label) {
    case LabelType.SHIPPING_DEFECT:
      return '物流出包'
    case LabelType.INSTALLATION_DEFECT:
      return '安裝出包'
    case LabelType.REFUND_REJECTED:
      return '拒絕退貨'
    case LabelType.USED_ITEM_SELLING:
      return '二手當新品賣'
    case LabelType.VIOLENT_INCIDENT:
      return '暴力事件'
    case LabelType.POOR_CUSTOMER_SERVICE:
      return '服務態度不佳'
    case LabelType.EXCHANGES_REJECTED:
      return '拒絕換貨'
    default:
      return ''
  }
}

const getLabelClass = (label: string) => {
  switch (label) {
    case LabelType.SHIPPING_DEFECT:
      return 'bg-cyan-800'
    case LabelType.INSTALLATION_DEFECT:
      return 'bg-orange-700'
    case LabelType.REFUND_REJECTED:
      return 'bg-red-800'
    case LabelType.USED_ITEM_SELLING:
      return 'bg-violet-900'
    case LabelType.VIOLENT_INCIDENT:
      return 'bg-slate-700'
    case LabelType.POOR_CUSTOMER_SERVICE:
      return 'bg-slate-700'
    case LabelType.EXCHANGES_REJECTED:
      return 'bg-teal-800'
    default:
      return ''
  }
}
</script>

<template>
  <div class="app-section">
    <div class="flex items-start">
      <div class="text-xs bg-stone-700 px-2 py-1 inline-block mr-3 whitespace-nowrap rounded mt-0.5">{{ article.createdAt }}</div>
      <div class="app-section__title">
        {{ article.title }}
        <span v-for="label in labels"
              class="leading-3.5 px-1 py-0.5 rounded text-xs font-bold inline-block ml-1"
              :class="getLabelClass(label)">{{ getLabelText(label) }}</span>
        <a class="ml-2 whitespace-nowrap" :href="article.url" target="_blank">連結</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-section {
}
</style>
