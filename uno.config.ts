import { defineConfig, presetUno, presetAttributify, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
  ],
  theme: {
    colors: {
      primary: '#1976d2',
      secondary: '#dc004e',
    },
  },
  shortcuts: {
    'btn': 'px-4 py-2 rounded inline-block bg-primary text-white cursor-pointer hover:bg-blue-600 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    'card': 'bg-white rounded-lg shadow-lg p-6 mb-6',
  },
  // 排除对按钮元素的重置，避免与 Ant Design 冲突
  blocklist: [
    // 可以在这里添加要排除的类名
  ],
}) 