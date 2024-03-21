/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "havelock-blue-50": "#eff7ff",
        "havelock-blue-100": "#dcecfd",
        "havelock-blue-200": "#c1defc",
        "havelock-blue-300": "#96cafa",
        "havelock-blue-400": "#64adf6",
        "havelock-blue-500": "#5096f2",
        "havelock-blue-600": "#2a6fe6",
        "havelock-blue-700": "#2259d3",
        "havelock-blue-800": "#2249ab",
        "havelock-blue-900": "#214087",
        "havelock-blue-950": "#192952",
        "jade-50": "hsl(152, 88%, 97%)",
        "jade-100": "hsl(155, 95%, 93%)",
        "jade-200": "hsl(154, 87%, 85%)",
        "jade-300": "hsl(154, 84%, 73%)",
        "jade-400": "hsl(154, 76%, 58%)",
        "jade-500": "hsl(155, 77%, 45%)",
        "jade-600": "hsl(155, 84%, 36%)",
        "jade-700": "hsl(155, 79%, 29%)",
        "jade-800": "hsl(155, 71%, 24%)",
        "jade-900": "hsl(156, 67%, 20%)",
        "jade-950": "hsl(157, 88%, 10%)",
      },
    },
  },
  plugins: [],
};

