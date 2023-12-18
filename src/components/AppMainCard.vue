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
    <div class="ms_card shadow ">
        <!-- Immagine del poster se disponibile -->
        <img v-if="poster" :src="`https://image.tmdb.org/t/p/w342/${poster}`" :alt="`Poster di ${title}`" class="img-fluid">
        <!-- Messaggio di avviso il poster non è disponibie -->
        <h4 v-else class="error_message fs-2 p-3 m-0">Immagine non trovata</h4>

        <!-- Passa al componente Info le props con i dati che dovrà visualizzare -->
        <CardInfoComponent :title="title" :originalTitle="originalTitle" :vote="vote" :language="language" />
    </div>
</template>

<style lang="scss" scoped>
.ms_card {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s ease1;

    &:hover {
        transform: scale(1.05);
    }

    h4 {
        background-color: #010101;
        display: flex;
        align-items: center;
        text-align: center;
        height: 513px;
    }

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
        h4 {
            height: 100%;
        }
    }
}
</style>