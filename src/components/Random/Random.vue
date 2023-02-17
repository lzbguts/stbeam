<template>
    <div class="container-main">
        <SplashScreen/>
    </div>
</template>

<script>
import router from '../../router';
import SplashScreen from '../SplashScreen/SplashScreen.vue';

export default {
    name: "Random",
    components: {
        SplashScreen
    },
    methods: {
        async gotoRandom() {
            const req = await fetch(`${this.$stbeamAPI}/random`);
            const data = await req.json();

            router.push(`/games/${data}`);
        }
    },
    mounted() {
        this.gotoRandom();
    }
}
</script>

<style scoped></style>