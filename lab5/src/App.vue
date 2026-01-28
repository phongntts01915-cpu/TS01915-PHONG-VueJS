<script setup>
import { ref } from 'vue';

// 1. Import đủ 4 bài tập vào đây
import Bai1 from './components/Bai1.vue';
import Bai2 from './components/Bai2.vue';
import Bai3 from './components/Bai3.vue';
import Bai4 from './components/Bai4.vue';

// 2. Tạo biến trạng thái để nhớ đang xem bài nào (Mặc định là bài 1)
const activeTab = ref(1);

// 3. Hàm để chuyển tab (gắn vào nút bấm)
function selectTab(tabNumber) {
  activeTab.value = tabNumber;
}
</script>

<template>
  <div id="app" class="container py-4">
    <h1 class="text-center text-danger mb-4">LAB 5</h1>

    <div class="d-flex justify-content-center mb-4 gap-2">
      <button 
        class="btn" 
        :class="{ 'btn-primary': activeTab === 1, 'btn-outline-primary': activeTab !== 1 }"
        @click="selectTab(1)"
      >
        Bài 1
      </button>

      <button 
        class="btn" 
        :class="{ 'btn-primary': activeTab === 2, 'btn-outline-primary': activeTab !== 2 }"
        @click="selectTab(2)"
      >
        Bài 2
      </button>

      <button 
        class="btn" 
        :class="{ 'btn-primary': activeTab === 3, 'btn-outline-primary': activeTab !== 3 }"
        @click="selectTab(3)"
      >
        Bài 3
      </button>

      <button 
        class="btn" 
        :class="{ 'btn-primary': activeTab === 4, 'btn-outline-primary': activeTab !== 4 }"
        @click="selectTab(4)"
      >
        Bài 4
      </button>
    </div>

    <div class="border p-4 rounded shadow-sm bg-white">
      
      <div v-if="activeTab === 1">
        <Bai1 />
      </div>

      <div v-if="activeTab === 2">
        <Bai2 />
      </div>

      <div v-if="activeTab === 3">
        <Bai3 />
      </div>

      <div v-if="activeTab === 4">
        <Bai4 />
      </div>

    </div>

  </div>
</template>

<style>
/* Style nhẹ cho nút bấm đẹp hơn */
.gap-2 {
  gap: 10px;
}
</style>