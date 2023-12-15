// Importa la funzione reactive da Vue
import { reactive } from 'vue';

// Crea un oggetto reattivo (state managment) contenente lo stato dell'applicazione
export const store = reactive({
    // Elenco dei risultati della ricerca
    results: [],

    // Chiave di ricerca per la barra di ricerca
    searchKey: '',

    // API per ottenere i film
    apiFilms: 'https://api.themoviedb.org/3/search/movie',

    // API per ottenere le serie TV
    apiSeries: 'https://api.themoviedb.org/3/search/tv',
});
