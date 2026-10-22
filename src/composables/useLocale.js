import { computed, ref, watch } from 'vue'
import { messages } from '../data/content'

const STORAGE_KEY = 'locale'
const supported = Object.keys(messages)

function initialLocale() {
  const fromQuery = new URLSearchParams(window.location.search).get('lang')
  if (supported.includes(fromQuery)) return fromQuery

  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (supported.includes(saved)) return saved
  } catch {
    // Storage can be unavailable (private mode, blocked cookies).
  }

  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

const locale = ref(initialLocale())
const t = computed(() => messages[locale.value])

watch(
  locale,
  (value) => {
    document.documentElement.lang = value
    document.title = t.value.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.value.meta.description)
  },
  { immediate: true },
)

function setLocale(value) {
  if (!supported.includes(value)) return
  locale.value = value
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // Ignore: the choice just won't persist.
  }
}

export function useLocale() {
  return { locale, t, setLocale, supported }
}
