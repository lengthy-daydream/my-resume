import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // 为GitHub Pages设置base路径
  // 如果部署到 https://username.github.io/repository-name/，使用 '/repository-name/'
  // 如果部署到 https://username.github.io/，使用 '/'
  base: '/my-resume/',
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