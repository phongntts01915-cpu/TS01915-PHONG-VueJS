<template>
  <div class="col-sm-6 border p-4 mb-4">
    <h3 class="text-primary">Bài 1: Binding & Events</h3>
    <p class="fs-4">{{ message }}</p>
    <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Thông điệp ban đầu');

const updateMessage = () => {
  message.value = 'Thông điệp đã được thay đổi!';
};
</script>