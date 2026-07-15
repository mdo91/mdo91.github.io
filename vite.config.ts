import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        termsOfUse: resolve(__dirname, 'terms-of-use.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy.html'),
        support: resolve(__dirname, 'support.html'),
      },
    },
  },
});
