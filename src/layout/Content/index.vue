<template>
  <div class="content">
    <!-- <div class="content-items" :key="item" v-for="item in 100"> -->
    <!-- {{item}} -->
    <!-- <Card :content="`我是第${item}个`"></Card>
    </div> -->
    <!-- 动态组件 -->
    <div class="tab">
      <div @click="switchCom(item)" v-for="item in data" :key="item.name">{{ item.name }}</div>
      <!-- 在Vue2 的时候is 是通过组件名称切换的 在Vue3 setup 是通过组件实例切换的 -->
    </div>
    <component :is="current.comName"></component>
    <!-- 插槽 -->
    <div class="slot">
      <Dialog>
        <!-- <template v-slot:header>
        插入header
      </template>
      简写
      <template #default="{ data }">
        <div>{{ data.name }}--{{ data.name }}</div>
      </template>
      简写
      <template #footer>
        插入footer
      </template> -->
        <!-- 动态插槽 -->
        <template #[name]>
          <div>我在哪</div>
        </template>
      </Dialog>
    </div>
    <!-- 异步组件 -->
    <Suspense>
      <template #default>
        <div>
          <div style="width:500px; padding:10px;border: 1px solid #333;">
            suspense组件有两个插槽。它们都只接收一个直接子节点。default 插槽里的节点会尽可能展示出来。如果不能，则展示 fallback 插槽里的节点。
          </div>
          <Atest></Atest>
        </div>
      </template>
      <template #fallback>
        <div>
          loading……
        </div>
      </template>
    </Suspense>
  </div>

</template>

<script setup lang="ts">
import { reactive, markRaw, ref, defineAsyncComponent } from 'vue';
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
import Dialog from '../../components/Dialog/index.vue';
// 声明为异步组件
const Atest = defineAsyncComponent(() => import('../../components/A/index.vue'))
const name = ref('footer')
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