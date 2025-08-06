import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/portov2/', // Nama repo kamu
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
