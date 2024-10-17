import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
export default defineConfig({
    base:'./',
    server: {
        host: 'localhost',
        port: 8080,
        open: true,
        proxy: {
            '/api': 'http://api-driver.marsview.cc'
        }
    },
    resolve: {
        // 添加路径别名
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    plugins: [react()]
})