<script setup>
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import WorkSection from './components/WorkSection.vue'
import StackSection from './components/StackSection.vue'
import OpenSourceSection from './components/OpenSourceSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 sm:px-6">
    <HeroSection />
    <main>
      <ServicesSection />
      <WorkSection />
      <StackSection />
      <OpenSourceSection />
    </main>
    <ContactSection />
  </div>
</template>
