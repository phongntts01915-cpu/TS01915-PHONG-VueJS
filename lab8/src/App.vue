<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div class="container">
        <a class="navbar-brand" href="#">Lab 8 MyBlog</a>
        <div class="navbar-nav">
          <router-link class="nav-link" :to="{ name: 'Home' }">Trang chủ</router-link>
          <router-link class="nav-link" :to="{ name: 'BlogList' }">Blog</router-link>
          <router-link class="nav-link" :to="{ name: 'UserProfile' }">Profile</router-link>
          <router-link class="nav-link" :to="{ name: 'Dashboard' }">Dashboard (Cần Login)</router-link>
          <router-link class="nav-link" :to="{ name: 'Login' }">Login</router-link>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style>
/* Active link style */
.router-link-active {
  font-weight: bold;
  color: #ffc107 !important;
}
</style>