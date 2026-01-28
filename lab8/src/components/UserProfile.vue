<template>
  <div class="container mt-4">
    <h2>Hồ sơ người dùng</h2>
    <div class="row">
      <div class="col-md-3">
        <div class="list-group">
          <router-link :to="{ name: 'UserProfileInfo' }" class="list-group-item">Thông tin cá nhân</router-link>
          <router-link :to="{ name: 'UserProfileSettings' }" class="list-group-item">Cài đặt</router-link>
        </div>
      </div>
      <div class="col-md-9 border p-3 rounded">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>