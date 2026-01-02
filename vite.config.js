import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [react(),  viteCompression({
      algorithm: 'gzip', // atau 'brotliCompress' kalau mau Brotli
      ext: '.gz',
      threshold: 1024, // cuma file >1kb yang di-compress
      deleteOriginFile: false // kalau mau hapus file asli, set true
    })],
  base: '/', // Nama repo kamu
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
