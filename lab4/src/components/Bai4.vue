<template>
  <div class="container">
    <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>
    <div class="row">
      <div class="col-sm-4 mb-3">
        <div class="card h-100">
          <img :src="items[0].image" class="card-img-top" alt="Hình ảnh" style="height: 200px; object-fit: cover;" />
          <div class="card-body">
            <h3 class="card-title h5 fw-bold">{{ items[0].title }}</h3>
            <p class="card-text">{{ items[0].content }}</p>
            <button class="btn btn-info text-white" style="color: yellow;">Xem chi tiết</button>
          </div>
        </div>
      </div>

      <div class="col-sm-4 mb-3">
        <div class="card h-100">
          <img :src="items[1].image" class="card-img-top" alt="Hình ảnh" style="height: 200px; object-fit: cover;" />
          <div class="card-body">
            <h3 class="card-title h5 fw-bold">{{ items[1].title }}</h3>
            <p class="card-text">{{ items[1].content }}</p>
            <button class="btn btn-info text-white">Xem chi tiết</button>
          </div>
        </div>
      </div>

      <div class="col-sm-4 mb-3">
        <div class="card h-100">
          <img :src="items[2].image" class="card-img-top" alt="Hình ảnh" style="height: 200px; object-fit: cover;" />
          <div class="card-body">
            <h3 class="card-title h5 fw-bold">{{ items[2].title }}</h3>
            <p class="card-text">{{ items[2].content }}</p>
            <button class="btn btn-info text-white">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Bạn nhớ tải 3 ảnh về đặt tên img1.jpg, img2.jpg, img3.jpg bỏ vào thư mục src/assets/images nhé
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

const items = [
  { 
    title: '8 loại rau củ quả giàu canxi', 
    content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi...', 
    image: img1 
  },
  { 
    title: 'Các loại gia vị tốt cho sức khỏe', 
    content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác. Với một lượng nhỏ các món ăn đã thêm hương thơm và vị hấp dẫn...',
    image: img2
  },
  { 
    title: '9 loại đậu bổ dưỡng nên dùng nhiều', 
    content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cũng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu, tốt cho tim...', 
    image: img3
  }
];
</script>