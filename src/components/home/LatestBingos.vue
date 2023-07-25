<template>
  <div class="container" v-if="fetchedBingos">
    <h2>Latest Bingos</h2>
    <h3 v-if="error">{{ error }}</h3>
    <bingo-item
      v-for="bingo in fetchedBingos"
      :bingo="bingo"
      :key="bingo._id"
    ></bingo-item>
  </div>
  <base-spinner v-else-if="!fetchedBingos && isLoading"></base-spinner>
  <div v-else>No bingos</div>
</template>

<script setup lang="ts">
  import axios from 'axios';
  import { ref } from 'vue';
  import { BingoDB } from '../../interfaces/Bingo';
  import BingoItem from '../bingo/BingoItem.vue';
  import BaseSpinner from '../ui/BaseSpinner.vue';

  const fetchedBingos = ref<BingoDB[] | null>(null);
  const error = ref('');
  const isLoading = ref(false);

  const fetchHandler = async () => {
    try {
      error.value = '';
      isLoading.value = true;

      const response = await axios.get('http://localhost:8080/all');
      const bingos = response.data.results as BingoDB[];

      fetchedBingos.value = bingos;
      isLoading.value = false;
    } catch (_) {
      error.value =
        'Sorry, retrieving latest bingos failed, please try again later.';
      isLoading.value = false;
    }
  };

  fetchHandler();
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    h2 {
      width: 100%;
      text-align: center;
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
</style>
