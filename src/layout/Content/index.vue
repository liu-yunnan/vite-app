<template>
  <div class="content">
    <!-- <div class="content-items" :key="item" v-for="item in 100"> -->
    <!-- {{item}} -->
    <!-- <Card :content="`我是第${item}个`"></Card>
    </div> -->
    <div class="tab">
      <div @click="switchCom(item)" v-for="item in data" :key="item.name">{{ item.name }}</div>
      <!-- 在Vue2 的时候is 是通过组件名称切换的 在Vue3 setup 是通过组件实例切换的 -->
    </div>
    <component :is="current.comName"></component>
  </div>

</template>

<script setup lang="ts">
import { reactive, markRaw } from 'vue';
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
type Tabs = {
  name: string,
  comName: any
}
type Com = Pick<Tabs, 'comName'>
const data = reactive<Tabs[]>([
  {
    name: '我是A',
    // 使用shallowRef 或者  markRaw 跳过proxy 代理
    // 设置了一个__v_skip属性，如果为true，则跳过对该对象的代理
    comName: markRaw(A)
  },
  {
    name: '我是B',
    comName: markRaw(B)
  }, {
    name: '我是C',
    comName: markRaw(C)
  }])
let current = reactive<Com>({
  comName: data[0].comName
})
const switchCom = (item: Tabs) => {
  current.comName = item.comName
}
</script>

<style scoped lang="less">
.content {
  flex: 1;
  overflow: auto;

  &-items {
    border: 1px solid #333;
    padding: 10px;
  }

  .tab {
    display: flex;


    div {
      padding: 10px;
      margin: 10px 0 10px 10px;
      border: 1px solid #333;
    }
  }
}
</style>