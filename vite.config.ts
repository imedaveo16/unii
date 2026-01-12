import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // التعديل الأساسي: تم تغيير المسار ليعمل على الهاتف (APK) بدلاً من الويب فقط
  base: './', 
  build: {
    outDir: 'dist',
    // لضمان عمل الأصول (images/fonts) بشكل صحيح داخل أندرويد
    assetsDir: 'assets',
  },
});
