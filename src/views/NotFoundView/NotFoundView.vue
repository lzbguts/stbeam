<template>
    <div class="container-main">
        <img src="/notfound.png" alt="Icon">
        <h1>Página não encontrada.</h1>
    </div>
</template>

<script>
export default {
    name: "NotFoundView",
    mounted() {
        document.title = `Página não encontrada - ${this.$appName}`;
    }
}
</script>
<style scoped src="./NotFoundView.css"></style>