<script setup>
import { Plus } from 'lucide-vue-next'
import SectionHeading from './SectionHeading.vue'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <section id="faq" class="mx-auto grid max-w-6xl gap-4 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
    <SectionHeading :eyebrow="t.faq.eyebrow" :title="t.faq.title" />
    <div class="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
      <details v-for="(item, index) in t.faq.items" :key="item.q" class="group py-5" :open="index === 0">
        <summary class="flex cursor-pointer items-center justify-between gap-4 font-semibold text-zinc-900 dark:text-white">
          {{ item.q }}
          <Plus class="size-5 shrink-0 text-red-600 transition group-open:rotate-45 dark:text-red-400" />
        </summary>
        <p class="mt-3 leading-relaxed">{{ item.a }}</p>
      </details>
    </div>
  </section>
</template>
