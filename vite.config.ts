import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    {
      name: 'copy-redirects',
      generateBundle() {
        const redirectsPath = path.resolve(__dirname, 'public/_redirects')
        if (fs.existsSync(redirectsPath)) {
          const content = fs.readFileSync(redirectsPath, 'utf-8')
          this.emitFile({
            type: 'asset',
            fileName: '_redirects',
            source: content,
          })
        }
      },
    },
  ],
})
