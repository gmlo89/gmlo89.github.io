<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <div class="mb-10">
    <p class="text-sm font-semibold tracking-widest text-red-600 uppercase dark:text-red-400">{{ eyebrow }}</p>
    <h2 class="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">{{ title }}</h2>
  </div>
</template>
