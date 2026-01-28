<template>
  <div class="container mt-4">
    <div class="card shadow-sm">
      <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h3 class="mb-0">Bảng điều khiển</h3>
        <span class="badge bg-light text-dark">Admin</span>
      </div>
      
      <div class="card-body">
        <h5 class="card-title text-success">Chào mừng quay trở lại!</h5>
        <p class="text-muted">Hệ thống đang hoạt động bình thường.</p>

        <div class="row mt-4 mb-4">
          <div class="col-md-4">
            <div class="card text-center border-info mb-3">
              <div class="card-body">
                <h5 class="card-title text-info">Tổng Bài Viết</h5>
                <p class="display-4 fw-bold">12</p>
                <button class="btn btn-outline-info btn-sm">Xem chi tiết</button>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card text-center border-warning mb-3">
              <div class="card-body">
                <h5 class="card-title text-warning">Người Theo Dõi</h5>
                <p class="display-4 fw-bold">1,250</p>
                <button class="btn btn-outline-warning btn-sm">Quản lý</button>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card text-center border-danger mb-3">
              <div class="card-body">
                <h5 class="card-title text-danger">Bình Luận Mới</h5>
                <p class="display-4 fw-bold">5</p>
                <button class="btn btn-outline-danger btn-sm">Phê duyệt</button>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div class="d-flex justify-content-end">
            <button class="btn btn-secondary me-2">Cài đặt</button>
            <button class="btn btn-danger" @click="handleLogout">Đăng xuất</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function handleLogout() {
  // Xóa trạng thái đăng nhập
  localStorage.removeItem('isLoggedIn');
  alert('Đã đăng xuất thành công!');
  // Chuyển hướng về trang đăng nhập
  router.push({ name: 'Login' });
}
</script>

<style scoped>
/* Thêm chút hiệu ứng khi rê chuột vào các ô thống kê */
.card:hover {
    transform: translateY(-2px);
    transition: all 0.2s ease-in-out;
}
</style>