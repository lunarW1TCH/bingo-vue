<template>
  <color-picker
    :disable-alpha="true"
    :disable-history="true"
    picker-type="fk"
    format="hex"
    shape="circle"
  ></color-picker>
</template>

<script setup lang="ts">
  import { ColorPicker } from 'vue3-colorpicker';
  import 'vue3-colorpicker/style.css';
</script>
