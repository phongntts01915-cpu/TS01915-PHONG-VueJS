<template>
  <div class="row">
    <div class="col-md-6 mb-4">
      <div class="p-4 border rounded bg-light">
        <h3 class="text-primary">Form Đăng Ký</h3>
        <form @submit.prevent="register">
          <div class="mb-3"><label>Họ tên:</label><input v-model="form.name" class="form-control" placeholder="Nhập họ tên" /></div>
          <div class="mb-3"><label>Email:</label><input v-model="form.email" type="email" class="form-control" placeholder="Nhập email" /></div>
          <div class="mb-3"><label>Mật khẩu:</label><input v-model="form.password" type="password" class="form-control" placeholder="Nhập mật khẩu" /></div>
          <div class="mb-3"><label>Ngày sinh:</label><input v-model="form.dob" type="date" class="form-control" /></div>
          
          <div class="mb-3">
            <label class="d-block">Giới tính:</label>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" value="Nam" v-model="form.gender"> <label class="form-check-label">Nam</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" value="Nữ" v-model="form.gender"> <label class="form-check-label">Nữ</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" value="Khác" v-model="form.gender"> <label class="form-check-label">Khác</label>
            </div>
          </div>

          <div class="mb-3">
            <label class="d-block">Ngôn ngữ:</label>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" value="Tiếng Việt" v-model="form.languages"> <label class="form-check-label">Tiếng Việt</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" value="Tiếng Anh" v-model="form.languages"> <label class="form-check-label">Tiếng Anh</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" value="Tiếng Nhật" v-model="form.languages"> <label class="form-check-label">Tiếng Nhật</label>
            </div>
          </div>
          
          <button type="submit" class="btn btn-primary">Đăng ký</button>
        </form>
      </div>
    </div>

    <div class="col-md-6" v-if="submitted">
      <div class="p-4 border rounded bg-white shadow-sm">
        <h3 class="text-success">Thông tin đã đăng ký:</h3>
        <p><strong>Họ tên:</strong> {{ form.name }}</p>
        <p><strong>Email:</strong> {{ form.email }}</p>
        <p><strong>Ngày sinh:</strong> {{ form.dob }}</p>
        <p><strong>Giới tính:</strong> {{ form.gender }}</p>
        <p><strong>Ngôn ngữ:</strong> {{ form.languages.join(', ') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const submitted = ref(false);
const form = reactive({
  name: '',
  email: '',
  password: '',
  dob: '',
  gender: 'Nam',
  languages: []
});

const register = () => {
  submitted.value = true;
};
</script>