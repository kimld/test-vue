import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import './style/tailwind.css'
import axios from './apis/axios'
// 引入全局css
import '@/assets/css/golbal.css'
// 引入全局typejs

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
// 配置axios的全局应用
app.config.globalProperties.$axios=axios



