<template>
  <the-navigation></the-navigation>
  <transition>
    <router-view />
  </transition>
</template>

<script setup lang="ts">
// TODO: add animation for route change

// TODO: put bingovalues into Values field

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

@keyframes fade {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}

@keyframes slide {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(1500px);
  }
}

.v-enter-active {
  animation: slide 0.3s ease-in-out reverse;
}

.v-leave-active {
  animation: slide 0.3s ease-in-out reverse;
}
</style>
