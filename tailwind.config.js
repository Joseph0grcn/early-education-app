/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        rounded: ['Nunito', 'Quicksand', 'Comic Neue', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 40px rgba(64, 93, 143, 0.16)',
      },
    },
  },
  plugins: [],
};
