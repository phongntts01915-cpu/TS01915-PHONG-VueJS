<template>
  <div class="card p-4 mb-4">
    <h3 class="text-primary">Bài 1: Xếp loại học sinh</h3>
    <div class="mb-3">
      <label class="form-label">Nhập điểm trung bình:</label>
      <input type="number" v-model="score" class="form-control" placeholder="Nhập điểm số (0-10)" max="10" min="0">
    </div>

    <div class="alert alert-success" v-if="score >= 9">Xuất sắc</div>
    <div class="alert alert-info" v-else-if="score >= 8">Giỏi</div>
    <div class="alert alert-primary" v-else-if="score >= 6.5">Khá</div>
    <div class="alert alert-warning" v-else-if="score >= 5">Trung bình</div>
    <div class="alert alert-danger" v-else>Yếu</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const score = ref(0);
</script>