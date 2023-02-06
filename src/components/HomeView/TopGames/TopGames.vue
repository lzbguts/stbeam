<template>
    <div>
        <div>
            <h1>Top {{ num_games }} Games</h1>
        </div>
        <div class="top-games">
            <div v-for="game in top_games">
                <RouterLink :to="`/games/${game._id}`">
                    <img :src="`https://cdn.akamai.steamstatic.com/steam/apps/${game._id}/header.jpg`" alt="">
                    <h1>{{ game.name }}</h1>
                </RouterLink>
            </div>
        </div>

    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "TopGames",
    components: {
        RouterLink
    },
    data() {
        return {
            num_games: 10,
            top_games: []
        }
    },
    methods: {
        async getTop(num) {
            const req = await fetch(`${this.$stbeamAPI}/top/${num}`);
            const data = await req.json();

            this.top_games = data;
        }
    },
    mounted() {
        this.getTop(this.num_games);
    }
}
</script>

<style scoped src="./TopGames.css"></style>