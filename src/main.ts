import { createApp } from 'vue'
import './assets/css/reset.less'
import App from './App.vue'
// 注册全局组件
import Card from './components/card/index.vue'
createApp(App).component('Card',Card).mount('#app')
