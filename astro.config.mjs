// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact'

export default defineConfig({
  output: 'static',
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
        },
      },
    },
  },
  integrations: [preact()]
});