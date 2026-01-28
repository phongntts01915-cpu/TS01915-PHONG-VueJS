<template>
  <div class="p-4 border rounded col-sm-6 m-auto bg-light">
    <h3 class="text-center">Đăng Nhập</h3>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label>Tên đăng nhập:</label>
        <input type="text" class="form-control" v-model="username" placeholder="Nhập tên..." required>
      </div>
      <div class="mb-3">
        <label>Mật khẩu:</label>
        <input type="password" class="form-control" v-model="password" placeholder="Pass..." required>
      </div>
      <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

// Định nghĩa sự kiện emit để gửi dữ liệu ra cha
const emit = defineEmits(['loggedIn']);

function handleLogin() {
  if (username.value && password.value) {
    // Bắn sự kiện loggedIn kèm theo tên user
    emit('loggedIn', username.value);
  }
}
</script>