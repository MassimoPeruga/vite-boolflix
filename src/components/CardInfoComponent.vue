<script>
export default {
    name: 'Info',
    props: ['title', 'originalTitle', 'vote', 'overview',],
};
</script>

<template>
    <ul>
        <li v-if="title">Titolo: {{ title }}</li>
        <li v-if="originalTitle && title !== originalTitle">Titolo Originale: {{ originalTitle }}</li>
        <li v-if="vote">Valutazione: {{ vote }}</li>
        <li v-if="overview">Descrizione: {{ overview }}</li>
    </ul>
</template>

<style lang="scss" scoped></style>