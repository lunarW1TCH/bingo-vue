<template>
  <div>
    <form>
      <div class="containerName">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          @input="setName"
          :value="formName"
          maxlength="40"
        />
      </div>
      <div class="containerDescription">
        <label for="description">Description</label>
        <textarea
          :value="formDescription"
          @input="setDescription"
          id="description"
          name="description"
          maxlength="255"
        />
      </div>
      <textarea
        class="field"
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
  import { Ref, inject } from 'vue';

  import ColorPicker from '../ui/ColorPicker.vue';
  import { BINGO_IDS, BingoValues } from '../../interfaces/Bingo';
  import BingoColors from '../../interfaces/BingoColors';
  import InputEvent from '@/interfaces/InputEvent';

  const formValues = inject('formValues') as BingoValues;
  const formColors = inject('formColors') as BingoColors;
  const formName = inject('formName') as Ref<string>;
  const formDescription = inject('formDescription') as Ref<string>;

  const setValue = (e: Event) => {
    const event = e as InputEvent;
    const { id, value } = event.target;
    const savedValue = value.replace(/\n/g, '').substring(0, 40);

    formValues[id as keyof BingoValues] = savedValue;
  };

  const setName = (e: Event) => {
    const event = e as InputEvent;
    const { value } = event.target;
    const savedValue = value.replace(/\n/g, '').substring(0, 40);
    formName.value = savedValue;
  };

  const setDescription = (e: Event) => {
    const event = e as InputEvent;
    const { value } = event.target;
    const savedValue = value.replace(/\n/g, '').substring(0, 255);
    formDescription.value = savedValue;
  };
</script>

<style scoped lang="scss">
  @use '/src/_base.scss' as base;

  form {
    width: 500px;
    /* background-color: base.$primary-color; */
  }

  .field {
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

    label {
      margin-right: 8px;
    }
  }
  .containerName,
  .containerDescription {
    width: 500px;
    display: flex;

    label,
    input,
    textarea {
      width: 250px;
      padding: 4px;
      margin-top: 4px;
      margin-bottom: 4px;
    }

    textarea {
      height: 150px;
    }
  }
</style>
