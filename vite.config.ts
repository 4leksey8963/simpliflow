import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/simpliflow/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});