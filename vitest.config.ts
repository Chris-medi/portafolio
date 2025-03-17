import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { AliasOptions } from "vite";
import tsconfigPaths from 'vite-tsconfig-paths'


export default defineConfig({
  plugins: [vue(),tsconfigPaths()],
  test: {
    testTimeout: 10000,
    environment: "happy-dom",
  },
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
});
