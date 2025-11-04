import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: '/', // เปลี่ยนเป็น '/' หรือ '/ชื่อ-repo/' ตามต้องการ
  base: '/react-resume/', // ถ้า deploy GitHub Pages เปลี่ยนเป็น '/ชื่อ-repo/'
});
