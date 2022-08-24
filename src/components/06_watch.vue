<template>
  <div class="div">
    <p>
      watch 需要侦听特定的数据源，并在单独的回调函数中执行副作用
      <br />第一个参数监听源
      <br />第二个参数回调函数cb（newVal,oldVal）
      <br />第三个参数一个options配置项是一个对象{
      <br />immediate:true //是否立即调用一次
      <br />deep:true //是否开启深度监听
      <br />}
    </p>
    <p>
      watchEffect
      <br />立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。
      <br />如果用到message 就只会监听message 就是用到几个监听几个
      <br />而且是非惰性 会默认调用一次
    </p>
    <input v-model="message" type="text" />
    <input v-model="message1" type="text" />
    <button @click="stopWatch">停止监听</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'

let message = ref<string>('xxx')
let message1 = ref<string>('abj')
// 清除副作用:就是在触发监听之前会调用一个函数可以处理你的逻辑例如防抖
const stop = watchEffect((oninvalidate) => {
  oninvalidate(() => {
    console.log('before');
  })
  console.log('message----', message.value);
  console.log('message1----', message1.value);
}, {
  flush: "post",//post：组件更新后执行 sync：强制效果始终同步触发 pre：组件更新前
  // 帮助调试
  onTrigger() {
    // debugger
  }
})
// 停止监听
const stopWatch = () => stop()
// 多个侦听为数组
// watch([message, message1], (newVal, oldVal) => {
//   console.log('新的值----', newVal);
//   console.log('旧的值----', oldVal);
// })
// watch 使用reactive监听深层对象开启和不开启deep 效果一样
</script>

<style scoped>
.div {
  padding: 20px;
  border: 2px solid salmon;
}
</style>