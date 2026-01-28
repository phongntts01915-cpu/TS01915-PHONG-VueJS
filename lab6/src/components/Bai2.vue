<template>
  <div class="card p-4 mb-4">
    <h3 class="text-primary">Bài 2: Xác định mùa</h3>
    <div class="mb-3">
      <label class="form-label">Nhập tháng (1-12):</label>
      <input type="number" v-model="month" class="form-control" placeholder="Nhập tháng">
    </div>

    <h4 v-if="month < 1 || month > 12" class="text-danger">Vui lòng nhập tháng từ 1 đến 12!</h4>
    <h4 v-else-if="month <= 3" class="text-success">Mùa Xuân</h4>
    <h4 v-else-if="month <= 6" class="text-warning">Mùa Hè</h4>
    <h4 v-else-if="month <= 9" class="text-info">Mùa Thu</h4>
    <h4 v-else class="text-secondary">Mùa Đông</h4>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const month = ref(1);
</script>