<template>
  <div style="padding: 20px;">
    <table style="width:800px" border>
      <thead>
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in data" :key="index">
          <td>{{item.name}}</td>
          <td><button @click="addOrSub(item,false)">-</button>{{item.num}}<button @click="addOrSub(item,true)">+</button></td>
          <td>{{item.price *item.num}}</td>
          <td><button @click="del(index)">删除</button></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>总价：{{total}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed,ref,reactive } from 'vue'
type Shop = {
  name:string,
  num:number,
  price:number
}
let total = ref<number>(0)
const data = reactive<Shop[]>([
  {name:'衣服',
  num:1,
  price:100},
  {
    name:'化妆品',
    num:1,
    price:200
  },
  {
    name:'鞋子',
    num:1,
    price:200
  }
])
const addOrSub =(item:Shop,type:boolean = false):void=>{
  if(item.num >1 && !type){
    item.num--
  }
  if(item.num<=99 &&type){
    item.num++
  }
}
const del = (index:number)=>{
  data.splice(index,1)
}
total = computed<number>(()=>{
  return data.reduce((prev,next)=>{
    return prev+(next.num * next.price)
  },0)
})
</script>

<style scoped>
td{
  text-align:center
}
</style>