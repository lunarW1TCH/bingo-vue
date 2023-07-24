<template>
  <div class="previewContainer">
    <div class="previewField" v-for="(value, key) in formValues" :key="key">
      {{ value }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { inject } from 'vue';
  import { BingoValues } from '../../interfaces/Bingo';
  import BingoColors from '../../interfaces/BingoColors';

  const formValues = inject('formValues') as BingoValues;
  const formColors = inject('formColors') as BingoColors;
</script>

<style scoped lang="scss">
  @use '/src/_base.scss' as base;

  .previewContainer {
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .previewField {
    width: 100px;
    height: 100px;
    padding: 4px;
    border: 1px solid;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-word;
    border-color: v-bind('formColors.border');
    background-color: v-bind('formColors.background');
    color: v-bind('formColors.text');
    @include base.box-shadow-sharp;
    @include base.hover-bingo;
  }
</style>
