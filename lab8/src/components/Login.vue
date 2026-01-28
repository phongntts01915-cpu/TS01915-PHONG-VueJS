<template>
  <div class="col-md-4 m-auto mt-5 border p-4 rounded shadow">
    <h3 class="text-center">Đăng nhập</h3>
    <button class="btn btn-primary w-100 mt-3" @click="handleLogin">Đăng nhập ngay</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function handleLogin() {
  // Giả lập đăng nhập thành công
  localStorage.setItem('isLoggedIn', 'true'); // Lưu trạng thái vào localStorage
  alert('Đăng nhập thành công!');
  // Chuyển hướng sang Dashboard [cite: 1254]
  router.push({ name: 'Dashboard' });
}
</script>