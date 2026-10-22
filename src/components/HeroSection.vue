<script setup>
import { ArrowRight, Clock, MapPin, ReceiptText, ShieldCheck } from 'lucide-vue-next'
import { profile } from '../data/content'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()

const factIcons = [MapPin, Clock, ReceiptText, ShieldCheck]
</script>

<template>
  <section id="top" class="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
    <div>
      <p
        class="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
      >
        <span class="size-2 rounded-full bg-emerald-500 dark:bg-emerald-400"></span> {{ t.hero.available }}
      </p>
      <h1 class="mt-6 text-4xl leading-[1.05] font-bold tracking-tight text-balance text-zinc-900 sm:text-6xl dark:text-white">
        {{ t.hero.headline }}
      </h1>
      <p class="mt-6 max-w-xl text-lg leading-relaxed">
        {{ t.hero.intro[0] }} <strong class="text-zinc-900 dark:text-white">{{ profile.name }}</strong>, {{ t.hero.intro[1] }}
      </p>
      <p class="mt-4 max-w-xl text-lg leading-relaxed">
        {{ t.hero.support[0] }} <strong class="text-zinc-900 dark:text-white">{{ t.hero.support[1] }}</strong>{{ t.hero.support[2] }}
      </p>
      <div class="mt-9 flex flex-wrap gap-3">
        <a
          href="#contact"
          class="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-3.5 font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {{ t.hero.primaryCta }} <ArrowRight class="size-4" />
        </a>
        <a
          href="#work"
          class="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-3.5 font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900"
        >
          {{ t.hero.secondaryCta }}
        </a>
      </div>
    </div>

    <aside class="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-7 dark:border-zinc-800 dark:bg-zinc-900">
      <div class="flex items-center gap-4">
        <img
          :src="profile.avatar"
          :alt="profile.name"
          width="72"
          height="72"
          class="size-18 rounded-full ring-1 ring-zinc-200 ring-offset-2 ring-offset-zinc-50 dark:ring-zinc-700 dark:ring-offset-zinc-900"
        />
        <div>
          <p class="text-lg font-bold text-zinc-900 dark:text-white">{{ profile.name }}</p>
          <p class="text-sm text-zinc-500 dark:text-zinc-400">{{ t.hero.role }}</p>
        </div>
      </div>
      <ul class="mt-6 space-y-4">
        <li v-for="(fact, index) in t.hero.facts" :key="fact.title" class="flex gap-3">
          <component :is="factIcons[index]" class="mt-0.5 size-5 shrink-0 text-red-600 dark:text-red-400" />
          <span>
            <span class="block font-semibold text-zinc-900 dark:text-white">{{ fact.title }}</span>
            <span class="block text-sm text-zinc-500 dark:text-zinc-400">{{ fact.text }}</span>
          </span>
        </li>
      </ul>
    </aside>
  </section>
</template>
