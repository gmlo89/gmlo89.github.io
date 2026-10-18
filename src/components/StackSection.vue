<script setup>
import SectionHeading from './SectionHeading.vue'
import { stack } from '../data/content'
</script>

<template>
  <section id="stack" class="py-16">
    <SectionHeading eyebrow="Tech stack" title="Tools I work with every day" />
    <dl class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="category in stack" :key="category.group">
        <dt class="font-semibold text-zinc-900 dark:text-white">{{ category.group }}</dt>
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
