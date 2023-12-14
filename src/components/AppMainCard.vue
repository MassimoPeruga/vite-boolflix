<script>
import CardInfoComponent from './CardInfoComponent.vue';
export default {
    name: 'Card',
    props: ['poster', 'title', 'originalTitle', 'vote', 'language',],
    components: {
        CardInfoComponent,
    }
};
</script>

<template>
    <div v-if="poster">{{ poster }}</div>
    <CardInfoComponent :title="title" :originalTitle="originalTitle" :vote="vote" :language="language" />
    <hr>
</template>

<style lang="scss" scoped></style>