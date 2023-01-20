import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  server: {
    port: 8000,
  },
  plugins: [vue(), svgLoader()]
})
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
