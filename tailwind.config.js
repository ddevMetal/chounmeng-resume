/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Token names kept from the original design so no component changes are needed.
        // Values updated for the new look: near-black background, emerald accent.
        'cv-navy':   '#0b0e11', // page background
        'cv-card':   '#0f1418', // card background
        'cv-deep':   '#161d23', // raised surfaces, chips
        'cv-teal':   '#34d399', // accent (emerald)
        'cv-bright': '#f4f6f8', // headings
        'cv-text':   '#d5dce1', // body text
        'cv-muted':  '#a3b0bb', // secondary text
      },
      fontFamily: {
        sans:    ['Geist', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],          // body text
        display: ['"Space Grotesk"', 'Geist', 'system-ui', 'sans-serif'],                   // big headings
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'Consolas', 'monospace'],             // labels, terminal card
      },
      boxShadow: {
        'teal-sm': '0 4px 16px rgba(52,211,153,0.05)',
        'teal-md': '0 8px 28px rgba(52,211,153,0.07)',
        'teal-lg': '0 12px 40px rgba(52,211,153,0.10)',
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
