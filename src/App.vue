<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import StatsSection from './components/StatsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import WorkSection from './components/WorkSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import StackSection from './components/StackSection.vue'
import OpenSourceSection from './components/OpenSourceSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <StatsSection />
    <ServicesSection />
    <WorkSection />
    <ProcessSection />
    <StackSection />
    <OpenSourceSection />
    <FaqSection />
  </main>
  <ContactSection />
</template>
