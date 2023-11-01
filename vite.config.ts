/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  preview: {
    port: 4173,
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTest.ts",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
});
