import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [
    vue(),
  ],
  server: {
    cors: {
      origin: '*'
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@briolink/ui-kit',
    },
    rollupOptions: {
      // input: 'src/main.ts',
      external: ['vue'],
      // preserveEntrySignatures: 'allow-extension',
      output: {
        // format: 'system',
        globals: {
          vue: 'Vue'
        }
      },
    },
  }
})
