<script>
// Importo il componente Info
import CardInfoComponent from './CardInfoComponent.vue';

export default {
    // Nome del componente
    name: 'Card',

    // Props ricevute dal componente Main
    props: ['poster', 'title', 'originalTitle', 'vote', 'language'],

    // Componenti utilizzati
    components: {
        CardInfoComponent,
    },
};
</script>

<template>
    <div>
        <!-- Immagine del poster se disponibile -->
        <img v-if="poster" :src="`https://image.tmdb.org/t/p/w342/${poster}`" :alt="`Poster di ${title}`">

        <!-- Passa al componente Info le props con i dati che dovrà visualizzare -->
        <CardInfoComponent :title="title" :originalTitle="originalTitle" :vote="vote" :language="language" />
    </div>
</template>

<style lang="scss" scoped></style>