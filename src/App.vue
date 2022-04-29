<script setup>
import PersonalInfo from "./components/PersonalInfo.vue";
import BottomNav from "./components/BottomNav.vue";
import Skills from "./components/Skills.vue";
import Tools from "./components/Tools.vue";
</script>

<template>
	<div class="container">
		<div class="row d-flex align-items-stretch">
			<header class="col-md-3 d-flex flex-column">
				<PersonalInfo />
        <Skills />
				<BottomNav />
			</header>

			<main class="col-md-9">
        <Tools />
      </main>
		</div>
	</div>
</template>

<style lang="scss">
@import "./assets/base.scss";
</style>
