<template>
  <div>
    <h1>Search</h1>
    <search-form></search-form>
    <search-results @set-pages="setPages"></search-results>
    <search-pagination :pages="pages"></search-pagination>
  </div>
</template>

<script setup lang="ts">
  import SearchForm from '../components/search/SearchForm.vue';
  import SearchResults from '../components/search/SearchResults.vue';
  import SearchPagination from '../components/search/SearchPagination.vue';
  import { ref } from 'vue';

  const pages = ref(1);

  const setPages = (payload: number) => {
    pages.value = payload;
  };
</script>
