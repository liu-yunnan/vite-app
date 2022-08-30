    
<script setup lang="ts">
// import Ref_Vue from './components/02_Ref.vue';
// import Reactive_Vue from './components/03_Reactive.vue'
// import To_Vue from './components/04_to.vue'
// import Computed_Vue from './components/05_computed.vue';
// import Watch_Vue from './components/06_watch.vue';
// import Live_Vue from './components/07_live.vue'
// import Layout from "./layout/index.vue";
// import A from './components/A.vue'
import B from './components/B.vue'
import C from './components/C.vue'
import { ref } from "vue";
import Layout from './layout/index.vue';

let flag = ref<boolean>(true)
</script>
<template>
  <el-button type="primary" @click="flag = !flag">切换组件</el-button>
  <!-- <keep-alive :include="['B', 'C' ]" :exclude="" :max=""></keep-alive> -->
  <!-- zi -->
  <keep-alive>
    <B v-if="flag"></B>
    <C v-else></C>
  </keep-alive>
  <!-- <div class="parent">
    <h1>我是父级</h1>
    <Teleport :disabled="false" to="body">
      <A></A>
    </Teleport>
  </div> -->
  <!-- <Layout></Layout> -->
  <!-- <Reactive_Vue></Reactive_Vue>
<Ref_Vue></Ref_Vue>
<To_Vue></To_Vue>
<Computed_Vue></Computed_Vue>
<Watch_Vue></Watch_Vue>
<Live_Vue  v-else></Live_Vue> -->
</template>
<style lang="less">
// scoped 样式私有化，不污染全局
html,
body,
#app {
  height: 100%;
  overflow: hidden;

  .parent {
    // 当我们设置相对定位时，会影响到子组件dialog位置。
    // 两种解决方案
    // 1.把子组件的positon:absolute改为fixed
    // 2.使用传送组件Teleport
    position: relative;
    background: yellowgreen;
    // 相对视口区域
    height: 50vh;
  }
}
</style>
