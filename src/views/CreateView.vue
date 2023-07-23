<template>
  <div>
    <h1>Create</h1>
    <bingo-form></bingo-form>
    <bingo-preview></bingo-preview>
    <button @click="createBingoHandler">Create</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, provide, ref } from 'vue';
import { STARTING_STATE } from '../interfaces/Bingo';

import { BingoDB } from '../interfaces/Bingo';
import BingoColors from '../interfaces/BingoColors';
import BingoForm from '../components/bingo/BingoForm.vue';
import BingoPreview from '../components/bingo/BingoPreview.vue';
import axios from 'axios';

const bingoName = ref('');
const bingoDescription = ref('');

const formValues = reactive(STARTING_STATE);
const formColors: BingoColors = reactive({
  text: '#000000',
  border: '#000000',
  background: '#ffffff',
});

provide('formValues', formValues);
provide('formColors', formColors);
provide('formName', bingoName);
provide('formDescription', bingoDescription);

const createBingoHandler = async () => {
  const newBingo: BingoDB = {
    values: formValues,
    colors: formColors,
    name: bingoName.value,
    description: bingoDescription.value,
  };

  try {
    const result = await axios.post('http://localhost:8080/create', newBingo);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
</script>
