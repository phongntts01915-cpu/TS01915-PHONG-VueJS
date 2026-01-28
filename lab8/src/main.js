import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router' // Import router vừa tạo

const app = createApp(App)
app.use(router) // Kích hoạt router
app.mount('#app')