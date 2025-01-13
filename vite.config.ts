import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import {visualizer} from 'rollup-plugin-visualizer'
import path from 'node:path'


export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ["src/components/ui"],
      resolvers: [
        IconsResolver(),
      ],  
    }),
    Icons(),
    visualizer({
      open: false, // 自动打开分析页面
    }),
  ],
  css:{
    postcss:{
      plugins: [tailwindcss(), autoprefixer()]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})
