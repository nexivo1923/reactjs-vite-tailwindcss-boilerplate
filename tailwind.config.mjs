module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        casino: {
          gold: '#FFD700',
          red: '#DC2626',
          green: '#16A34A',
          dark: '#0F172A',
          purple: '#7C3AED',
          card: '#1E293B',
        }
      },
      fontFamily: {
        'casino': ['"Playfair Display"', 'serif'],
        'sans-casino': ['"Inter"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'blink': 'blink 1s step-start infinite',
        'pulse-gold': 'pulse-gold 2s infinite',
      },
      backgroundImage: {
        'casino-pattern': "url('/casino-bg.jpg')",
        'card-table': "radial-gradient(circle, #0F172A 0%, #1E293B 100%)",
      }
    },
  },
  plugins: [],
}