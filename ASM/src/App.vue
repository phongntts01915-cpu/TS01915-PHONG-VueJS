<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div class="container">
        <RouterLink class="navbar-brand fw-bold fst-italic" to="/">
          <i class="bi bi-stars"></i> FPoly Blog
        </RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto fw-semibold">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Trang chủ</RouterLink>
            </li>
            <li v-if="!currentUser" class="nav-item">
              <RouterLink class="nav-link" to="/login">Đăng nhập</RouterLink>
            </li>
            <li v-if="!currentUser" class="nav-item">
              <RouterLink class="nav-link" to="/register">Đăng ký</RouterLink>
            </li>
            <li v-if="currentUser" class="nav-item dropdown">
              <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" data-bs-toggle="dropdown">
                <img :src="`https://ui-avatars.com/api/?name=${currentUser.name}&background=random&color=fff`" 
                     class="rounded-circle me-2" width="30" height="30">
                {{ currentUser.name }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end shadow border-0">
                <li><RouterLink class="dropdown-item" to="/profile">Hồ sơ cá nhân</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item text-danger" href="#" @click.prevent="logout">Đăng xuất</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main class="bg-light min-vh-100 py-4">
    <RouterView />
  </main>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const currentUser = ref(null);

const checkLogin = () => {
  const userStr = localStorage.getItem('currentUser');
  currentUser.value = userStr ? JSON.parse(userStr) : null;
};

watch(route, () => checkLogin());

const logout = () => {
  localStorage.removeItem('currentUser');
  currentUser.value = null;
  router.push('/login');
};

checkLogin();
</script>