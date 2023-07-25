<template>
  <form>
    <label for="name">Search by name</label>
    <input type="text" name="name" id="name" />
    <base-button type="submit">Search</base-button>
  </form>
</template>

<script setup lang="ts">
  import BaseButton from '../ui/BaseButton.vue';
</script>
