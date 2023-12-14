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
            axios.get(this.store.apiFilms,
                {
                    params: {
                        query: this.store.searchKey,
                    },
                }
            ).then((response) => {
                this.store.films = response.data.results;
            });
        }
    }
};
</script>

<template>
    <div>
        <input type="text" placeholder="Scrivi il nome di un film" @keyup.enter="searchResults" v-model="store.searchKey">
        <button @click="searchResults">Cerca</button>
    </div>
</template>

<style lang="scss" scoped></style>