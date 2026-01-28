<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header">Chi tiết bài viết</div>
      <div class="card-body">
        <h3 class="card-title">Bạn đang xem bài viết có ID: {{ route.params.id }}</h3>
        <p class="card-text">Nội dung chi tiết của bài viết sẽ nằm ở đây...</p>
        <button class="btn btn-secondary" @click="$router.push({ name: 'BlogList' })">Quay lại</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>