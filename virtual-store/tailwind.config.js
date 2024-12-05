/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Si estás usando el archivo index.html estándar
    "./src/**/*.{js,jsx,ts,tsx}", // Para asegurarte de que Tailwind funcione en todos tus componentes de React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
