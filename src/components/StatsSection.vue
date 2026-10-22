<script setup>
import { computed } from 'vue'
import { openSource, profile } from '../data/content'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()

const stats = computed(() => [
  { value: `${new Date().getFullYear() - profile.since}+`, label: t.value.stats.years },
  { value: `${profile.projectsDelivered}+`, label: t.value.stats.projects },
  { value: profile.industries, label: t.value.stats.industries },
  { value: openSource.length, label: t.value.stats.packages },
])
</script>

<template>
  <section :aria-label="t.stats.label" class="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
    <dl class="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-9 sm:px-6 lg:grid-cols-4">
      <div v-for="stat in stats" :key="stat.label" class="flex flex-col-reverse">
        <dt class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{{ stat.label }}</dt>
        <dd class="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">{{ stat.value }}</dd>
      </div>
    </dl>
  </section>
</template>
