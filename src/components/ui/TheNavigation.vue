<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/search">Search</router-link>
    <router-link to="/create">Create</router-link>
  </nav>
</template>

<style scoped lang="scss">
@use '/src/_base.scss' as base;

nav {
  display: flex;
  width: 100%;
  padding-top: 30px;

  a {
    flex-grow: 1;
    font-weight: bold;
    text-align: center;
    color: base.$gray700;
    text-decoration: none;

    &.router-link-exact-active {
      color: base.$gray500;
    }

    &:hover {
      color: base.$gray600;
    }
  }
}
</style>
