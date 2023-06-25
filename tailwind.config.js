/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        "center-top": "center top",
      },
      maxWidth: {
        h2: "412px",
      },
      fontSize: {
        h1: ["76px", "92px"],
        h2: ["76px", "92px"],
        h3: ["34px", "41px"],
        h4: ["22px", "27px"],
        h5: ["18px", "20px"],
      },
      colors: {
        "accent-blue": "#0D99FF",
      },
      boxShadow: {
        "3xl": "1px 1px 2px #d9d9d9, -1px -1px 2px #ffffff",
        "4xl": "3px 3px 6px #d9d9d9, -3px -3px 6px #ffffff",
        "5xl": "0 25px 20px -20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 0, 0.06);",
      },
    },
  },
  plugins: [],
};
