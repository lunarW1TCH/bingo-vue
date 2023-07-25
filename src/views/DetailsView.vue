<template>
  <div class="pageRoot">
    <div v-if="bingoValues && bingoColors">
      <bingo-preview></bingo-preview>
    </div>
    <p v-if="error">{{ error }}</p>
    <div v-else>
      <base-button @click="playHandler">Play</base-button>
      <label for="defaultColors">Override with default colors?</label>
      <input
        type="checkbox"
        id="defaultColors"
        name="defaultColors"
        v-model="overrideWithDefaults"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, provide, computed } from 'vue';
  import axios from 'axios';
  import { useRoute, useRouter } from 'vue-router';
  import BingoPreview from '@/components/bingo/BingoPreview.vue';
  import { BingoDB, BingoValues } from '@/interfaces/Bingo';
  import BingoColors, { DEFAULT_COLORS } from '@/interfaces/BingoColors';
  import BaseButton from '@/components/ui/BaseButton.vue';

  const route = useRoute();
  const router = useRouter();
  const bingoId = route.params.bingoId;

  const fetchedBingo = ref<BingoDB | null>(null);
  const bingoValues = ref<BingoValues | null>(null);
  const bingoColors = ref<BingoColors | null>(null);

  const overrideWithDefaults = ref(false);
  const displayedColors = computed(() =>
    overrideWithDefaults.value ? DEFAULT_COLORS : bingoColors.value
  );

  const error = ref('');

  provide('formValues', bingoValues);
  provide('formColors', displayedColors);

  const playHandler = () => {
    router.push({
      name: 'play',
      params: {
        bingoId: bingoId,
      },
      query: {
        defaultColors: overrideWithDefaults.value.toString(),
      },
    });
  };

  const fetchHandler = async () => {
    try {
      error.value = '';

      const result = await axios.get(`http://localhost:8080/id?id=${bingoId}`);

      const bingo = result.data.result;
      fetchedBingo.value = bingo;

      const { colors, values } = bingo;
      // eslint-disable-next-line
      const { _id, ...filteredValues } = values;

      bingoValues.value = filteredValues;
      bingoColors.value = colors;
    } catch (_) {
      error.value = 'No bingo with that ID';
    }
  };

  fetchHandler();
</script>
