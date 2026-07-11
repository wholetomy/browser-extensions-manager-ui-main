import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
	  react(), 
	  tailwindcss()
  ],
  base: "/browser-extensions-manager-ui-main/",
  server: {
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    },
  },
}) 