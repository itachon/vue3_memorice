import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  //carga todos los archivos que tengan la extensión vue
  build: {
    watch: {
      include: 'src/**'
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      //carga todas las rutas dinámicamente dentro de una carpeta en espsecifico
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
