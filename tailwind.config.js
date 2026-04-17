/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'cv-navy':   '#0a192f',
        'cv-card':   '#112240',
        'cv-deep':   '#1d3461',
        'cv-teal':   '#64ffda',
        'cv-bright': '#e6f1ff',
        'cv-text':   '#ccd6f6',
        'cv-muted':  '#8892b0',
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'teal-sm': '0 4px 16px rgba(100,255,218,0.06)',
        'teal-md': '0 8px 28px rgba(100,255,218,0.08)',
        'teal-lg': '0 12px 40px rgba(100,255,218,0.12)',
      },
      animation: {
        'fade-up':   'fadeUp 0.8s ease both',
        'fade-up-1': 'fadeUp 0.8s ease 0.15s both',
        'fade-up-2': 'fadeUp 0.8s ease 0.30s both',
        'fade-up-3': 'fadeUp 0.8s ease 0.45s both',
        'fade-up-4': 'fadeUp 0.8s ease 0.60s both',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
      },
    },
  },
  plugins: [],
};
