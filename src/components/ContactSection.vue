<script setup>
import { Github, Linkedin, Mail, Twitter } from 'lucide-vue-next'
import { links, profile } from '../data/content'

const socials = [
  { label: 'LinkedIn', href: links.linkedin, icon: Linkedin },
  { label: 'GitHub', href: links.github, icon: Github },
  { label: 'X', href: links.x, icon: Twitter },
]
</script>

<template>
  <footer id="contact" class="py-16">
    <div class="rounded-3xl bg-zinc-900 px-6 py-12 text-center sm:px-12 dark:border dark:border-zinc-800">
      <h2 class="text-3xl font-bold tracking-tight text-white">Have a project in mind?</h2>
      <p class="mx-auto mt-4 max-w-xl text-zinc-300">
        Tell me what you need to build or fix. I'll reply with questions, a plan and an estimate.
      </p>
      <a
        :href="links.email"
        class="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-zinc-900 transition hover:bg-zinc-200"
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
    <p class="mt-8 text-center text-sm text-zinc-500">© {{ new Date().getFullYear() }} {{ profile.name }}</p>
  </footer>
</template>
