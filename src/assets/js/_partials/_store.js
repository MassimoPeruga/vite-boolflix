// Importa la funzione reactive da Vue
import { reactive } from 'vue';

// Crea un oggetto reattivo (state managment) contenente lo stato dell'applicazione
export const store = reactive({
    // Elenco dei risultati della ricerca
    results: [],

    // Chiave di ricerca per la barra di ricerca
    searchKey: '',

    // API per ottenere i film
    apiFilms: 'https://api.themoviedb.org/3/search/movie?api_key=0888396f609a05778858c3a90b440d5e&language=it-IT&page=1',

    // API per ottenere le serie TV
    apiSeries: 'https://api.themoviedb.org/3/search/tv?api_key=0888396f609a05778858c3a90b440d5e&language=it-IT&page=1',
});
