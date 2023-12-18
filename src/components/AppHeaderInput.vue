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
            // Effettuo richieste parallele per film e serie
            const filmsRequest = axios.get(this.store.apiUrls.apiFilms, { params: store.searchParams });
            const seriesRequest = axios.get(this.store.apiUrls.apiSeries, { params: store.searchParams });

            // Utilizzo Promise.all per gestire entrambe le richieste in modo asincrono
            Promise.all([filmsRequest, seriesRequest])
                .then(([filmsResponse, seriesResponse]) => {
                    // Popolo gli array nello store con i film e le serie trovati
                    this.store.filmResults = filmsResponse.data.results;
                    this.store.tvResults = seriesResponse.data.results;

                })
                .catch((error) => {
                    // Nel caso in cui avvenga un errore durante la chiamata API stampo l'errore in console e svuoto l'array dei risultati
                    console.error('Errore nella ricerca:', error);
                    this.store.filmResults = [];
                    this.store.tvResults = [];
                });
        },
    },
};
</script>

<template>
    <form @submit.prevent="searchResults" class="custom_input w-75 w-md-50 justify-content-center justify-content-lg-end">
        <!-- Input per inserire il titolo da cercare con v-model alla chiave di ricerca -->
        <input type="text" placeholder="Cerca un film o una serie TV" v-model="store.searchParams.query"
            id="search_key_input" class="w-75">
        <label for="search_key_input" hidden>Cerca un film o una serie TV</label>

        <!-- Pulsante per avviare la ricerca -->
        <button type="submit">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
    </form>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

form {
    font-family: 'Audiowide', sans-serif;
    display: flex;
    align-items: center;

    #search_key_input {
        max-width: 350px;
        font-size: 1rem;
        padding: 6px;
        outline: none;
        background: #FFFFFF;
        color: $blue-color;
        border: 4px double $black-color;
        border-radius: 6px;

        &:focus {
            background: #F2F2F2;
            border: 4px double $black-color;
            border-radius: 6px;
        }

        &::placeholder {
            color: $blue-color;
            font-size: .75rem;
        }
    }

    button {
        color: $blue-color !important;
        padding: 6px 12px;
        border-radius: 6px;
        border: 4px double $black-color;
        background: $green-color;

        &:hover {
            color: $blue-color !important;
            background: $green-color;
        }
    }

}
</style>