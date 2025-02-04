import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
    watch: {
      usePolling: true,
      ignored: ['!**/node_modules/**'],
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      client: path.resolve(__dirname, './client'),
    },
  },
})
