<template>
  <div class="container mt-4">
    <h3>Bài viết</h3>

    <div class="card mb-3" v-for="i in 3" :key="i">
      <div class="card-body">
        <h5 class="card-title">Bài viết {{ i }}</h5>
        <p class="card-text">Nội dung mô tả ngắn...</p>
        <button class="btn btn-outline-primary btn-sm">
          Xem chi tiết
        </button>
      </div>
    </div>
  </div>
</template>
