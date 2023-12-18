<script>
// Importo i componenti necessari
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  // Nome del componente
  name: 'Boolflix',

  // Dichiarazione dei componenti utilizzati 
  components: {
    AppHeader,
    AppMain,
  },
};
</script>

  <!-- Struttura principale dell'app -->
<template>
  <!-- Componente per l'intestazione dell'app -->
  <AppHeader />
  <!-- /Componente per l'intestazione dell'app -->

  <!-- Contenuto principale dell'app -->
  <main>
    <AppMain />
  </main>
  <!-- /Contenuto principale dell'app -->
</template>

<style lang="scss">
main {
  margin-top: 100px;
  height: calc(100vh - 100px);
  overflow-y: auto;
}
</style>