<template>
  <div>
    <div v-if="bingoValues && bingoColors">
      <bingo-preview></bingo-preview>
    </div>
    <router-link to="/">Play</router-link>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import BingoPreview from '@/components/bingo/BingoPreview.vue';
import { BingoDB, BingoValues } from '@/interfaces/Bingo';
import BingoColors from '@/interfaces/BingoColors';

const route = useRoute();
const bingoId = route.params.bingoId;

const fetchedBingo = ref<BingoDB | null>(null);
const bingoValues = ref<BingoValues | null>(null);
const bingoColors = ref<BingoColors | null>(null);
const error = ref('');

provide('formValues', bingoValues);
provide('formColors', bingoColors);

const fetchHandler = async () => {
  try {
    const result = await axios.get(`http://localhost:8080/id?id=${bingoId}`);

    const bingo = result.data.result;
    fetchedBingo.value = bingo;

    const {
      name,
      description,
      colors,
      _id,
      createdAt,
      updatedAt,
      __v,
      ...values
    } = bingo;

    bingoValues.value = values;
    bingoColors.value = colors;
  } catch (err) {
    error.value = 'No bingo with that ID';
  }
};

fetchHandler();
</script>
