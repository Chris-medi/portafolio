import { defineConfig, AliasOptions } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import eslint from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), vue(), eslint()],
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
