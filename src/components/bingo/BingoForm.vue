<template>
  <div>
    <form>
      <textarea
        v-for="id in BINGO_IDS"
        :key="id"
        :name="id"
        :id="id"
        v-model="formValues[id as keyof BingoValues]"
      ></textarea>
      <div>
        <label>Text</label>
        <color-picker
          :disable-alpha="true"
          :disable-history="true"
          picker-type="fk"
          format="hex"
          shape="circle"
          v-model:pureColor="formColors.text"
        ></color-picker>
        <label>Border</label>
        <color-picker
          :disable-alpha="true"
          :disable-history="true"
          picker-type="fk"
          format="hex"
          shape="circle"
          v-model:pureColor="formColors.border"
        ></color-picker>
        <label>Background</label>
        <color-picker
          :disable-alpha="true"
          :disable-history="true"
          picker-type="fk"
          format="hex"
          shape="circle"
          v-model:pureColor="formColors.background"
        ></color-picker>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { watch, inject } from 'vue';
import { ColorPicker } from 'vue3-colorpicker';
import 'vue3-colorpicker/style.css';

import { BINGO_IDS, BingoValues } from '../../interfaces/Bingo';
import BingoColors from '../../interfaces/BingoColors';

const formValues = inject('formValues') as BingoValues;
const formColors = inject('formColors') as BingoColors;

watch(formColors, val => {
  console.log(val);
});
</script>

<style scoped lang="scss">
@use '/src/_base.scss' as base;

div {
  width: 500px;
  /* background-color: base.$primary-color; */
}

textarea {
  width: 100px;
  height: 100px;
  resize: none;
  text-align: center;
  padding: 8px;
}
</style>
