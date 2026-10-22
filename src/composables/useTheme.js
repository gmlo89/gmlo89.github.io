import { ref, watch } from 'vue'

// Keep in sync with the inline script in index.html that applies the theme before mount.
const STORAGE_KEY = 'theme'
const modes = ['system', 'light', 'dark']
const media = window.matchMedia('(prefers-color-scheme: dark)')

function initialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (modes.includes(saved)) return saved
  } catch {
    // Storage can be unavailable (private mode, blocked cookies).
  }
  return 'system'
}

const theme = ref(initialTheme())

function apply() {
  const dark = theme.value === 'dark' || (theme.value === 'system' && media.matches)
  document.documentElement.classList.toggle('dark', dark)
}

media.addEventListener('change', apply)
watch(theme, apply, { immediate: true })

function cycleTheme() {
  theme.value = modes[(modes.indexOf(theme.value) + 1) % modes.length]
  try {
    if (theme.value === 'system') localStorage.removeItem(STORAGE_KEY)
    else localStorage.setItem(STORAGE_KEY, theme.value)
  } catch {
    // Ignore: the choice just won't persist.
  }
}

export function useTheme() {
  return { theme, cycleTheme }
}
