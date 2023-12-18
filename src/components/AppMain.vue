<script>
// Importo l'unica sorgente di verità
import { store } from '../assets/js/_partials/_store';

// Importo il componente Card
import AppMainCard from './AppMainCard.vue';

export default {
    // Nome del componente
    name: 'Main',

    // Dati locali del componente
    data() {
        return {
            // Inizializzo lo state managment
            store,
        };
    },

    // Componenti utilizzati 
    components: {
        AppMainCard,
    },
};
</script>

<template>
    <section>
        <h2 class="m-0 p-3">Film</h2>
        <ul class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 m-0 p-0">
            <!-- Itera attraverso l'array dei risultati nello state managment -->
            <li v-for="film in store.filmResults" class="col p-3">
                <!-- Passa al componente Card le props con le info richieste nelle Milestone del risultato -->
                <AppMainCard :poster="film.poster_path" :title="film.title" :originalTitle="film.original_title"
                    :vote="film.vote_average" :language="film.original_language" />
            </li>
        </ul>
    </section>

    <section class="mt-5">
        <h2 class="m-0 p-3">Serie Tv</h2>
        <ul class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 m-0 p-0">
            <!-- Itera attraverso l'array dei risultati nello state managment -->
            <li v-for="serie in store.tvResults" class="col p-3">
                <!-- Passa al componente Card le props con le info richieste nelle Milestone del risultato -->
                <AppMainCard :poster="serie.poster_path" :title="serie.name" :originalTitle="serie.original_name"
                    :vote="serie.vote_average" :language="serie.original_language" />
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
section {
    max-width: 1440px;
    margin: auto;
}
</style>