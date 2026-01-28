<template>
  <div class="row">
    <h2 class="text-center text-danger mb-4">Quản lý học sinh (CRUD)</h2>
    
    <div class="col-md-4">
      <div class="card p-3 mb-3">
        <h4 class="text-success">{{ isEditing ? 'Cập nhật học sinh' : 'Thêm học sinh' }}</h4>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label>Họ tên:</label>
            <input type="text" class="form-control" v-model="student.name" required />
          </div>
          <div class="mb-3">
            <label>Điểm:</label>
            <input type="number" max="10" min="0" class="form-control" v-model="student.score" required />
          </div>
          <div class="mb-3">
            <label>Ngày sinh:</label>
            <input type="date" class="form-control" v-model="student.dob" required />
          </div>
          <button type="submit" class="btn" :class="isEditing ? 'btn-primary' : 'btn-success'">
            {{ isEditing ? 'Cập nhật' : 'Thêm' }}
          </button>
          <button type="button" class="btn btn-secondary ms-2" v-if="isEditing" @click="resetForm">
            Hủy
          </button>
        </form>
      </div>
    </div>

    <div class="col-md-8">
      <div class="card p-3">
        <h4>Danh sách học sinh</h4>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Họ và tên</th>
              <th>Điểm</th>
              <th>Ngày sinh</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(stu, index) in students" :key="index">
              <td>{{ stu.name }}</td>
              <td>{{ stu.score }}</td>
              <td>{{ stu.dob }}</td>
              <td>
                <button class="btn btn-warning btn-sm me-2" @click="editStudent(index)">Sửa</button>
                <button class="btn btn-danger btn-sm" @click="deleteStudent(index)">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Dữ liệu mẫu ban đầu [cite: 721-724]
const students = ref([
  { name: 'Nguyễn Thanh Phong', score: 8, dob: '2008-03-13' },
  { name: 'Ngô Thị Như Quỳnh', score: 9, dob: '2008-11-04' }
]);

// Biến quản lý trạng thái form [cite: 726-732]
const student = ref({ name: '', score: null, dob: '' });
const isEditing = ref(false);
const editingIndex = ref(null);

// Hàm xử lý Thêm hoặc Cập nhật [cite: 737-750]
function submitForm() {
  if (isEditing.value) {
    // Cập nhật: Ghi đè dữ liệu mới vào vị trí index đang sửa
    students.value[editingIndex.value] = { ...student.value };
    isEditing.value = false;
    editingIndex.value = null;
  } else {
    // Thêm mới: Push vào mảng
    students.value.push({ ...student.value });
  }
  resetForm(); // Xóa trắng form sau khi xong
}

// Hàm chuẩn bị dữ liệu để Sửa [cite: 751-755]
function editStudent(index) {
  student.value = { ...students.value[index] }; // Copy dữ liệu ra form
  isEditing.value = true;
  editingIndex.value = index;
}

// Hàm Xóa [cite: 756-758]
function deleteStudent(index) {
  if (confirm('Bạn có chắc chắn muốn xóa không?')) {
    students.value.splice(index, 1);
  }
}

// Hàm Reset form về ban đầu [cite: 759-764]
function resetForm() {
  student.value = { name: '', score: null, dob: '' };
  isEditing.value = false;
  editingIndex.value = null;
}
</script>