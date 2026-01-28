<script setup>
import { ref } from 'vue';

import Bai1 from './components/Bai1.vue';
import Bai2 from './components/Bai2.vue';
import Bai3 from './components/Bai3.vue';
import Bai4 from './components/Bai4.vue';

const activeTab = ref(1);
</script>

<template>
  <div class="container py-4">
    <h1 class="text-center text-uppercase text-danger mb-4 fw-bold">Lab 7</h1>

    <div class="d-flex justify-content-center mb-4 gap-2">
      <button class="btn" :class="activeTab === 1 ? 'btn-primary' : 'btn-outline-primary'" @click="activeTab = 1">Bài 1: ToDo</button>
      <button class="btn" :class="activeTab === 2 ? 'btn-primary' : 'btn-outline-primary'" @click="activeTab = 2">Bài 2: Login</button>
      <button class="btn" :class="activeTab === 3 ? 'btn-primary' : 'btn-outline-primary'" @click="activeTab = 3">Bài 3: Register</button>
      <button class="btn" :class="activeTab === 4 ? 'btn-primary' : 'btn-outline-primary'" @click="activeTab = 4">Bài 4: Components</button>
    </div>

    <div class="border p-4 rounded bg-white shadow-sm">
      <Bai1 v-if="activeTab === 1" />
      <Bai2 v-if="activeTab === 2" />
      <Bai3 v-if="activeTab === 3" />
      <Bai4 v-if="activeTab === 4" />
    </div>
  </div>
</template>

<style>
body { background-color: #f8f9fa; }
</style>