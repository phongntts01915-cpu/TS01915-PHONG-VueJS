<template>
  <div class="mb-4 p-3 border rounded bg-light">
    <h3 class="text-info">Tạo bài viết mới</h3>
    <div class="mb-2">
      <input v-model="title" class="form-control mb-2" placeholder="Tiêu đề bài viết" />
      <input v-model="author" class="form-control mb-2" placeholder="Tên tác giả" />
      <textarea v-model="content" class="form-control mb-2" rows="3" placeholder="Nội dung bài viết"></textarea>
    </div>
    <button @click="submitPost" class="btn btn-primary">Đăng bài</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Define Emits để gửi sự kiện ra cha
const emit = defineEmits(['add-post']);

const title = ref('');
const content = ref('');
const author = ref('');

function submitPost() {
  if (title.value && content.value && author.value) {
    const newPost = {
      title: title.value,
      content: content.value,
      author: author.value,
      // Tạo màu ngẫu nhiên để demo style binding theo yêu cầu bài
      backgroundColor: generateRandomColor(),
      textColor: '#fff' 
    };

    // Gửi sự kiện 'add-post' kèm dữ liệu
    emit('add-post', newPost);

    // Reset form
    title.value = '';
    content.value = '';
    author.value = '';
  } else {
    alert("Vui lòng nhập đủ thông tin!");
  }
}

// Hàm phụ tạo màu ngẫu nhiên (để phục vụ style binding trong PostList)
function generateRandomColor() {
  const colors = ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f1c40f', '#34495e'];
  return colors[Math.floor(Math.random() * colors.length)];
}
</script>