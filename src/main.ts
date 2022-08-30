import { createApp } from 'vue'
import './assets/css/reset.less'
import App from './App.vue'
// 注册全局组件
import Card from './components/card/index.vue'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// const app = createApp(App)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }
createApp(App).component('Card',Card).mount('#app')
