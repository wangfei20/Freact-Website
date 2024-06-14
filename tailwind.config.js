/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(var(--shadow-rgb))',
        },
        '.text-shadow-md': {
          textShadow: '4px 4px 6px rgba(var(--shadow-rgb))',
        },
        '.text-shadow-lg': {
          textShadow: '6px 6px 8px rgba(var(--shadow-rgb))',
        },
        '.text-shadow-xl': {
          textShadow: '8px 8px 10px rgba(var(--shadow-rgb))',
        },
        '.text-shadow-2xl': {
          textShadow: '10px 10px 12px rgba(var(--shadow-rgb))',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
};
