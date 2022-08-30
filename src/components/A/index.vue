<template>
  <div>
    异步组件
    <div v-for="item in list">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { axios } from './server';
const list = await axios('../../../public/data.json')
console.log(list);
</script>

<style scoped>
</style>