// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/services.scss" as *;`,
        },
      },
    },
  },
});
