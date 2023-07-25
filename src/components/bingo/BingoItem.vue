<template>
  <div @click="onClickHandler" class="container">
    <span class="title">{{ props.bingo.name }}</span>
    <p class="description">{{ props.bingo.description }}</p>
    <span class="date">{{ date }}</span>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { BingoDB } from '../../interfaces/Bingo';

  const props = defineProps<{
    bingo: BingoDB;
  }>();

  const router = useRouter();

  const date = props.bingo.createdAt
    ? new Date(props.bingo.createdAt).toLocaleString()
    : null;

  const onClickHandler = () => {
    router.push({
      name: 'details',
      params: {
        bingoId: props.bingo._id,
      },
    });
  };
</script>

<style scoped lang="scss">
  @use '/src/_base.scss' as base;
  .container {
    width: 250px;
    height: 300px;
    margin: 8px;
    display: flex;
    position: relative;
    flex-direction: column;
    border: 2px solid;
    justify-content: space-around;
    border-color: v-bind('props.bingo.colors.border');
    /* background-color: v-bind('props.bingo.colors.background'); */
    word-break: break-all;
    position: relative;

    &:hover {
      cursor: pointer;
    }

    @include base.box-shadow-sharp;
  }

  .title {
    width: 100%;
    text-align: center;
    padding: 8px;
    background-color: white;
    position: absolute;
    top: 0;
  }

  .description {
    margin: 8px;
    text-align: center;
  }

  .date {
    position: absolute;
    bottom: 0;
    right: 0;
    font-style: italic;
    color: base.$gray700;
  }
</style>
