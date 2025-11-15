import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Frontend_para_la_guia_de_ingweb/",
  plugins: [react()],
})
