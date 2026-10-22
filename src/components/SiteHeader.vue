<script setup>
import { computed, ref } from 'vue'
import { Menu, Monitor, Moon, Sun, X } from 'lucide-vue-next'
import { profile } from '../data/content'
import { useLocale } from '../composables/useLocale'
import { useTheme } from '../composables/useTheme'

const { locale, t, setLocale, supported } = useLocale()
const { theme, cycleTheme } = useTheme()

const menuOpen = ref(false)

const navItems = computed(() => [
  { href: '#services', label: t.value.nav.services },
  { href: '#work', label: t.value.nav.work },
  { href: '#process', label: t.value.nav.process },
  { href: '#faq', label: t.value.nav.faq },
])

const themeIcon = computed(() => ({ system: Monitor, light: Sun, dark: Moon })[theme.value])
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-zinc-200 bg-white/85 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/85">
    <div class="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
      <a href="#top" class="flex items-center gap-2.5 font-bold tracking-tight text-zinc-900 dark:text-white">
        <span class="inline-flex size-8 items-center justify-center rounded-lg bg-zinc-900 font-mono text-xs text-white dark:bg-white dark:text-zinc-900">GL</span>
        <span class="hidden sm:inline">{{ profile.name }}</span>
      </a>

      <nav :aria-label="t.nav.label" class="ml-auto hidden gap-1 text-sm font-medium md:flex">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="rounded-lg px-3 py-2 text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="ml-auto flex items-center gap-2 md:ml-0">
        <div
          role="group"
          :aria-label="t.nav.language"
          class="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5 text-xs font-semibold dark:border-zinc-800 dark:bg-zinc-900"
        >
          <button
            v-for="code in supported"
            :key="code"
            type="button"
            :aria-pressed="locale === code"
            :lang="code"
            class="rounded-md px-2.5 py-2 uppercase transition"
            :class="
              locale === code
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
            "
            @click="setLocale(code)"
          >
            {{ code }}
          </button>
        </div>

        <button
          type="button"
          :aria-label="t.nav.theme[theme]"
          :title="t.nav.theme[theme]"
          class="inline-flex size-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
          @click="cycleTheme"
        >
          <component :is="themeIcon" class="size-4.5" />
        </button>

        <a
          href="#contact"
          class="hidden rounded-lg bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 sm:inline-flex dark:bg-red-500 dark:text-zinc-950 dark:hover:bg-red-400"
        >
          {{ t.nav.quote }}
        </a>

        <button
          type="button"
          :aria-label="menuOpen ? t.nav.closeMenu : t.nav.openMenu"
          :aria-expanded="menuOpen"
          aria-controls="mobile-nav"
          class="inline-flex size-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 md:hidden dark:border-zinc-800 dark:text-zinc-200"
          @click="menuOpen = !menuOpen"
        >
          <component :is="menuOpen ? X : Menu" class="size-4.5" />
        </button>
      </div>
    </div>

    <nav
      v-show="menuOpen"
      id="mobile-nav"
      :aria-label="t.nav.label"
      class="border-t border-zinc-200 px-4 pb-4 md:hidden dark:border-zinc-800"
    >
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        class="block rounded-lg px-3 py-3 font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900"
        @click="menuOpen = false"
      >
        {{ item.label }}
      </a>
      <a
        href="#contact"
        class="mt-2 block rounded-lg bg-red-600 px-3 py-3 text-center font-semibold text-white dark:bg-red-500 dark:text-zinc-950"
        @click="menuOpen = false"
      >
        {{ t.nav.quote }}
      </a>
    </nav>
  </header>
</template>
