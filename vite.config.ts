import { defineConfig, AliasOptions } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import biomePlugin from 'vite-plugin-biome';
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./"),
      "@src": resolve(__dirname, "./src"),
      "@img": resolve(__dirname, "./src/assets"),
      "@interfaces": resolve(__dirname, "./src/interfaces"),
      "@services": resolve(__dirname, "./src/services"),
      "@components": resolve(__dirname, "./src/views/components"),
    } as AliasOptions,
  },
  base: './',
  optimizeDeps: {
    include: ['vue', '@vueuse/core', '@headlessui/vue', '@heroicons/vue'],
    exclude: ['@vueuse/motion']
  },
  plugins: [
    vue(),
    tailwindcss(),
    biomePlugin({
      mode: 'format',
      files: './src/',
      applyFixes: true,
    })
  ],
});
