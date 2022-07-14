/*eslint-disable*/
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        // vite-plugin-require-transform
        vue({
            reactivityTransform: true
        }),
        Pages(),
        // Vue Composition API/Vue Use 等自动引入
        AutoImport({
            imports: [
                'vue',
                // 'vue/macros',
                'vue-router'
                // '@vueuse/core',
            ],
            dts: true,
            dirs: ['src/store'],
            vueTemplate: true
        }),

        // 组件按需自动导入
        Components({
            resolvers: [ElementPlusResolver()],
            dts: true
        })
    ],
    resolve: {
        alias: {
            '@': `${path.resolve(__dirname, 'src')}/`
        }
    },
    build:{
        target:'es2015'
    },
    base: './', // 打包路径
    server: {
        port: 8080,
        open: true, // 是否自动打开浏览器
        cors: true // 允许跨域
        // 跨域配置
        /* proxy: {
       '^/api': {
         target: 'http://***.***.com',
         changeOrigin: true,
         rewrite: (path) => path.replace(/^\/api/, '')
       },
       //  websockets or socket.io
       '/socket.io': {
         target: 'ws://localhost:8080',
         ws: true
       }
     }
     */
    }
})
