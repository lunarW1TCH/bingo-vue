<template>
  <footer>
    Copyright &copy; 2023
    <a href="https://www.linkedin.com/in/adrian-zegnalek/">Adrian Żegnałek </a>
    and <a href="https://www.linkedin.com/in/oanh-nguyen-1021/">Oanh Nguyen</a>
  </footer>
</template>

<style scoped lang="scss">
  @use '/src/_base.scss' as base;

  footer {
    width: 100%;
    text-align: center;

    a {
      font-style: italic;
      color: base.$gray700;
    }
  }
</style>
