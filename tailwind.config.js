/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        circularLightXl:
          "repeating-radial-gradient(rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.4) 5px, rgba(0,0,0,0.1) 60px)",
        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.4) 5px, rgba(0,0,0,0.1) 40px)",
        circularLightDefault:
          "repeating-radial-gradient(rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.4) 5px, rgba(0,0,0,0.1) 30px)",
        circularDarkXl:
          "repeating-radial-gradient(rgba(255, 255, 255, 0.1) 2px,rgba(255, 255, 255, 0.4) 5px,rgba(255, 255, 255, 0.1) 60px)",
        circularDarkLg:
          "repeating-radial-gradient(rgba(255, 255, 255, 0.1) 2px,rgba(255, 255, 255, 0.4) 5px,rgba(255, 255, 255, 0.1) 40px)",
        circularDarkDefault:
          "repeating-radial-gradient(rgba(255, 255, 255, 0.1) 2px,rgba(255, 255, 255, 0.4) 5px,rgba(255, 255, 255, 0.1) 30px)",
      },
    },
  },
  plugins: [],
};
