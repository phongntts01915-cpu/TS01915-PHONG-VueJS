<template>
  <div class="container" style="max-width: 800px;">
    
    <div v-if="currentUser" class="card shadow-sm border-0 mb-4 rounded-4">
      <div class="card-body p-4">
        <div class="d-flex mb-3">
          <img :src="`https://ui-avatars.com/api/?name=${currentUser.name}&background=random&color=fff`" 
               class="rounded-circle me-3" width="50" height="50">
          <textarea v-model="newPost.content" class="form-control border-0 bg-light rounded-pill px-4" 
                    rows="1" placeholder="Bạn đang nghĩ gì thế?" 
                    style="resize: none; line-height: 2.5;"
                    @focus="$event.target.rows = 3; $event.target.classList.remove('rounded-pill'); $event.target.classList.add('rounded-3')"
          ></textarea>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <input v-model="newPost.image" class="form-control form-control-sm w-50" placeholder="Dán link ảnh (URL) vào đây...">
          <button @click="addPost" class="btn btn-primary rounded-pill px-4 fw-bold">
            Đăng bài
          </button>
        </div>
      </div>
    </div>
    
    <div v-else class="alert alert-primary shadow-sm border-0 rounded-4 text-center mb-4">
      Chào bạn! Hãy <RouterLink to="/login" class="fw-bold">đăng nhập</RouterLink> để tham gia trò chuyện nhé.
    </div>

    <div v-for="(post, index) in posts" :key="index" class="card shadow border-0 mb-4 rounded-4 overflow-hidden">
      <div class="card-body p-0">
        <div class="p-3 d-flex align-items-center">
          <img :src="`https://ui-avatars.com/api/?name=${post.author}&background=random&color=fff`" 
               class="rounded-circle me-2" width="45" height="45">
          <div>
            <h6 class="mb-0 fw-bold text-dark">{{ post.author }}</h6>
            <small class="text-muted" style="font-size: 0.8rem;">{{ post.date }}</small>
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
const newPost = ref({ content: '', image: '' });

onMounted(() => {
  currentUser.value = JSON.parse(localStorage.getItem('currentUser'));
  const storedPosts = localStorage.getItem('posts');
  posts.value = storedPosts ? JSON.parse(storedPosts) : [];
});

const addPost = () => {
  if (!newPost.value.content) return alert("Viết gì đó đi bạn ơi!");

  const post = {
    content: newPost.value.content,
    image: newPost.value.image,
    author: currentUser.value.name,
    date: new Date().toLocaleString('vi-VN'),
    comments: [],
    newComment: ''
  };

  posts.value.unshift(post);
  savePosts();
  newPost.value = { content: '', image: '' };
};

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