<template>
  <div class="layout">
    <!-- ref :从父组件获取子组件实例 -->
    <Menu ref="menus" :data="data" title="this's title" @on-click ="getList"></Menu>
    <div class="layout-right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<script setup lang="ts">
// 局部组件
import Content from './Content/index.vue';
import Menu from './Menu/index.vue';
import Header from './Header/index.vue';
import { reactive,ref } from 'vue';
let menus = ref(null)
let data = reactive<number[]>([1,2,3])
const getList = (list : number[])=>{
console.log(list,'子向父传参');
console.log(menus.value);
}

</script>

<style scoped lang="less">
.layout{
  display: flex;
  height:100% ;
  overflow: hidden;
  .layout-right{
    flex:1;
    display: flex;
    flex-direction: column;
  }
}
</style>