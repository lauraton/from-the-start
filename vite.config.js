import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Misma configuración que en el apunte de Tailwind v4 (Paso 3)
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
