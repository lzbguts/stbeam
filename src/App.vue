<template>
	<div class="app">
		<Header />
		<RouterView :key="$route.fullPath" />
		<Footer />
	</div>
</template>

<script>
import { RouterView } from 'vue-router'
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';

export default {
	name: "App",
	components: {
		Header,
		Footer
	}
}

</script>

<style scoped>
.app {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
}
</style>
