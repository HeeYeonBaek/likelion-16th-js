// 모듈 기본 내보내기
import { defineConfig } from 'vite'

export default defineConfig({
  // Vite 설정
  server: {
    port: 3000
  },

  preview: {
    port: 3002
  }
})