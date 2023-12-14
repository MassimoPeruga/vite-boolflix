<script>
import axios from 'axios';
import { store } from '../assets/js/_partials/_store';
export default {
    name: 'InputGroup',
    data() {
        return {
            store,
        };
    },
    methods: {
        searchResults() {
            const filmsRequest = axios.get(this.store.apiFilms, { params: { query: this.store.searchKey } });
            const seriesRequest = axios.get(this.store.apiSeries, { params: { query: this.store.searchKey } });

            Promise.all([filmsRequest, seriesRequest])
                .then(([filmsResponse, seriesResponse]) => {
                    this.store.results = [...filmsResponse.data.results, ...seriesResponse.data.results];
                })
        }
    }

};
</script>

<template>
    <div>
        <input type="text" placeholder="Cerca un film o una serie" @keyup.enter="searchResults" v-model="store.searchKey">
        <button @click="searchResults">Cerca</button>
    </div>
</template>

<style lang="scss" scoped></style>