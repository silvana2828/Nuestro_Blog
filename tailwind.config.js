/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'havelock-blue-50': '#eff7ff',
        'havelock-blue-100': '#dcecfd',
        'havelock-blue-200': '#c1defc',
        'havelock-blue-300': '#96cafa',
        'havelock-blue-400': '#64adf6',
        'havelock-blue-500': '#5096f2',
        'havelock-blue-600': '#2a6fe6',
        'havelock-blue-700': '#2259d3',
        'havelock-blue-800': '#2249ab',
        'havelock-blue-900': '#214087',
        'havelock-blue-950': '#192952',
      }
    },
  },
  plugins: [],
}

