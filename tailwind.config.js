export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        panel: '#1A1A1A',
        accent: '#062BBF',
        secondary: '#F28C38'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem'
      },
      backdropBlur: {
        'sm': '4px',
        'md': '6px',
        'lg': '10px'
      }
    }
  },
  plugins: []
}
