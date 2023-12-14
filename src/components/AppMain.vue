<script>
import { store } from '../assets/js/_partials/_store'
import AppMainCard from './AppMainCard.vue';
export default {
    name: 'Main',
    data() {
        return {
            store,
        };
    },
    components: {
        AppMainCard,
    },
    methods: {
        title(result) {
            return result.title || result.name || undefined;
        }
    }
};
</script>

<template>
    <main>
        <AppMainCard v-for="result in store.results" :poster="result.poster_path" :title="this.title(result)"
            :originalTitle="result.original_title" :vote="result.vote_average" :language="result.original_language" />
    </main>
</template>

<style lang="scss" scoped></style>