<template>
    <div class="container-main">
        <div>
            <div v-show="!isLoading" class="game-info">
                <a :href="url_game"><img :src="img" :alt="nome"></a>
                <h1>{{ nome }}</h1>
                <GameContent @recursos="carregarRecursos" />
                <div class="screenshots">
                    <img v-for="screenshot in screenshots" :src="screenshot.path_thumbnail" :alt="`Screenshot ${screenshot.id + 1}`" @click="abrirModal(screenshot.id)">
                </div>
            </div>
            <div v-show="isLoading">
                <SplashScreen />
            </div>
        </div>
    </div>
    <div class="modal" id="modalScreenshots" v-show="modalOn">
        <div class="modal-content">
            <span class="close" @click="fecharModal">&times;</span>
            <img :src="screenshotModal.img">
            <div class="modal-navigation">
                <button type="button" @click="mudarScreenshot(screenshotModal.id - 1)">&lt;</button>
                <span>{{ screenshotModal.id + 1 }}</span>
                <button type="button" @click="mudarScreenshot(screenshotModal.id + 1)">&gt;</button>
            </div>
        </div>
    </div>
</template>

<script>
import GameContent from '../../components/GameView/GameContent/GameContent.vue';
import SplashScreen from '../../components/SplashScreen/SplashScreen.vue';

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
            screenshots: [],
            screenshotModal: {},
            isLoading: true,
            modalOn: false
        }
    },
    methods: {
        carregarRecursos({ nome, img, screenshots, id }) {
            this.url_game = `https://store.steampowered.com/app/${id}`;
            this.nome = nome;
            this.screenshots = screenshots;
            this.img = img;
            this.isLoading = false;

            document.title = `${this.nome} - ${this.$appName}`;
        },

        abrirModal(screenshotModalID) {
            this.mudarScreenshot(screenshotModalID)
            this.modalOn = true;
        },

        fecharModal() {
            this.modalOn = false;
        },

        mudarScreenshot(screenshotModalID) {
            if(screenshotModalID < 0) screenshotModalID = this.screenshots.length - 1;
            else if(screenshotModalID > this.screenshots.length - 1) screenshotModalID = 0;

            this.screenshotModal = {
                id: screenshotModalID,
                img: this.screenshots[screenshotModalID].path_full
            }
        }
    }
}
</script>
<style scoped src="./GameView.css">

</style>