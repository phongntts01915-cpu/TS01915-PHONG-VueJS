<template>
  <div class="col-sm-12 border p-4 mb-4">
    <h3 class="text-primary">Bài 3: Form Thông tin cá nhân</h3>
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <label>Họ và Tên:</label>
            <input v-model="userInfo.name" type="text" class="form-control" placeholder="Nhập họ và tên" />
          </div>
          <div class="mb-3">
            <label>Tuổi:</label>
            <input v-model="userInfo.age" type="number" class="form-control" placeholder="Nhập tuổi" />
          </div>
          <div class="mb-3">
            <label>Email:</label>
            <input v-model="userInfo.email" type="email" class="form-control" placeholder="Nhập email" />
          </div>
        </form>
      </div>

      <div class="col-md-6">
        <div class="p-3 bg-dark text-white rounded h-100">
          <h4>Thông tin đã nhập:</h4>
          <p><strong>Họ và Tên:</strong> {{ userInfo.name }}</p>
          <p><strong>Tuổi:</strong> {{ userInfo.age }}</p>
          <p><strong>Email:</strong> {{ userInfo.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

// Sử dụng reactive cho object
const userInfo = reactive({
  name: '',
  age: null,
  email: ''
});
</script>