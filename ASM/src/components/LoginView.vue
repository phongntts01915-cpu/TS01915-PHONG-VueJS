<template>
  <div class="container d-flex justify-content-center align-items-center" style="min-height: 80vh;">
    <div class="card shadow-lg border-0 rounded-4" style="width: 100%; max-width: 400px;">
      <div class="card-body p-5">
        <h3 class="text-center fw-bold mb-4 text-primary">Đăng Nhập</h3>
        
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label class="form-label fw-semibold">Email</label>
            <input v-model="email" type="email" class="form-control form-control-lg bg-light border-0" placeholder="name@example.com" required>
          </div>
          <div class="mb-4">
            <label class="form-label fw-semibold">Mật khẩu</label>
            <input v-model="password" type="password" class="form-control form-control-lg bg-light border-0" placeholder="******" required>
          </div>
          <button type="submit" class="btn btn-primary w-100 btn-lg rounded-pill fw-bold shadow-sm">
            Vào ngay
          </button>
        </form>

        <div class="text-center mt-4">
          <small class="text-muted">Chưa có tài khoản? <RouterLink to="/register" class="text-decoration-none fw-bold">Đăng ký ngay</RouterLink></small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email.value && u.password === password.value);

  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    router.push('/');
  } else {
    alert("Sai tài khoản hoặc mật khẩu rồi!");
  }
};
</script>