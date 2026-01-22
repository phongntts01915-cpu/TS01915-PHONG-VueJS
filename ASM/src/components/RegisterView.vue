<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-header bg-primary text-white">Đăng Ký Tài Khoản</div>
          <div class="card-body">
            <form @submit.prevent="handleRegister">
              <div class="mb-3">
                <label class="form-label">Họ và Tên</label>
                <input v-model="form.name" type="text" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input v-model="form.email" type="email" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Mật khẩu</label>
                <input v-model="form.password" type="password" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-success w-100">Đăng Ký</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({ name: '', email: '', password: '' });

const handleRegister = () => {
  // Lấy danh sách user cũ
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  // Kiểm tra email trùng
  if (users.find(u => u.email === form.value.email)) {
    alert("Email này đã tồn tại!");
    return;
  }

  // Lưu user mới
  users.push(form.value);
  localStorage.setItem('users', JSON.stringify(users));
  
  alert("Đăng ký thành công! Vui lòng đăng nhập.");
  router.push('/login');
};
</script>