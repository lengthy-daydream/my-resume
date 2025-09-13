import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // 根据部署平台动态设置base路径
  // GitHub Pages: '/my-resume/'
  // Vercel/Netlify: '/'
  base: process.env.DEPLOY_PLATFORM === 'github' ? '/my-resume/' : '/',
  plugins: [
    react(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
}) 