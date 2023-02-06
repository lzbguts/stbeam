<template>
    <Popper arrow :content="content" placement="top" class="dark">
        <button v-if="size == 'small'" class="btn-informacao"><font-awesome-icon icon="fa-regular fa-circle-question" size="2x" /></button>
        <button v-else-if="size == 'large'" class="btn-informacao-large"><font-awesome-icon icon="fa-regular fa-circle-question" size="3x" /></button>
    </Popper>
</template>

<script>
export default {
    name: "Informacao",
    props: {
        content: String,
        size: {
            type: String,
            default: 'small'
        }
    }
}
</script>
<style scoped>@import './Informacao.css';</style>