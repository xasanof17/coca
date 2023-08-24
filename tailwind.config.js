/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradientBg: "linear-gradient(219deg, #FFAB18 0%, #FF2197 100%))",
      },
      colors: {
        primary: "#19191C",
        secondary: "#FF5C00",
        grey: "#828487",
        lightGrey: "#E4E4E4",
      },
      fontSize: {
        base: ["16px", "24px"],
        xs: ["14px", "19.6px"],
        lg: ["20px", "30px"],
        xl: ["28px", "42px"],
      },
    },
  },
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("tailwind-scrollbar"),
  ],
};
