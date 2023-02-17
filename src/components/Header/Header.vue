<template>
    <header>
        <nav>
            <div id="routes">
                <RouterLink to="/">
                    <img src="/logo.png" alt="Logo">
                </RouterLink>
                <RouterLink to="/" class="nav-home">Home</RouterLink>
                <RouterLink to="/about">Sobre</RouterLink>
                <a href="//nossairt.net/4/5708759" class="nav-ad">AD</a>
            </div>
            <form class="form-group-search">
                <input type="text" name="gameSearch" id="gameSearch" placeholder="AppID" v-model="search_field">
                <button type="submit" @click.prevent="search"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
            </form>
        </nav>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "Header",
    components: {
        RouterLink
    },
    data() {
        return {
            search_field: ""
        }
    },
    methods: {
        search() {
            this.$router.push(`/games/${this.search_field}`)
            this.search_field = "";
        }
    }
}
</script>

<style scoped src="./Header.css">
</style>