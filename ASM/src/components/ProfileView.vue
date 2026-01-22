<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">Thông tin cá nhân</div>
      <div class="card-body" v-if="user">
        <form @submit.prevent="updateProfile">
          <div class="mb-3">
            <label class="form-label">Email (Không thể thay đổi)</label>
            <input :value="user.email" type="email" class="form-control" disabled>
          </div>
          <div class="mb-3">
            <label class="form-label">Họ tên</label>
            <input v-model="user.name" type="text" class="form-control">
          </div>
          <div class="mb-3">
            <label class="form-label">Mật khẩu mới</label>
            <input v-model="user.password" type="text" class="form-control">
          </div>
          <button type="submit" class="btn btn-primary">Cập nhật thông tin</button>
        </form>
      </div>
      <div v-else class="card-body">
        <p>Bạn chưa đăng nhập!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const user = ref(null);

onMounted(() => {
  user.value = JSON.parse(localStorage.getItem('currentUser'));
});

const updateProfile = () => {
  // Cập nhật currentUser trong localStorage
  localStorage.setItem('currentUser', JSON.stringify(user.value));

  // Cập nhật trong danh sách users tổng (để lần sau login được bằng pass mới)
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const index = users.findIndex(u => u.email === user.value.email);
  if (index !== -1) {
    users[index] = user.value;
    localStorage.setItem('users', JSON.stringify(users));
  }

  alert("Cập nhật thành công!");
};
</script>