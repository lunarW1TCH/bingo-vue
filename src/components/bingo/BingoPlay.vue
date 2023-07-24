<template>
  <div v-if="transformedValues" class="container">
    <div
      class="field"
      :class="checkedFields[keys[index] as keyof Omit_id] ? 'checked' : null"
      v-for="(value, index) in transformedValues"
      :key="keys[index]"
      @click="checkHandler(keys[index])"
    >
      {{ value }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { BingoValues, BINGO_CHECKED_FIELDS } from '@/interfaces/Bingo';
  import { arrayMoveEl, shuffleArray } from '@/helpers/helpers';
  import { DEFAULT_COLORS } from '@/interfaces/BingoColors';

  type Omit_id = Omit<BingoValues, '_id'>;

  const props = defineProps<{
    values: BingoValues;
    colors: {
      text: string;
      background: string;
      border: string;
      _id?: string;
    };
  }>();

  const route = useRoute();

  const colors = computed(() =>
    route.query.defaultColors === 'true' ? DEFAULT_COLORS : props.colors
  );

  const checkedFields = ref(BINGO_CHECKED_FIELDS);

  const checkHandler = (fieldId: string) => {
    console.log(fieldId);
    checkedFields.value[fieldId as keyof Omit_id] =
      !checkedFields.value[fieldId as keyof Omit_id];
  };

  // transforming values

  const freeTargetIndex = 12;
  const keys = Object.keys(props.values);
  const transformedValues = ref<string[] | null>(null);

  const transformValues = () => {
    if (transformedValues.value) return;

    const shuffled = shuffleArray(Object.values(props.values)) as string[];
    const freeIndex = shuffled.findIndex(value => value === props.values.c3);
    const moved = arrayMoveEl(shuffled, freeIndex, freeTargetIndex);

    transformedValues.value = moved;

    // reset checked fields
    checkedFields.value = BINGO_CHECKED_FIELDS;
  };

  transformValues();
</script>

<style scoped lang="scss">
  @use '/src/_base.scss' as base;
  .container {
    display: flex;
    width: 500px;
    flex-wrap: wrap;
  }

  .field {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    word-break: break-word;
    height: 100px;
    width: 100px;
    padding: 4px;
    border: 1px solid;
    border-color: v-bind('colors.border');
    background-color: v-bind('colors.background');
    color: v-bind('colors.text');
    @include base.box-shadow-sharp;

    &:hover {
      scale: 110%;
      cursor: pointer;
    }
  }

  .checked {
    color: red;
  }
</style>
