<script setup>
import { ArrowRight, GraduationCap, Linkedin, MapPin } from 'lucide-vue-next'
import { links, profile } from '../data/content'
</script>

<template>
  <header class="py-20 sm:py-28">
    <img
      :src="profile.avatar"
      :alt="profile.name"
      width="96"
      height="96"
      class="size-24 rounded-full ring-4 ring-zinc-100 dark:ring-zinc-800"
    />
    <p class="mt-8 flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
      <MapPin class="size-4" /> Based in {{ profile.location }} ·
      <span class="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
        <span class="size-2 rounded-full bg-current"></span> Available for freelance projects
      </span>
    </p>
    <h1 class="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-white">
      {{ profile.name }}
    </h1>
    <p class="mt-3 text-xl font-medium text-zinc-600 sm:text-2xl dark:text-zinc-300">
      {{ profile.title }} · <span class="text-red-600 dark:text-red-400">{{ profile.specialty }}</span>
    </p>
    <p class="mt-6 max-w-2xl text-lg leading-relaxed">{{ profile.pitch }}</p>
    <p class="mt-4 flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-400">
      <GraduationCap class="mt-0.5 size-4 shrink-0" />
      <span>
        {{ profile.education.degree }} · {{ profile.education.school }} ({{ profile.education.years }})
      </span>
    </p>
    <div class="mt-10 flex flex-wrap gap-3">
      <a
        :href="links.email"
        class="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-3 font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        Let's talk <ArrowRight class="size-4" />
      </a>
      <a
        :href="links.linkedin"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-3 font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900"
      >
        <Linkedin class="size-4" /> LinkedIn
      </a>
    </div>
  </header>
</template>
