<template>
  <div class="menu">
    <!-- 菜单区域
    <button @click="clickTap">派发给父组件</button>
    <div>
      {{ title }}
    </div>
    <div>
      {{ data }}
    </div> -->
    <Tree @on-click="getItem" :data="data"></Tree>
  </div>
</template>

<script setup lang="ts">
import Tree from '../../components/Tree/index.vue'
import { reactive } from 'vue'

type Props = {
  title: string,
  data: number[]
}
// ts特有的
// defineProps<{
//     title?:string,
//     data?:number[]
// }>()
// TS 特有的默认值方式
// 一个props函数第二个参数是一个对象设置默认值
withDefaults(defineProps<Props>(), {
  title: 'xxx',
  data: () => [1, 5, 5]
})
// 如果不是ts
// defineProps({
//     title:{
//         default:"",
//         type:string
//     },
//     data:Array
// })

const list = reactive<number[]>([4, 5, 6])
// defineEmits 注册了一个自定义事件
const emit = defineEmits(['on-click'])
const clickTap = () => {
  emit('on-click', list)
}
// defineExpose子组件暴露给父组件内部属性
// 可以使子组件更安全
defineExpose({
  list
})

// 递归组件
type TreeList = {
  name: string;
  icon?: string;
  children?: TreeList[] | [];
};
const data = reactive<TreeList[]>([
  {
    name: "no.1",
    children: [
      {
        name: "no.1-1",
        children: [
          {
            name: "no.1-1-1",
          },
        ],
      },
    ],
  },
  {
    name: "no.2",
    children: [
      {
        name: "no.2-1",
      },
    ],
  },
  {
    name: "no.3",
  },
]);
const getItem = (item: TreeList) => {
  console.log(item, '父组件的item');
}
</script>

<style scoped lang="less">
.menu {
  width: 200px;
  border-right: 1px solid #333;
}
</style>