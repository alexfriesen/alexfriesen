import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgPlugin from 'vite-plugin-vue-svg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === 'retro-scene'
        }
      }
    }),
    svgPlugin(),
  ],
})
