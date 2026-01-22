import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// --- QUAN TRỌNG NHẤT: BẮT BUỘC PHẢI CÓ 2 DÒNG NÀY ---
// Đây là "áo đẹp" của Bootstrap, thiếu nó là web sẽ bị lỗi hiển thị ngay
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// ----------------------------------------------------

const app = createApp(App)

app.use(router)

app.mount('#app')