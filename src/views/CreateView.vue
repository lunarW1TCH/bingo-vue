<template>
  <div class="pageRoot">
    <h1>Create</h1>
    <div id="bingoContainers">
      <bingo-form class="bingoContainer"></bingo-form>
      <bingo-preview class="bingoContainer"></bingo-preview>
    </div>
    <base-button id="createBtn" @click="createBingoHandler">Create</base-button>
    <span v-if="isLoading">TODO SPINNER</span>
    <span v-if="error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
  import { reactive, provide, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';

  import { BingoDB, STARTING_STATE } from '../interfaces/Bingo';
  import BingoColors, { DEFAULT_COLORS } from '../interfaces/BingoColors';
  import BingoForm from '../components/bingo/BingoForm.vue';
  import BingoPreview from '../components/bingo/BingoPreview.vue';
  import BaseButton from '@/components/ui/BaseButton.vue';

  const router = useRouter();

  const bingoName = ref('');
  const bingoDescription = ref('');
  const error = ref('');
  const isLoading = ref(false);

  const formValues = reactive(STARTING_STATE);
  const formColors: BingoColors = reactive(DEFAULT_COLORS);

  provide('formValues', formValues);
  provide('formColors', formColors);
  provide('formName', bingoName);
  provide('formDescription', bingoDescription);

  // TODO: add loading indicator

  const validate = (bingo: BingoDB) => {
    const valuesToValidate = [
      bingo.name,
      bingo.description,
      ...Object.values(bingo),
    ];

    valuesToValidate.forEach(value => {
      if (value === '') {
        error.value = 'Please set all of the fields correctly.';
      }
    });
  };

  const createBingoHandler = async () => {
    isLoading.value = true;
    error.value = '';

    const newBingo: BingoDB = {
      values: formValues,
      colors: formColors,
      name: bingoName.value,
      description: bingoDescription.value,
    };

    validate(newBingo);
    if (error.value) {
      isLoading.value = false;
      return;
    }

    try {
      const result = await axios.post('http://localhost:8080/create', newBingo);
      isLoading.value = false;
      console.log(result);
      router.push({
        name: 'details',
        params: {
          bingoId: result.data._id,
        },
      });
    } catch (_) {
      isLoading.value = false;
      error.value =
        'Sorry, something went wrong with saving your Bingo. Please try again later.';
    }
  };
</script>

<style scoped lang="scss">
  #bingoContainers {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .bingoContainer {
    margin: 24px;
  }
</style>
