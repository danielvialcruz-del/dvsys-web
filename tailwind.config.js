/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"],        // ← tema blanco clásico (exacto a Windows)
    darkTheme: "light",       // ← fuerza siempre tema claro
    base: true,
    styled: true,
    utils: true,
  },
}