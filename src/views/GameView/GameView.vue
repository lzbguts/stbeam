<template>
    <div class="container-main">
        <div v-show="!isLoading" class="game-info">
            <a :href="url_game"><img :src="img" :alt="nome"></a>
            <h1>{{ nome }}</h1>
            <GameContent @recursos="carregarRecursos"/>
        </div>
        <div v-show="isLoading">
            <SplashScreen/>
        </div>
    </div>
</template>

<script>
import GameContent from '../../components/GameView/GameContent/GameContent.vue';
import SplashScreen from '../../components/SplashScreen/SplashScreen.vue'

export default {
    name: "GameView",
    components: {
        GameContent,
        SplashScreen
    },
    data() {
        return {
            nome: "",
            img: "",
            url_game: "",
            isLoading: true
        }
    },
    methods: {
        carregarRecursos({nome, img, id}) {
            this.url_game = `https://store.steampowered.com/app/${id}`;
            this.nome = nome;
            this.img = img;
            this.isLoading = false;

            document.title = `${this.nome} - ${this.$appName}`;
        }
    }
}
</script>
<style scoped src="./GameView.css"></style>