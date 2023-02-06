<template>
	<div class="container-main">
		<TopGames/>
	</div>
</template>

<script>
import TopGames from '../../components/HomeView/TopGames/TopGames.vue';

export default {
	name: "HomeView",
	components: {
		TopGames
	},
	mounted() {
		document.title = `Home - ${this.$appName}`;
	}
}
</script>

<style scoped></style>