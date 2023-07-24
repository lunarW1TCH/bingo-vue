<template>
  <div v-if="fetchedBingos">
    <h2>Latest Bingos</h2>
    <h3 v-if="error">{{ error }}</h3>
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
  const error = ref('');

  const fetchHandler = async () => {
    try {
      error.value = '';

      const response = await axios.get('http://localhost:8080/all');
      const bingos = response.data.results as BingoDB[];
      console.log(bingos);
      fetchedBingos.value = bingos;
    } catch (_) {
      error.value =
        'Sorry, retrieving latest bingos failed, please try again later.';
    }
  };

  fetchHandler();
</script>
