<script setup>
import SectionHeading from './SectionHeading.vue'
import { stack } from '../data/content'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <section id="stack" class="mx-auto max-w-6xl px-4 pt-20 pb-10 sm:px-6 sm:pt-24">
    <SectionHeading :eyebrow="t.stack.eyebrow" :title="t.stack.title" />
    <dl class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="category in stack" :key="category.id">
        <dt class="font-semibold text-zinc-900 dark:text-white">{{ t.stack.groups[category.id] }}</dt>
        <dd class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="item in category.items"
            :key="item"
            class="rounded-md border border-zinc-200 px-2.5 py-1 text-sm dark:border-zinc-800"
          >
            {{ item }}
          </span>
        </dd>
      </div>
    </dl>
  </section>
</template>
