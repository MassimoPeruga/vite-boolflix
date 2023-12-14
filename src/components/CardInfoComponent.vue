<script>
export default {
    name: 'Info',
    props: ['title', 'originalTitle', 'vote', 'language',],
};
</script>

<template>
    <ul>
        <li v-if="title">Titolo: {{ title }}</li>
        <li v-if="originalTitle && title !== originalTitle">Titolo Originale: {{ originalTitle }}</li>
        <li v-if="language">Lingua originale:
            <img v-if="language === 'it'" src="../assets/img/Flag_of_Italy.svg" alt="Bandiera Italiana">
            <img v-else-if="language === 'en'" src="../assets/img/Flag_of_the_United_Kingdom.svg" alt="Bandiera UK">
            <span v-else>{{ language }}</span>
        </li>
        <li v-if="vote">Valutazione: {{ vote }}</li>
    </ul>
</template>

<style lang="scss" scoped>
img {
    width: 1rem;
}
</style>