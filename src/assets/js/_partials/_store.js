import { reactive } from 'vue';

export const store = reactive({
    results: [],
    searchKey: '',
    apiFilms: 'https://api.themoviedb.org/3/search/movie?api_key=0888396f609a05778858c3a90b440d5e&language=it-IT&page=1',
    apiSeries: 'https://api.themoviedb.org/3/search/tv?api_key=0888396f609a05778858c3a90b440d5e&language=it-IT&page=1',
});