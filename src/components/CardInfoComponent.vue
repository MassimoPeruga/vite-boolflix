<script>
export default {
    // Nome del componente
    name: 'Info',

    // Props ricevute dal componente Card
    props: ['title', 'originalTitle', 'vote', 'language'],

    // Dati locali del componente
    data() {
        return {
            // Lista di emoji per l'easter egg
            emojis: ['💩', '🥴', '😕', '👍', '🤩', '🤯'],
        };
    },
};
</script>

<template>
    <ul>
        <!-- Mostra il titolo se disponibile -->
        <li v-if="title">Titolo: {{ title }}</li>

        <!-- Mostra il titolo originale solo se disponibie e se diverso dal titolo tradotto -->
        <li v-if="originalTitle && title !== originalTitle">Titolo Originale: {{ originalTitle }}</li>

        <!-- Lingua originale -->
        <li v-if="language">Lingua originale:
            <!-- SE la lingua originale è IT allora mostra la bandiera italiana -->
            <img v-if="language === 'it'" src="../assets/img/Flag_of_Italy.svg" alt="Bandiera Italiana">
            <!-- ALTRIMENTI SE la lingua originale è EN mostra la bandiera della Gran Bretagna -->
            <img v-else-if="language === 'en'" src="../assets/img/Flag_of_the_United_Kingdom.svg" alt="Bandiera UK">
            <!-- Altrimenti, mostra solo il codice linguistico -->
            <span v-else>{{ language }}</span>
        </li>

        <!-- Se disponibile la valutazione è disponibile mostra un totale di 5 stelle -->
        <li v-if="vote !== undefined">Valutazione:
            <!-- Stelle piene in base al voto ottenuto dai dati ricevuti -->
            <span v-for="n in vote"><font-awesome-icon icon="fa-solid fa-star" /></span>
            <!-- Stelle vuote per la parte restante -->
            <span v-for="n in 5 - vote"><font-awesome-icon icon="fa-regular fa-star" /></span>
            <!-- Easter egg natalizio (commentato per disabilitarlo) -->
            <!-- <span> = {{ this.emojis[vote] }}</span> -->
        </li>
    </ul>
</template>

<!-- Stili specifici per questo componente -->
<style lang="scss" scoped>
img {
    width: 1rem;
}
</style>