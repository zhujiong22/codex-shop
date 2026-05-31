import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "./",
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: "src/main.js",
      output: {
        assetFileNames: "assets/[name][extname]",
        chunkFileNames: "assets/[name].js",
        entryFileNames: "assets/app.js",
        format: "iife",
        name: "HeguangApp",
      },
    },
  },
});
