import { createRouter, createWebHistory } from 'vue-router'

// Import các view (component) sẽ tạo ở Bước 3
import Home from '../components/Home.vue'
import BlogList from '../components/BlogList.vue'
import BlogPost from '../components/BlogPost.vue'
import UserProfile from '../components/UserProfile.vue'
import UserProfileInfo from '../components/UserProfileInfo.vue'
import UserProfileSettings from '../components/UserProfileSettings.vue'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },

    // Route danh sách blog [cite: 1175]
    { path: '/blog', name: 'BlogList', component: BlogList },

    // Route động (Dynamic Route) lấy ID bài viết [cite: 1177]
    { path: '/blog/:id', name: 'BlogPost', component: BlogPost },

    // Route lồng nhau (Nested Route) + Alias [cite: 1180-1200]
    {
        path: '/profile',
        name: 'UserProfile',
        component: UserProfile,
        alias: '/me', // Alias: vào /me cũng ra profile 
        children: [
            { path: 'info', name: 'UserProfileInfo', component: UserProfileInfo },
            { path: 'settings', name: 'UserProfileSettings', component: UserProfileSettings }
        ]
    },

    { path: '/login', name: 'Login', component: Login },

    // Route được bảo vệ (Protected Route) [cite: 1208-1214]
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Route Guard (Bảo vệ đường dẫn) [cite: 1227-1243]
router.beforeEach((to, from, next) => {
    // Kiểm tra xem route có yêu cầu đăng nhập không
    const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true'; // Giả lập check login

    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        // Nếu cần auth mà chưa login -> đá về trang Login
        next({ name: 'Login' });
    } else {
        next();
    }
})

export default router