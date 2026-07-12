/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Kaushan Script', 'cursive'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(15, 23, 42, 0.12)',
        glow: '0 30px 90px rgba(51, 159, 208, 0.25)',
      },
      backgroundImage: {
        'radial-soft': 'radial-gradient(circle at top left, rgba(252,211,6,.32), transparent 34%), radial-gradient(circle at bottom right, rgba(51,159,208,.27), transparent 38%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSoft: 'pulseSoft 2.8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '.82' },
        },
      },
    },
  },
  plugins: [],
};
