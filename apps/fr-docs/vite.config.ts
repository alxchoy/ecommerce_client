import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  server: {
    port: 4000,
  },
  build: {
    target: "es2022",
    rollupOptions: {
      input: "src/spa.ts",
      preserveEntrySignatures: "exports-only",
      output: {
        exports: "auto",
        format: "amd",
        entryFileNames: "spa.js",
      },
    },
  },
  preview: {
    port: 4001,
  },
  plugins: [react()],
});
