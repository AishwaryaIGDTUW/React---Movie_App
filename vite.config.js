// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/React---Movie_App/', // 👈 this is your exact repo name
  plugins: [react(), tailwindcss()],
})
