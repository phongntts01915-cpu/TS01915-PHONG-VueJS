<template>
  <div>
    <h3 class="text-info">Danh sách bài viết</h3>
    <div 
      v-for="(post, index) in posts" 
      :key="index" 
      :class="{ 'highlighted': post.title.length > 20 }"
      :style="{ backgroundColor: post.backgroundColor, color: post.textColor }"
      class="post"
    >
      <h4 class="text-success" :style="{ color: post.textColor ? post.textColor + ' !important' : '' }">
        {{ post.title }}
      </h4>
      <h5 class="text-danger" :style="{ color: post.textColor ? '#eee !important' : '' }">
        {{ post.author }}
      </h5>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.post {
  padding: 20px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 10px;
}

/* Class binding: Nếu tiêu đề dài > 20 ký tự thì viền sẽ đậm hơn */
.highlighted {
  border: 3px solid goldenrod;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
</style>