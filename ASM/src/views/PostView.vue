<template>
  <div class="container mt-4">
    <h3>📝 Đăng bài viết</h3>

    <!-- ===== ĐĂNG BÀI ===== -->
    <form @submit.prevent="addPost" class="card p-3 mb-4">
      <input
        v-model="newPost.title"
        class="form-control mb-2"
        placeholder="Tiêu đề"
        required
      />

      <textarea
        v-model="newPost.content"
        class="form-control mb-2"
        placeholder="Nội dung"
        required
      ></textarea>

      <!-- UPLOAD ẢNH -->
      <input
        type="file"
        class="form-control mb-2"
        multiple
        accept="image/*"
        @change="handleImageUpload"
      />

      <!-- PREVIEW ẢNH -->
      <div class="d-flex flex-wrap gap-2 mb-2">
        <img
          v-for="(img, index) in newPost.images"
          :key="index"
          :src="img"
          style="width: 100px; height: 100px; object-fit: cover"
          class="rounded border"
        />
      </div>

      <button class="btn btn-primary">Đăng bài</button>
    </form>

    <!-- ===== DANH SÁCH BÀI ===== -->
    <div v-for="post in posts" :key="post.id" class="card mb-3">
      <div class="card-body">
        <h5>{{ post.title }}</h5>
        <p>{{ post.content }}</p>

        <!-- HIỂN THỊ ẢNH -->
        <div class="d-flex flex-wrap gap-2 mb-2">
          <img
            v-for="(img, index) in post.images"
            :key="index"
            :src="img"
            style="width: 150px; height: 150px; object-fit: cover"
            class="rounded border"
          />
        </div>

        <button
          class="btn btn-danger btn-sm mb-2"
          @click="removePost(post.id)"
        >
          Xóa bài
        </button>

        <!-- BÌNH LUẬN -->
        <h6>Bình luận</h6>
        <ul class="list-group mb-2">
          <li
            v-for="(cmt, index) in post.comments"
            :key="index"
            class="list-group-item"
          >
            {{ cmt }}
          </li>
        </ul>

        <form @submit.prevent="addComment(post)">
          <input
            v-model="post.newComment"
            class="form-control mb-2"
            placeholder="Nhập bình luận..."
          />
          <button class="btn btn-secondary btn-sm">Gửi</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])

const newPost = ref({
  title: '',
  content: '',
  images: []
})

onMounted(() => {
  const saved = localStorage.getItem('posts')
  if (saved) posts.value = JSON.parse(saved)
})

function save() {
  localStorage.setItem('posts', JSON.stringify(posts.value))
}

// ===== UPLOAD ẢNH =====
function handleImageUpload(e) {
  const files = e.target.files
  for (let file of files) {
    const reader = new FileReader()
    reader.onload = () => {
      newPost.value.images.push(reader.result)
    }
    reader.readAsDataURL(file)
  }
}

// ===== ĐĂNG BÀI =====
function addPost() {
posts.value.unshift({
    id: Date.now(),
    title: newPost.value.title,
    content: newPost.value.content,
    images: newPost.value.images,
    comments: [],
    newComment: ''
  })

  newPost.value = {
    title: '',
    content: '',
    images: []
  }

  save()
}

// ===== BÌNH LUẬN =====
function addComment(post) {
  if (!post.newComment) return
  post.comments.push(post.newComment)
  post.newComment = ''
  save()
}

function removePost(id) {
  posts.value = posts.value.filter(p => p.id !== id)
  save()
}
</script>
