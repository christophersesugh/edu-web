/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-1": "url('/assets/images/hero-shape-2.png')",
        about: "url('/assets/images/about-shape-4.svg')",
      },
    },
  },
  plugins: [],
};
