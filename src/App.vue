<template>
  <the-navigation></the-navigation>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <the-footer></the-footer>
</template>

<script setup lang="ts">
  import TheNavigation from './components/ui/TheNavigation.vue';
  import TheFooter from './components/ui/TheFooter.vue';
</script>

<style lang="scss">
  @use '/src/_base.scss' as base;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // TODO change font
  html,
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .pageRoot {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 36px;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  @include base.fade;

  .route-enter-active {
    animation: fade 0.2s ease-in-out reverse;
  }

  .route-leave-active {
    animation: fade 0.2s ease-in-out;
  }
</style>
