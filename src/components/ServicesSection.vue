<script setup>
import { Users } from 'lucide-vue-next'
import SectionHeading from './SectionHeading.vue'
import { services } from '../data/content'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <section id="services" class="mx-auto max-w-6xl px-4 pt-20 pb-10 sm:px-6 sm:pt-24">
    <SectionHeading :eyebrow="t.services.eyebrow" :title="t.services.title" />
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="service in services"
        :key="service.id"
        class="rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
      >
        <span class="inline-flex size-11 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-950/60 dark:text-red-400">
          <component :is="service.icon" class="size-5.5" />
        </span>
        <h3 class="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{{ t.services.items[service.id].title }}</h3>
        <p class="mt-2 leading-relaxed">{{ t.services.items[service.id].text }}</p>
      </article>
    </div>

    <div class="mt-4 flex flex-wrap items-center gap-5 rounded-2xl bg-zinc-900 p-6 text-zinc-300 sm:p-7 dark:border dark:border-zinc-800">
      <span class="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-zinc-800 text-red-400">
        <Users class="size-6" />
      </span>
      <div class="min-w-0 flex-[1_1_20rem]">
        <h3 class="text-xl font-semibold text-white">{{ t.services.agency.title }}</h3>
        <p class="mt-1.5 leading-relaxed">{{ t.services.agency.text }}</p>
      </div>
      <a href="#contact" class="rounded-lg bg-white px-4 py-3 font-semibold text-zinc-900 transition hover:bg-zinc-200">
        {{ t.services.agency.cta }}
      </a>
    </div>
  </section>
</template>
