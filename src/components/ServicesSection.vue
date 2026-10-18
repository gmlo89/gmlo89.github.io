<script setup>
import SectionHeading from './SectionHeading.vue'
import { services } from '../data/content'
</script>

<template>
  <section id="services" class="py-16">
    <SectionHeading eyebrow="Services" title="What I can build for you" />
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="service in services"
        :key="service.title"
        class="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
      >
        <component :is="service.icon" class="size-8 text-red-600 dark:text-red-400" />
        <h3 class="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{{ service.title }}</h3>
        <p class="mt-2 leading-relaxed">{{ service.text }}</p>
      </article>
    </div>
  </section>
</template>
