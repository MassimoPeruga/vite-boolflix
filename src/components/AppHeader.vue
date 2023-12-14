<script>
import AppHeaderInput from './AppHeaderInput.vue';
export default {
    name: 'Header',
    components: {
        AppHeaderInput,
    }
};
</script>

<template>
    <header>
        <h1>Boolflix</h1>
        <AppHeaderInput />
    </header>
</template>

<style lang="scss" scoped></style>