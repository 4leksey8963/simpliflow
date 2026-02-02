import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/simpliflow/',
  plugins: [react({
    jsxRuntime: 'automatic'
  })],
  build: {
    outDir: 'dist'
  }
});