/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#eaddca',
        deep: '#024668',
        teal: '#06859d',
        lighteal: '#b4d5d8',
        terracotta: '#bf704c',
      },
      fontFamily: {
        display: ['Georgia', 'ui-serif', 'serif'],
        body: ['ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
    },
  },
  plugins: [],
};
