<template>
  <Navbar />
  <LoginForm />
  <RegisterForm />
  <PostList />
  <PostDetail />
  <Profile />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'
import PostList from './components/PostList.vue'
import PostDetail from './components/PostDetail.vue'
import Profile from './components/Profile.vue'
</script>
