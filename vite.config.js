import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/Wallet-Currency-Converter",
  build: {
    chunkSizeWarningLimit: 3000,
  },
})
