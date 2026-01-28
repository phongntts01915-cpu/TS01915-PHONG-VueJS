<template>
  <div class="col-sm-6 m-auto p-4 border rounded shadow-sm">
    <div v-if="!isLoggedIn">
      <h3 class="text-center text-warning">Form Đăng nhập</h3>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email" placeholder="Nhập email">
          <p v-if="emailError" class="text-danger mt-1">{{ emailError }}</p>
        </div>
        <div class="mb-3">
          <label>Mật khẩu:</label>
          <input type="password" class="form-control" v-model="password" placeholder="Nhập mật khẩu">
          <p v-if="passwordError" class="text-danger mt-1">{{ passwordError }}</p>
        </div>
        <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
      </form>
    </div>

    <div v-else class="text-center">
      <h3 class="text-success">Chào mừng, {{ email }}!</h3>
      <button @click="logout" class="btn btn-secondary mt-3">Đăng xuất</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false);
const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const login = () => {
  // Reset lỗi
  emailError.value = '';
  passwordError.value = '';

  // Validate Email
  if (!email.value) {
    emailError.value = 'Email là bắt buộc.';
  } else if (!emailRegex.test(email.value)) {
    emailError.value = 'Vui lòng nhập email hợp lệ.';
  }

  // Validate Password
  if (!password.value) {
    passwordError.value = 'Mật khẩu là bắt buộc.';
  }

  // Nếu không có lỗi thì Login thành công
  if (!emailError.value && !passwordError.value) {
    isLoggedIn.value = true;
  }
};

const logout = () => {
  isLoggedIn.value = false;
  email.value = '';
  password.value = '';
};
</script>