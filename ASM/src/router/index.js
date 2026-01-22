// File: src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
// Sửa đường dẫn từ ../views/ thành ../components/
import HomeView from '../components/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/login',
            name: 'login',
            // Sửa đường dẫn từ ../views/ thành ../components/
            component: () => import('../components/LoginView.vue')
        },
        {
            path: '/register',
            name: 'register',
            // Sửa đường dẫn từ ../views/ thành ../components/
            component: () => import('../components/RegisterView.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            // Sửa đường dẫn từ ../views/ thành ../components/
            component: () => import('../components/ProfileView.vue')
        }
    ]
})

export default router