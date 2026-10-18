<script setup>
import SectionHeading from './SectionHeading.vue'
import { work } from '../data/content'
</script>

<template>
  <section id="work" class="py-16">
    <SectionHeading eyebrow="Selected work" title="Projects I've delivered" />
    <div class="divide-y divide-zinc-200 dark:divide-zinc-800">
      <article v-for="project in work" :key="project.title" class="grid gap-3 py-8 first:pt-0 md:grid-cols-3 md:gap-8">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white">{{ project.title }}</h3>
        <div class="md:col-span-2">
          <p class="text-zinc-500 dark:text-zinc-400">{{ project.problem }}</p>
          <p class="mt-2 leading-relaxed">{{ project.solution }}</p>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {{ tag }}
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>
