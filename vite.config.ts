import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/LabourLink/', // Set the correct base for GitHub Pages
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // Ensure correct entry point
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});
