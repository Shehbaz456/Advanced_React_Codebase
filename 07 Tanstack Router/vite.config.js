import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'



// https://vite.dev/config/
export default defineConfig({
   // Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
  plugins: [TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),react()],
})
