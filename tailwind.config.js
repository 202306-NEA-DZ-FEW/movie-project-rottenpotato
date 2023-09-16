/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      mr: "15px", //main radius
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "50px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        YellowPotato: "#F8B319",
        LightGray: "rgba(249, 249, 249, 0.2)",
      },
      fontFamily: {
        lucky: ["Luckiest Guy", "cursive"],
        lato: ["Lato", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        hs: "0px 10px 20px 40px rgba(0, 0, 0, 1)" /*hover shadow*/,
      },
    },
  },
  plugins: [],
}
