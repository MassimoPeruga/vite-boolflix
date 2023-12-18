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
        <div class=" flex-column flex-lg-row d-flex align-items-center justify-content-between px-3 shadow mx-auto">
            <!-- Titolo principale dell'app -->
            <h1 class="m-0">Boolflix</h1>

            <!-- Componente per l'input nell'intestazione -->
            <AppHeaderInput />
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

header {
    background-color: $black-color;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;

    div {
        height: 100px;
        max-width: 1440px;
    }
}
</style>