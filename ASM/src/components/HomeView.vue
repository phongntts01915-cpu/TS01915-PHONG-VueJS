<template>
  <div class="container" style="max-width: 800px;">
    
    <div v-if="currentUser" class="card shadow-sm border-0 mb-4 rounded-4">
      <div class="card-body p-4">
        <h5 class="mb-3 fw-bold text-primary">
          <i class="bi bi-pencil-square"></i> 
          {{ editingIndex === -1 ? 'Tạo bài viết mới' : 'Chỉnh sửa bài viết' }}
        </h5>
        
        <div class="d-flex mb-3">
          <img :src="`https://ui-avatars.com/api/?name=${currentUser.name}&background=random&color=fff`" 
               class="rounded-circle me-3" width="50" height="50">
          <div class="w-100">
             <textarea v-model="postForm.content" class="form-control border-0 bg-light rounded-3 px-3 py-2" 
                    rows="3" placeholder="Bạn đang nghĩ gì thế?" 
                    style="resize: none;"
          ></textarea>
          </div>
        </div>
        
        <div class="d-flex justify-content-between align-items-center">
          <input v-model="postForm.image" class="form-control form-control-sm w-50" placeholder="Dán link ảnh (URL) vào đây...">
          
          <div>
            <button v-if="editingIndex !== -1" @click="cancelEdit" class="btn btn-secondary rounded-pill px-3 me-2 fw-bold">
              Hủy
            </button>
            <button @click="handleSubmit" class="btn btn-primary rounded-pill px-4 fw-bold">
              {{ editingIndex === -1 ? 'Đăng bài' : 'Lưu lại' }}
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="alert alert-primary shadow-sm border-0 rounded-4 text-center mb-4">
      Chào bạn! Hãy <RouterLink to="/login" class="fw-bold">đăng nhập</RouterLink> để tham gia trò chuyện nhé.
    </div>

    <div v-for="(post, index) in posts" :key="index" class="card shadow border-0 mb-4 rounded-4 overflow-hidden">
      <div class="card-body p-0">
        <div class="p-3 d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <img :src="`https://ui-avatars.com/api/?name=${post.author}&background=random&color=fff`" 
                 class="rounded-circle me-2" width="45" height="45">
            <div>
              <h6 class="mb-0 fw-bold text-dark">{{ post.author }}</h6>
              <small class="text-muted" style="font-size: 0.8rem;">{{ post.date }}</small>
            </div>
          </div>

          <div v-if="currentUser && currentUser.name === post.author" class="dropdown">
            <button class="btn btn-link text-dark text-decoration-none" type="button" data-bs-toggle="dropdown">
              <span class="fs-4 fw-bold">...</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end border-0 shadow">
              <li><button class="dropdown-item" @click="startEdit(index)">✏️ Chỉnh sửa</button></li>
              <li><button class="dropdown-item text-danger" @click="deletePost(index)">🗑️ Xóa bài viết</button></li>
            </ul>
          </div>
        </div>

        <div class="px-3 pb-2">
          <p class="card-text fs-5 text-dark">{{ post.content }}</p>
        </div>
        
        <img v-if="post.image" :src="post.image" class="w-100" style="object-fit: cover; max-height: 500px;">

        <div class="p-3 bg-light border-top">
          <div v-if="post.comments.length > 0" class="mb-3">
            <div v-for="(comment, cIndex) in post.comments" :key="cIndex" class="d-flex mb-2 align-items-start">
              <img :src="`https://ui-avatars.com/api/?name=${comment.user}&background=random&color=fff`" 
                   class="rounded-circle me-2 mt-1" width="32" height="32">
              <div class="bg-white p-2 px-3 rounded-4 shadow-sm border">
                <span class="fw-bold small text-dark">{{ comment.user }}</span>
                <p class="mb-0 small text-secondary">{{ comment.text }}</p>
              </div>
            </div>
          </div>

          <div v-if="currentUser" class="d-flex mt-2">
            <img :src="`https://ui-avatars.com/api/?name=${currentUser.name}&background=random&color=fff`" 
                 class="rounded-circle me-2" width="35" height="35">
            <input v-model="post.newComment" 
                   @keyup.enter="addComment(index)"
                   type="text" class="form-control rounded-pill bg-white border shadow-sm" 
                   placeholder="Viết bình luận...">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentUser = ref(null);
const posts = ref([]);

// Form data (Dùng chung cho cả thêm và sửa)
const postForm = ref({ content: '', image: '' });

// Biến lưu vị trí bài viết đang sửa (-1 là không sửa gì cả)
const editingIndex = ref(-1);

onMounted(() => {
  currentUser.value = JSON.parse(localStorage.getItem('currentUser'));
  const storedPosts = localStorage.getItem('posts');
  posts.value = storedPosts ? JSON.parse(storedPosts) : [];
});

// === 1. XỬ LÝ ĐĂNG HOẶC LƯU BÀI ===
const handleSubmit = () => {
  if (!postForm.value.content) return alert("Nội dung không được để trống!");

  if (editingIndex.value === -1) {
    // TRƯỜNG HỢP THÊM MỚI
    const newPost = {
      content: postForm.value.content,
      image: postForm.value.image,
      author: currentUser.value.name,
      date: new Date().toLocaleString('vi-VN'),
      comments: [],
      newComment: ''
    };
    posts.value.unshift(newPost); // Thêm lên đầu danh sách
  } else {
    // TRƯỜNG HỢP CẬP NHẬT BÀI CŨ
    const index = editingIndex.value;
    posts.value[index].content = postForm.value.content;
    posts.value[index].image = postForm.value.image;
    // Giữ nguyên tác giả, ngày tháng, comments
    
    // Reset trạng thái về thêm mới
    editingIndex.value = -1;
  }

  savePosts();
  postForm.value = { content: '', image: '' }; // Xóa trắng form
};

// === 2. BẮT ĐẦU SỬA ===
const startEdit = (index) => {
  editingIndex.value = index; // Lưu vị trí đang sửa
  
  // Đổ dữ liệu cũ lên form
  postForm.value.content = posts.value[index].content;
  postForm.value.image = posts.value[index].image;
  
  // Cuộn trang lên đầu để người dùng thấy form
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// === 3. HỦY BỎ SỬA ===
const cancelEdit = () => {
  editingIndex.value = -1;
  postForm.value = { content: '', image: '' };
};

// === 4. XÓA BÀI ===
const deletePost = (index) => {
  if (confirm("Bạn có chắc chắn muốn xóa bài viết này không?")) {
    posts.value.splice(index, 1); // Xóa 1 phần tử tại vị trí index
    savePosts();
  }
};

// === 5. BÌNH LUẬN (Giữ nguyên) ===
const addComment = (index) => {
  const post = posts.value[index];
  if (!post.newComment) return;

  post.comments.push({
    user: currentUser.value.name,
    text: post.newComment
  });
  
  post.newComment = '';
  savePosts();
};

const savePosts = () => {
  localStorage.setItem('posts', JSON.stringify(posts.value));
};
</script>