/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './main.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7B9559',
        secondary: '#7B9559',
        'cream-bg': '#F2EAE4',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'pulse-scale': 'pulse-scale 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'pulse-scale': {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.05)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(75, 85, 99)',
          },
        },
      },
    },
  },
  plugins: [],
}