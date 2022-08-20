<template>
<div>{{ mes.split(',') }}</div>
<div v-for="(item,index) in arr" :key="index">item:{{item}}</div>
<div class="on">
  <!-- 阻止冒泡 -->
    <div @click="parent">
    <div @click.stop="child">child</div>
  </div>
  <form action="/">
    <!-- .prevent:阻止表单提交按钮 -->
    <button type="submit" @click.prevent="submit">submit</button>
  </form>
</div>
<div class="bind1" :style="style">
 <p>v-bind</p>
<div :class="flag1">{{flag1}}</div>
<div :class="[flag ? 'other':'h']">12323</div>
</div>
<div class="model">
  <input v-model="message">
  {{message}}
</div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
// 模板字符串
const mes:string = "wo,shi,dokidoki"
// v-for
const arr:Array<number> = [1.,2,3,54,6]
// v-on
const parent = () => {
  console.log('parent');
}
const child = () => {
  console.log('this child')
}


const submit = () => {
  console.log('child');
}
// v-bind
type Style ={
  height:string
  color:string
}
const style:Style ={
  height:'100px',
  color:'red'
}

type Cls = {
  other:boolean
  h:boolean
}
const flag1:Cls = {
  other:true,
  h:false
}
const flag:boolean = false
// v-model
const message = ref('v-model')
</script>
<style scoped>
.bind1{
  border: 2px solid cornflowerblue;
}
.other{
  color: seagreen;
}
.h{
  border: 1px solid seagreen;
}
</style>
