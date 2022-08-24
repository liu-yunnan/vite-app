<template>
  <div>
    <button @click="changeMsg">changeMsg</button>
    <div>{{message}}</div>
    <div>{{message1}}</div>
    <div>{{message2}}</div>
  </div>
</template>

<script setup lang="ts">
import { ref,Ref,isRef,shallowRef, triggerRef,customRef } from 'vue';
// ShallowRef 创建一个跟踪自身 .value 变化的 ref，但不会使其值也变成响应式的 ----非深度监听
// triggerRef 强制更新页面dom
// customRef 自定义ref，要求返回一个对象并实现get set
let message:Ref<string> = ref('DoKiDoKi');
let noRef:number = 123

type obj = {
  name:string
}
let message1:Ref<obj>=shallowRef({
  name:'DoKiDoKi'
})
const changeMsg = ()=>{
  // message.value = 'change message'
  // console.log(isRef(message));
  // console.log(isRef(noRef));

  // 通过shallowRef创建的响应式对象，需要修改整个value才能重新渲染dom
  // 并不能重新渲染，shallowRef的原理也是通过shallowReactive({value:{}})创建的，要修改value才能重新渲染
  // message1.value.name = 'change message1'
  // message1.value = {name:'change message1'}
  // 如果使用了shallowRef想要只更新某一层的数据可以使用triggerRef
  // message1.value.name = 'change message1'
  // triggerRef(message1)
  message2.value = 'change message1'
}

function Myref<T>(value: T) {
  // customRef函数返回一个对象，对象里面有2个方法，get/set方法，创建的对象获取数据的时候能 访问到get方法，创建的对象修改值的时候会触发set 方法
  // customRef函数有2个参数，track/trigger，track参数是追踪的意思，get 的方法里面调用，可以随时追踪数据改变。trigger参数 是触发响应的意思，set 方法里面调用可以更新UI界面

  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newVal: T) {
        console.log('set');
        value = newVal
        trigger()
      }
    }
  })
}
 
let message2 = Myref('doki')

</script>

<style lang="scss" scoped>

</style>