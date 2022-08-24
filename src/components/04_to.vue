<template>
  <div class="to">
    <p> toRef: 如果数据是非响应式的，会更新数据，但视图不更新,
      如果原始对象是响应式的是会更新视图并且改变数据的。
    </p>
    <p> toRefs: 批量创建ref对象主要是方便我们解构使用</p>
    <p> toRaw: 将响应式对象转化为普通对象</p>
    <hr>
  <div><button @click="change">toRaw</button></div>
  <div>foo----{{foo}}</div>
  <div>bar----{{bar}}</div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs,toRaw } from 'vue'
 
const obj = reactive({
   foo: 1,
   bar: 1
})
 let { foo, bar } = toRefs(obj)
foo.value++
console.log(foo, bar);
const state = toRaw(obj)
// 响应式对象转化为普通对象
const change = () => {
 console.log(obj, state);
}
</script>

<style scoped>
.to{
  border: 2px solid slateblue;
}
</style>