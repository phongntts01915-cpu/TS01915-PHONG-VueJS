<template>
  <div class="col-sm-8 m-auto">
    <h2 class="text-primary">Bình luận bài viết</h2>
    <div class="card mb-4">
      <img src="../assets/images/img1.jpg" class="card-img-top" alt="Hình ảnh" style="height: 300px; object-fit: cover;">
      <div class="card-body">
        <h3 class="card-title">8 loại rau củ quả giàu canxi</h3>
        <p class="card-text">Canxi là khoáng chất cần thiết... (Nội dung bài viết)</p>
      </div>
    </div>

    <form @submit.prevent="submitComment">
      <div class="mb-3">
        <textarea class="form-control" v-model="commentText" placeholder="Nhập bình luận của bạn..." rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-success">Gửi bình luận</button>
    </form>

    <div v-if="comments.length" class="mt-4 p-3 bg-light rounded">
      <h5>Danh sách các bình luận:</h5>
      <ul class="list-unstyled">
        <li v-for="(comment, index) in comments" :key="index" class="mb-2 border-bottom pb-2">
          <strong>{{ comment.name }}</strong>: {{ comment.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Nhận dữ liệu từ cha
const props = defineProps(['username']);

const commentText = ref('');
const comments = ref([]);

function submitComment() {
  if (commentText.value) {
    comments.value.push({
      name: props.username, // Lấy tên người dùng từ props
      text: commentText.value
    });
    commentText.value = '';
  }
}
</script>