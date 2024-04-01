import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import '@/assets/css/style.css'
import '@/assets/css/global.css'
import '@/assets/css/app.css'
import 'element-plus/dist/index.css'
import '@/assets/css/global.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.mount('#app')
