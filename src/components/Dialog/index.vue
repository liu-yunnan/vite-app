<template>
  <div class="header">
    <slot name="header"></slot>
  </div>
  <div class="main">
    <div v-for="item in obj">
      <slot :data="item"></slot>
    </div>

  </div>
  <div class="footer">
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

type names = {
  name: string
  age: number
}
let obj = reactive<names[]>([
  {
    name: 'header',
    age: 23
  },
  {
    name: 'header4e23',
    age: 232
  },
  {
    name: 'header23',
    age: 233
  },
])
</script>

<style scoped>
.header {
  background: red;
  width: 100%;
  margin: 20px;
  height: 100px;
  box-sizing: border-box;
}

.main {
  background: green;
  width: 100%;
  margin: 20px;
  height: 100px;
  box-sizing: border-box;
}

.footer {
  background: blue;
  width: 100%;
  margin: 20px;
  height: 100px;
  box-sizing: border-box;
}
</style>