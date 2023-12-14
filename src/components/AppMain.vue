<script>
import { store } from '../assets/js/_partials/_store'
import AppMainCard from './AppMainCard.vue';
export default {
    name: 'Main',
    data() {
        return {
            store,
        };
    },
    components: {
        AppMainCard,
    },
};
</script>

<template>
    <main>
        <AppMainCard v-for="film in store.films" :poster="film.poster_path" :title="film.title"
            :originalTitle="film.original_title" :vote="film.vote_average" :overview="film.overview" />
    </main>
</template>

<style lang="scss" scoped></style>