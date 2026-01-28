import { createApp } from 'vue'
// import './style.css'  <-- Nếu bạn đã xóa trắng file style.css thì dòng này giữ hay bỏ đều được.
import App from './App.vue'

// QUAN TRỌNG: Dòng này phải có để nút màu xanh, đỏ đẹp mắt
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(App).mount('#app')