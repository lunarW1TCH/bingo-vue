<template>
  <div v-if="fetchedBingos">
    <bingo-item
      v-for="bingo in fetchedBingos"
      :bingo="bingo"
      :key="bingo._id"
    ></bingo-item>
  </div>
  <div v-else>No bingos</div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { BingoDB } from '../../interfaces/Bingo';
import BingoItem from '../bingo/BingoItem.vue';

const fetchedBingos = ref<BingoDB[] | null>(null);

const fetchHandler = async () => {
  try {
    const response = await axios.get('http://localhost:8080/all');
    const bingos = response.data.results as BingoDB[];
    console.log(bingos);
    fetchedBingos.value = bingos;
  } catch (err) {
    console.log(err);
  }
};

fetchHandler();
</script>
