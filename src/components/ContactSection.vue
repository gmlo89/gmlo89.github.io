<script setup>
import { Github, Linkedin, Mail, Twitter } from 'lucide-vue-next'
import { links, profile } from '../data/content'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()

const socials = [
  { label: 'LinkedIn', href: links.linkedin, icon: Linkedin },
  { label: 'GitHub', href: links.github, icon: Github },
  { label: 'X', href: links.x, icon: Twitter },
]
</script>

<template>
  <footer id="contact" class="mx-auto max-w-6xl px-4 pt-6 pb-14 sm:px-6">
    <div class="rounded-3xl bg-zinc-900 px-6 py-14 text-center sm:px-12 sm:py-18 dark:border dark:border-zinc-800">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-5xl">{{ t.contact.title }}</h2>
      <p class="mx-auto mt-4 max-w-xl text-lg text-zinc-300">{{ t.contact.text }}</p>
      <a
        :href="links.email"
        class="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 font-semibold text-white transition hover:bg-red-700 dark:bg-red-500 dark:text-zinc-950 dark:hover:bg-red-400"
      >
        <Mail class="size-4" /> {{ links.emailLabel }}
      </a>
      <ul class="mt-8 flex justify-center gap-6">
        <li v-for="social in socials" :key="social.label">
          <a :href="social.href" target="_blank" rel="noopener" :aria-label="social.label" class="text-zinc-400 transition hover:text-white">
            <component :is="social.icon" class="size-6" />
          </a>
        </li>
      </ul>
    </div>
    <p class="mt-8 text-center text-sm text-zinc-500">
      © {{ new Date().getFullYear() }} {{ profile.name }} · {{ t.contact.location }}
    </p>
  </footer>
</template>
