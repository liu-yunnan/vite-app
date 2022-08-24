<template>
  <div>
<h1>Ref与Reactive的区别</h1>
<p>Ref的本质是通过Reactive创建的，Ref(10)=>Reactive({value:10});
Ref在模板调用可以直接省略value，在方法中改变变量的值需要修改value的值，才能修改成功。Reactive在模板必须写全不然显示整个数据。
Reactive的本质是将每一层的数都解析成proxy对象，Reactive 的响应式默认都是递归的，改变某一层的值都会递归的调用一遍，重新渲染dom。
</p>
<div>{{person}}</div>
<div>{{person1}}</div>
<div>{{person2}}</div>
<div>{{person3}}</div>
  <div>
    <div>{{ state }}</div>
    <button @click="change1">test1</button>
    <button @click="change2">test2</button>
  </div>
</div>
</template>

<script setup lang="ts">
import { reactive, readonly,shallowReactive} from 'vue'
// let p = reactive('xxx')//报错,普通数据类型用ref
let person = reactive({
  name:'DokiDoki'
})
// person.name = 'name change'

// 数组异步赋值问题
let person1 = reactive<number[]>([])
// 页面无变化，脱离响应式
setTimeout(()=>{
  person1 = [1,2,3]
  console.log(person1);
},1000)
// 解决方案1
let person2 = reactive<number[]>([])
setTimeout(()=>{
 const arr = [1,2,3]
 person2.push(...arr)
 console.log(person2);
},1000)
// 方案二：包裹一层对象，reactive对深层次的变化有响应
type Person = {
  list:number[]
}
let person3 = reactive<Person>({
  list:[]
})
setTimeout(()=>{
 const arr = [1,2,3]
 person3.list = arr
 console.log(person3);
},1000)

// readonly 拷贝一份proxy对象将其设置为只读
const p4 = reactive({count:1})
const copy = readonly(p4)
// copy.count++ //报错

// shallowReactive 
// 只能对浅层的数据 如果是深层的数据只会改变值 不会改变视图
const obj = {
  a: 1,
  first: {
    b: 2,
    second: {
      c: 3
    }
  }
}
 
const state = shallowReactive(obj)
 
function change1() {
  state.a = 7
}
function change2() {
  state.first.b = 8
  state.first.second.c = 9
  console.log(state);
}

</script>

<style scoped>

</style>