<template>
  <div class="container">
    <LoginComponent v-if="!isLoggedIn" @loggedIn="handleLoginSuccess" />

    <CommentComponent v-else :username="loggedInUser" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginComponent from './LoginComponent.vue';
import CommentComponent from './CommentComponent.vue';

const isLoggedIn = ref(false);
const loggedInUser = ref('');

// Hàm xử lý sự kiện khi con (LoginComponent) báo thành công
function handleLoginSuccess(user) {
  loggedInUser.value = user;
  isLoggedIn.value = true;
}
</script>