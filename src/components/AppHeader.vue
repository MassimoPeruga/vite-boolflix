<script>
// Importo il componente Input
import AppHeaderInput from './AppHeaderInput.vue';

export default {
    // Nome del componente
    name: 'Header',

    // Dichiarazione dei componenti utilizzati 
    components: {
        AppHeaderInput,
    },
};
</script>

<template>
    <header>
        <!-- Titolo principale dell'app -->
        <h1>Boolflix</h1>

        <!-- Componente per l'input nell'intestazione -->
        <AppHeaderInput />
    </header>
</template>

<style lang="scss" scoped></style>