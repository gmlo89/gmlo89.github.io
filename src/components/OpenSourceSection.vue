<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import SectionHeading from './SectionHeading.vue'
import { openSource } from '../data/content'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <section id="open-source" class="mx-auto max-w-6xl px-4 py-10 sm:px-6">
    <SectionHeading :eyebrow="t.openSource.eyebrow" :title="t.openSource.title" />
    <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <a
        v-for="repo in openSource"
        :key="repo.name"
        :href="repo.url"
        target="_blank"
        rel="noopener"
        class="group flex items-start justify-between gap-4 rounded-xl border border-zinc-200 p-5 transition hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
      >
        <div>
          <h3 class="font-mono font-medium text-zinc-900 dark:text-white">{{ repo.name }}</h3>
          <p class="mt-1 text-sm">{{ t.openSource.items[repo.name] }}</p>
        </div>
        <ArrowUpRight class="size-5 shrink-0 text-zinc-400 transition group-hover:text-zinc-900 dark:group-hover:text-white" />
      </a>
    </div>
  </section>
</template>
