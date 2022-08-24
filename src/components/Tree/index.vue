<template>
  <div style="margin-left:10px ;">
    <div @click="clickItem(item)" :key="index" v-for="(item, index) in data">
      {{ item.name }}
      <!-- ?:可选链操作符  xx ?? [] :若左边为undefined或者null，返回右边  -->
      <TreeItem v-if="item?.children?.length" :data="item.children"></TreeItem>
    </div>
  </div>
</template>

<script setup lang="ts">
// 递归组件
import TreeItem from './index.vue'
type TreeList = {
  name: string;
  icon?: string;
  children?: TreeList[] | [];
};
type Props<T> = {
  data?: T[] | [];
}
defineProps<Props<TreeList>>()
const emit = defineEmits(['on-click'])
const clickItem = (item: TreeList) => {
  // console.log(item)
  emit('on-click', item)
}
</script>

<style scoped>
</style>