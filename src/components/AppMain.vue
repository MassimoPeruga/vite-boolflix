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

    // Metodi del componente
    methods: {
        // Metodo che restituisce il titolo di un film, il nome di una serie o undefined quando nessuno dei due attributi è presente nell'oggetto
        title(result) {
            return result.title || result.name || undefined;
        },
        // Metodo che restituisce il titolo originale di un film, il nome di una serie o undefined quando nessuno dei due attributi è presente nell'oggetto
        originalTitle(result) {
            return result.original_title || result.original_name || undefined;
        }
    },
};
</script>

<template>
    <ul>
        <!-- Itera attraverso l'array dei risultati nello state managment -->
        <li v-for="result in store.results">
            <!-- Passa al componente Card le props con le info richieste nelle Milestone del risultato -->
            <AppMainCard :poster="result.poster_path" :title="this.title(result)"
                :originalTitle="this.originalTitle(result)" :vote="Math.ceil(result.vote_average / 2)"
                :language="result.original_language" />
            <hr>
        </li>
    </ul>
</template>

<style lang="scss" scoped></style>