<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
  @use '/src/_base.scss' as base;

  button {
    padding: 4px;
    margin: 8px;

    &:hover {
      cursor: pointer;
    }
  }
</style>
