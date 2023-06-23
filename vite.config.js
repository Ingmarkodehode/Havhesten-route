import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://ingmarkodehode.github.io/Havhesten-route/",
  plugins: [react()],
})
