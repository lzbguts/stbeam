<template>
	<div class="container-main">
        <div>
            <div>
                <h1>O que é esse site?</h1>
                <p>O {{ $appName }} foi criado para comparar os preços na <a href="https://store.steampowered.com/">Steam</a> brasileira e na turca, a fim de ajudar o usuário a decidir em qual região vale mais a pena comprar o jogo.</p>
            </div>
            <div>
                <h1>Quais tecnologias foram usadas?</h1>
                <p>Back-end: <a href="https://nodejs.org/en/">Node.js</a> com o auxílio do <a href="https://expressjs.com/">Express</a> e do <a href="https://mongoosejs.com/">Mongoose</a> (<a href="https://www.mongodb.com/">MongoDB</a>).</p>
                <p>Front-end: <a href="https://vuejs.org/">Vue 3</a>.</p>
            </div>
            <div>
                <h1>Como usar?</h1>
                <p>É muito fácil! Para acessar a página de um jogo no site, é só você colocar o AppID dele na barra de pesquisa do canto direito superior ou na URL <b>/games/<i>id</i></b></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: "HomeView",
	mounted() {
		document.title = `Sobre - ${this.$appName}`;
	}
}
</script>

<style scoped src="./AboutView.css"></style>