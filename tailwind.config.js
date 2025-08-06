// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Dark Mode wird über Klasse gesteuert
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#7BE0FF',        // Akzent hellblau
          orange: '#FFB56A',      // Akzent orange
        },
        ui: {
          bg: '#111111',          // Schwarz / Haupt-Hintergrund
          panel: '#1F1F1F',       // Panels / Sidebar
          glass: 'rgba(255,255,255,0.04)', // Glas-Hintergrund
        },
      },
      borderRadius: {
        xl: '1rem', // Runde UI-Kanten
        '2xl': '1.5rem',
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
      },
      boxShadow: {
        glow: '0 0 10px rgba(123, 224, 255, 0.2)', // optional für Panels
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
