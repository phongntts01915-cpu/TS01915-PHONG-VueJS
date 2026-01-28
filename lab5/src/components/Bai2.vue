<template>
  <div class="col-sm-6 border p-4 mb-4">
    <h3 class="text-primary">Bài 2: v-model</h3>
    <label class="form-label">Nhập dữ liệu:</label>
    <input v-model="userInput" class="form-control" placeholder="Nhập dữ liệu vào đây" />
    
    <p class="mt-3">Giá trị bạn nhập: <strong>{{ userInput }}</strong></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const userInput = ref('FPL');
</script>