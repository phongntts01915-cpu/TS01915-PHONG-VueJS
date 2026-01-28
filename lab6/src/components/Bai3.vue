<template>
  <div class="container">
    <h1 class="text-center text-primary mb-4">Kiến thức sức khỏe cộng đồng</h1>
    <div class="row">
      <div class="col-sm-4 mb-4" v-for="(item, index) in items" :key="index">
        <div class="card h-100">
          <img :src="item.image" class="card-img-top" alt="Hình ảnh" style="height: 200px; object-fit: cover;" />
          <div class="card-body">
            <h3 class="card-title h5 fw-bold">{{ item.title }}</h3>
            <p class="card-text">{{ item.content }}</p>
            <button class="btn btn-info text-white">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 1. IMPORT HÌNH ẢNH TỪ THƯ MỤC ASSETS
// (Lưu ý: Bạn phải tạo thư mục src/assets/images và bỏ ảnh vào đó trước)
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

// 2. GÁN BIẾN ẢNH VÀO MẢNG DỮ LIỆU
const items = [
  { 
    title: '8 loại rau củ quả giàu canxi', 
    content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi...', 
    image: img1 // Sử dụng biến import img1
  },
  { 
    title: 'Các loại gia vị tốt cho sức khỏe', 
    content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác...',
    image: img2 // Sử dụng biến import img2
  },
  { 
    title: '9 loại đậu bổ dưỡng nên dùng nhiều', 
    content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cũng nhiều vitamin...', 
    image: img3 // Sử dụng biến import img3
  }
];
</script>