// Importa la funzione reactive da Vue
import { reactive } from 'vue';
// Configurazione chiamata API
import { apiUrls, searchParams } from './_apiConfig';

// Creo un oggetto reattivo (state managment)
export const store = reactive({
    // Indirizzi chiamata API
    apiUrls,

    // Parametri di ricerca
    searchParams,

    // Elenco dei risultati della ricerca per i Film
    filmResults: [],
    // Elenco dei risultati della ricerca per le Srerie TV
    tvResults: [],
});
