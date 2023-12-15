<script>
// Importo la libreria axios per le richieste HTTP
import axios from 'axios';

// Importo l'unica sorgente di verità
import { store } from '../assets/js/_partials/_store';

export default {
    // Nome del componente
    name: 'InputGroup',

    // Dati locali del componente
    data() {
        return {
            // Inizializzo lo state managment
            store,
        };
    },

    // Metodi del componente
    methods: {
        // Metodo per effettuare la ricerca di film e serie
        searchResults() {
            // Parametri di riscerca
            const searchParams = {
                api_key: '0888396f609a05778858c3a90b440d5e',
                language: 'it-IT',
                page: 1,
                query: this.store.searchKey,
            };
            // Effettuo richieste parallele per film e serie
            const filmsRequest = axios.get(this.store.apiFilms, { params: searchParams });
            const seriesRequest = axios.get(this.store.apiSeries, { params: searchParams });

            // Utilizzo Promise.all per gestire entrambe le richieste in modo asincrono
            Promise.all([filmsRequest, seriesRequest])
                .then(([filmsResponse, seriesResponse]) => {
                    // Popolo l'array nello store con l'insieme dei film e delle serie trovati
                    this.store.results = [...filmsResponse.data.results, ...seriesResponse.data.results];
                })
                .catch((error) => {
                    // Nel caso in cui avvenga un errore durante la chiamata API stampo l'errore in console e svuoto l'array dei risultati
                    console.error('Errore nella ricerca:', error);
                    this.store.results = [];
                });
        },
    },
};
</script>

<template>
    <div>
        <!-- Input per inserire il titolo da cercare con v-model alla chiave di ricerca -->
        <input type="text" placeholder="Cerca un film o una serie" @keyup.enter="searchResults" v-model="store.searchKey">

        <!-- Pulsante per avviare la ricerca -->
        <button @click="searchResults">Cerca</button>
    </div>
</template>

<style lang="scss" scoped></style>