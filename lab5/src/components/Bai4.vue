<template>
  <div class="bai4-container">
    <h2 class="text-center text-primary mb-4">Bài 4: Ứng dụng Blog</h2>
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CreatePost from './CreatePost.vue';
import PostList from './PostList.vue';

const posts = ref([
  {
    title: 'Bài viết mẫu 1',
    author: 'Admin',
    content: 'Nội dung bài viết mẫu...',
    backgroundColor: '#f8f9fa',
    textColor: '#000'
  }
]);

function addPost(post) {
  posts.value.push(post);
}
</script>