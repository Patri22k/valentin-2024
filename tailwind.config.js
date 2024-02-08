/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'logo-anim': 'logo-anim 4s ease-in-out infinite',
        'fade-in-top': 'fade-in-top 100ms ease-in-out',
        'fade-in-top-tiny': 'fade-in-top-tiny 50ms ease-in-out',
        'fade-in-bottom': 'fade-in-bottom 100ms ease-in-out',
        'fade-in-left': 'fade-in-left 100ms ease-in-out',
        'fade-in-right': 'fade-in-right 100ms ease-in-out',
        'fade-out-top': 'fade-out-top 100ms ease-in-out',
        'background': 'background 3s ease infinite',
      },
      keyframes: {
        'logo-anim': {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-20%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        'fade-in-top': {
          '0%': { opacity: 0, transform: 'translateY(-50%)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' },
        },
        'fade-in-top-tiny': {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' },
        },
        'fade-in-bottom': {
          '0%': { opacity: 0, transform: 'translateY(50%)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' },
        },
        'fade-in-left': {
          '0%': { opacity: 0, transform: 'translateX(-50%)' },
          '100%': { opacity: 1, transform: 'translateX(0%)' },
        },
        'fade-in-right': {
          '0%': { opacity: 0, transform: 'translateX(50%)' },
          '100%': { opacity: 1, transform: 'translateX(0%)' },
        },
        'fade-out-top': {
          '0%': { opacity: 1, transform: 'translateY(0%)' },
          '100%': { opacity: 0, transform: 'translateY(-50%)' },
        },
        'background': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}

