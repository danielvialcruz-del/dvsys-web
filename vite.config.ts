import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'  // ← nueva línea

export default defineConfig({
  plugins: [react(), tailwindcss()],  // ← agrega tailwindcss()
})