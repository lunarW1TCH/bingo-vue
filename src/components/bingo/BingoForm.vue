<template>
  <div>
    <form>
      <textarea
        v-for="id in BINGO_IDS"
        :key="id"
        :name="id"
        :id="id"
        :value="formValues[id as keyof BingoValues]"
        maxlength="40"
        @input="setValue($event)"
      ></textarea>
      <div class="colorsContainer">
        <div>
          <label>Text</label>
          <color-picker v-model:pureColor="formColors.text"></color-picker>
        </div>
        <div>
          <label>Border</label>
          <color-picker v-model:pureColor="formColors.border"></color-picker>
        </div>
        <div>
          <label>Background</label>
          <color-picker
            v-model:pureColor="formColors.background"
          ></color-picker>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

import ColorPicker from '../ui/ColorPicker.vue';
import { BINGO_IDS, BingoValues } from '../../interfaces/Bingo';
import BingoColors from '../../interfaces/BingoColors';
import InputEvent from '@/interfaces/InputEvent';

const formValues = inject('formValues') as BingoValues;
const formColors = inject('formColors') as BingoColors;

const setValue = (e: Event) => {
  const event = e as InputEvent;
  const { id, value } = event.target;
  const savedValue = value.replace(/\n/g, '').substring(0, 40);

  formValues[id as keyof BingoValues] = savedValue;
};
</script>

<style scoped lang="scss">
@use '/src/_base.scss' as base;

form {
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

.colorsContainer {
  width: 500px;
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
  margin-bottom: 16px;
}

label {
  margin-right: 8px;
}
</style>
