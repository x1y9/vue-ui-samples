import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
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
