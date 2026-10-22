<script setup>
import { computed, ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import SectionHeading from './SectionHeading.vue'
import { projects } from '../data/content'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()

const INITIAL_COUNT = 4
const showAll = ref(false)
const visibleProjects = computed(() => (showAll.value ? projects : projects.slice(0, INITIAL_COUNT)))
</script>

<template>
  <section id="work" class="mx-auto max-w-6xl px-4 py-16 sm:px-6">
    <SectionHeading :eyebrow="t.work.eyebrow" :title="t.work.title" />
    <div id="project-list" class="grid gap-4 md:grid-cols-2">
      <article
        v-for="project in visibleProjects"
        :key="project.id"
        class="flex flex-col rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
      >
        <p class="text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">{{ t.work.items[project.id].category }}</p>
        <h3 class="mt-2 text-xl font-semibold text-zinc-900 dark:text-white">{{ t.work.items[project.id].title }}</h3>
        <p class="mt-3 text-zinc-500 dark:text-zinc-400">{{ t.work.items[project.id].problem }}</p>
        <p class="mt-2 leading-relaxed">{{ t.work.items[project.id].solution }}</p>
        <ul class="mt-auto flex flex-wrap gap-1.5 pt-5">
          <li
            v-for="tag in project.tags"
            :key="tag"
            class="rounded-full bg-zinc-100 px-2.5 py-1 font-mono text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {{ tag }}
          </li>
        </ul>
      </article>
    </div>
    <div v-if="projects.length > INITIAL_COUNT" class="mt-6 flex justify-center">
      <button
        type="button"
        :aria-expanded="showAll"
        aria-controls="project-list"
        class="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-3 font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900"
        @click="showAll = !showAll"
      >
        {{ showAll ? t.work.showLess : `${t.work.showAll} (${projects.length})` }}
        <ChevronDown class="size-4 transition" :class="{ 'rotate-180': showAll }" />
      </button>
    </div>
  </section>
</template>
