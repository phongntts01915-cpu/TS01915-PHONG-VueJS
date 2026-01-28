<template>
  <div class="container mt-4">
    <h2>Danh sách bài viết</h2>
    <div class="list-group">
      <router-link :to="{ name: 'BlogPost', params: { id: 1 } }" class="list-group-item list-group-item-action">
        Bài viết số 1 (Click xem chi tiết)
      </router-link>
      <router-link :to="{ name: 'BlogPost', params: { id: 2 } }" class="list-group-item list-group-item-action">
        Bài viết số 2 (Click xem chi tiết)
      </router-link>
      <router-link :to="{ name: 'BlogPost', params: { id: 3 } }" class="list-group-item list-group-item-action">
        Bài viết số 3 (Click xem chi tiết)
      </router-link>
    </div>
  </div>
</template>