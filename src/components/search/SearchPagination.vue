<template>
  <div>
    <button v-if="page !== 1" id="firstPage" @click="clickHandler(1)">1</button>
    <span v-else>1</span>
    <button
      id="previousPage"
      @click="clickHandler(page - 1)"
      v-if="hasPreviousPage"
    >
      {{ page - 1 }}
    </button>
    <span v-if="page !== 1 && page !== props.pages">{{ page }}</span>
    <button id="nextPage" @click="clickHandler(page + 1)" v-if="hasNextPage">
      {{ page + 1 }}
    </button>
    <button
      id="lastPage"
      v-if="props.pages > 1 && props.pages !== page"
      @click="clickHandler(pages)"
    >
      {{ props.pages }}
    </button>
    <span v-if="props.pages === page && page !== 1">{{ props.pages }}</span>
  </div>
</template>

<script setup lang="ts">
  import { watch, computed } from 'vue';
  import { useRouter, useRoute } from 'vue-router';

  const props = defineProps<{
    pages: number;
  }>();

  const route = useRoute();
  const router = useRouter();

  const page = route.query.page ? parseInt(route.query.page.toString()) : 1;

  const hasPreviousPage = computed(() => {
    if (page === 1 || (page === 2 && props.pages >= page)) {
      return false;
    } else {
      return true;
    }
  });

  const hasNextPage = computed(() => {
    if (props.pages - page > 1) {
      return true;
    } else {
      return false;
    }
  });

  const currentRoute = computed(() => router.currentRoute.value);

  const clickHandler = (page: number) => {
    router.push({
      path: currentRoute.value.path,
      query: { page: page, name: currentRoute.value.query.name || '' },
    });
  };

  watch(currentRoute, () => {
    location.reload();
  });
</script>

<style scoped lang="scss">
  div {
    width: 300px;
    display: flex;
    justify-content: space-evenly;
  }

  span {
    font-size: 20px;
  }

  button {
    width: 24px;
    height: 24px;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }
  }
</style>
