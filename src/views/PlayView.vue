<template>
  <div v-if="!bingoValues || !bingoColors">Loading...</div>
  <div v-else>
    <bingo-play :colors="bingoColors" :values="bingoValues"></bingo-play>
    <base-dialog @close="cancelLeave" :open="dialogIsOpen">
      <p>If you leave your changes will be lost!</p>
      <button @click="cancelLeave">Cancel</button>
      <button @click="confirmLeave">Leave</button>
    </base-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import {
  RouteLocationRaw,
  onBeforeRouteLeave,
  useRoute,
  useRouter,
} from 'vue-router';
import axios from 'axios';
import { BingoDB, BingoValues } from '@/interfaces/Bingo';
import BingoColors from '@/interfaces/BingoColors';
import BingoPlay from '@/components/bingo/BingoPlay.vue';
import BaseDialog from '@/components/ui/BaseDialog.vue';

const route = useRoute();
const router = useRouter();
const bingoId = route.params.bingoId;

const fetchedBingo = ref<BingoDB | null>(null);
const bingoValues = ref<BingoValues | null>(null);
const bingoColors = ref<BingoColors | null>(null);
const dialogIsOpen = ref(false);
const userWantsToLeave = ref(false);
const leaveTo = ref<RouteLocationRaw | null>(null);

const fetchHandler = async () => {
  const result = await axios.get(`http://localhost:8080/id?id=${bingoId}`);

  const bingo = result.data.result as BingoDB;
  const { colors, values } = bingo;
  const { _id, ...filteredValues } = values;

  fetchedBingo.value = bingo;
  bingoValues.value = filteredValues;
  bingoColors.value = colors;
};

if (!fetchedBingo.value) {
  fetchHandler();
}

const cancelLeave = () => {
  dialogIsOpen.value = false;
};

const confirmLeave = () => {
  dialogIsOpen.value = false;
  userWantsToLeave.value = true;
};

onBeforeRouteLeave((to, from, next) => {
  dialogIsOpen.value = true;
  leaveTo.value = to;
  if (userWantsToLeave.value) {
    next(true);
  }
});

watch(userWantsToLeave, () => {
  if (userWantsToLeave.value) {
    if (leaveTo.value) {
      router.push(leaveTo.value);
    } else {
      router.push({ name: 'home' });
    }
  }
});
</script>
