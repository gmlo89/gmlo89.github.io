<script setup>
import { Check } from 'lucide-vue-next'
import SectionHeading from './SectionHeading.vue'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <section id="process" class="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
    <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading :eyebrow="t.process.eyebrow" :title="t.process.title" />
      <ol class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="(step, index) in t.process.steps"
          :key="step.title"
          class="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <p class="font-mono text-sm font-medium text-red-600 dark:text-red-400">{{ String(index + 1).padStart(2, '0') }}</p>
          <h3 class="mt-3 text-lg font-semibold text-zinc-900 dark:text-white">{{ step.title }}</h3>
          <p class="mt-2 leading-relaxed">{{ step.text }}</p>
        </li>
      </ol>
      <ul class="mt-6 flex flex-wrap gap-2.5">
        <li
          v-for="item in t.process.guarantees"
          :key="item"
          class="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3.5 py-2 text-sm font-medium text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
        >
          <Check class="size-4 text-emerald-600 dark:text-emerald-400" /> {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>
