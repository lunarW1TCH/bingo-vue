<template>
  <div>
    <bingo-item
      v-for="bingo in bingos"
      :key="bingo._id"
      :bingo="bingo"
    ></bingo-item>
    <span v-if="error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
  import axios from 'axios';
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { BingoDB } from '../../interfaces/Bingo';
  import BingoItem from '../bingo/BingoItem.vue';

  const emit = defineEmits(['setPages']);

  const route = useRoute();
  const name = route.query.name;
  const page = route.query.page || 1;

  const bingos = ref<BingoDB[] | null>(null);
  const error = ref('');

  const fetchHandler = async () => {
    try {
      error.value = '';

      const response = await axios.get(
        `http://localhost:8080/search?name=${name ? name : ''}&page=${
          page ? page : 1
        }`
      );
      const data = response.data.results as BingoDB[];
      const numPages = response.data.pages as number;

      bingos.value = data;
      emit('setPages', numPages);
    } catch (_) {
      error.value =
        'Sorry, something went wrong, try refreshing to see if error disappears.';
    }
  };

  fetchHandler();
</script>
