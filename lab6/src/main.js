import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css' // Bắt buộc có dòng này
import 'bootstrap/dist/js/bootstrap.bundle.js' // Thêm JS để chạy modal/dropdown nếu cần

createApp(App).mount('#app')