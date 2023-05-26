import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: env.VITE_BASE_PATH,
    plugins: [
      vue()
    ],
    build: {
      commonjsOptions: {
        transformMixedEsModules: true
      },
      rollupOptions: {
        external: ['@videojs-player/vue'],
        output: { globals: { vue: 'Vue' } }
      }
    }
  }
})
