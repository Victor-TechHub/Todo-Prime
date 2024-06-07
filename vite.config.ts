import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
