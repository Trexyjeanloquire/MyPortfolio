/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        portfolio: {
          cyan: '#00e5ff',
          'cyan-dim': '#00b8cc',
          bg: '#060a0f',
          surface: '#0c1219',
          panel: '#111c26',
          'panel-alt': '#162230',
          text: '#cdd6e0',
          muted: '#5a7080',
        },
      },
      fontFamily: {
        body: ['"DM Sans"', 'sans-serif'],
        display: ['"Bebas Neue"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      maxWidth: {
        shell: '1200px',
      },
      boxShadow: {
        'cyan-soft': '0 0 40px rgba(0, 229, 255, 0.15)',
        'cyan-panel': '0 24px 80px rgba(0, 229, 255, 0.12)',
      },
    },
  },
  plugins: [],
};
