<template>
  <div>
    <h1>Create</h1>
    <bingo-form></bingo-form>
    <bingo-preview></bingo-preview>
  </div>
</template>

<script setup lang="ts">
import { reactive, provide } from 'vue';
import { STARTING_STATE } from '../interfaces/Bingo';
import BingoColors from '../interfaces/BingoColors';
import BingoForm from '../components/bingo/BingoForm.vue';
import BingoPreview from '../components/bingo/BingoPreview.vue';

const formValues = reactive(STARTING_STATE);
const formColors: BingoColors = reactive({
  text: '#000000',
  border: '#000000',
  background: '#ffffff',
});

provide('formValues', formValues);
provide('formColors', formColors);
</script>
