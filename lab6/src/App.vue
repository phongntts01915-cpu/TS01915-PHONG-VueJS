<script setup>
import { ref } from 'vue';

// Import 4 bài tập
import Bai1 from './components/Bai1.vue';
import Bai2 from './components/Bai2.vue';
import Bai3 from './components/Bai3.vue';
import Bai4 from './components/Bai4.vue';

// Biến trạng thái tab (mặc định tab 1)
const activeTab = ref(1);
</script>

<template>
  <div class="container py-4">
    <h1 class="text-center text-uppercase text-primary mb-4 fw-bold">Lab 6: Conditional & List Rendering</h1>

    <div class="d-flex justify-content-center mb-4 gap-2">
      <button class="btn" :class="activeTab === 1 ? 'btn-primary' : 'btn-outline-primary'" @click="activeTab = 1">
        Bài 1: Xếp loại
      </button>
      <button class="btn" :class="activeTab === 2 ? 'btn-primary' : 'btn-outline-primary'" @click="activeTab = 2">
        Bài 2: Mùa
      </button>
      <button class="btn" :class="activeTab === 3 ? 'btn-primary' : 'btn-outline-primary'" @click="activeTab = 3">
        Bài 3: Tin tức (v-for)
      </button>
      <button class="btn" :class="activeTab === 4 ? 'btn-primary' : 'btn-outline-primary'" @click="activeTab = 4">
        Bài 4: QL Học sinh
      </button>
    </div>

    <div class="border p-4 rounded shadow-sm bg-white">
      <Bai1 v-if="activeTab === 1" />
      <Bai2 v-if="activeTab === 2" />
      <Bai3 v-if="activeTab === 3" />
      <Bai4 v-if="activeTab === 4" />
    </div>
  </div>
</template>

<style>
body {
  background-color: #f8f9fa;
}
</style>