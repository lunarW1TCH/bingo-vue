<template>
  <the-navigation></the-navigation>
  <router-view v-slot="{ Component }">
    <transition mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
  import TheNavigation from './components/ui/TheNavigation.vue';
</script>

<style lang="scss">
  @use '/src/_base.scss' as base;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @include base.fade;

  .v-enter-active {
    animation: fade 0.2s ease-in-out reverse;
  }

  .v-leave-active {
    animation: fade 0.2s ease-in-out;
  }
</style>
