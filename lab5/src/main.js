import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Chỉ giữ lại dòng này để có giao diện đẹp
import 'bootstrap/dist/css/bootstrap.css'

// XÓA dòng import router đi
// XÓA dòng app.use(router) đi

createApp(App).mount('#app')