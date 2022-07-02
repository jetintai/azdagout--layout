<template>
    <form class="simpleForm" @submit.prevent="simpleForm">
        <input type="text" class="simpleInput" v-model="simpleModel"/>
        <button class="simple-btn">Button</button>
    </form>
</template>

<script lang="ts" setup>
import {defineEmits, ref} from 'vue';

const emit = defineEmits<{
    (e: 'add-task', value: string): void;
}>();

const simpleModel = ref<string>('');
</script>

<style lang="scss" scoped>
@import '../assets/scss/main';
.simpleForm {
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: $c-success;
}

.simpleInput {
    padding: 12px 16px;
    border: 1px solid #000;
    font-size: 20px;
}

.simple-btn {
    padding: 12px 24px;
    background-color: #000;
    border: 1px solid #000;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
}

@media screen and (min-width: 525px) {
    .simpleForm {
        flex-direction: row;
    }

    .simpleInput {
        flex-grow: 1;
    }
}
</style>
