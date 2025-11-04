import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-resume/', // ถ้า deploy GitHub Pages เปลี่ยนเป็น '/ชื่อ-repo/'
});
