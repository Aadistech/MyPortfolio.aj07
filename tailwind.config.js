/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#03050c',
          900: '#070a14',
          850: '#0c1122',
          800: '#11182e',
          700: '#1e294b',
        },
        cosmic: {
          cyan: '#38bdf8',
          teal: '#2dd4bf',
          violet: '#a855f7',
          indigo: '#6366f1',
          fuchsia: '#e879f9',
          gold: '#f59e0b'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-cyan': '0 0 25px -5px rgba(56, 189, 248, 0.3)',
        'glow-violet': '0 0 25px -5px rgba(168, 85, 247, 0.3)',
        'glow-teal': '0 0 25px -5px rgba(45, 212, 191, 0.3)',
        'glow-gold': '0 0 25px -5px rgba(245, 158, 11, 0.3)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(-12px)' },
          '50%': { transform: 'translateY(0px)' },
        },
        'drift': {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(6px, -10px) rotate(1deg)' },
          '66%': { transform: 'translate(-5px, 6px) rotate(-1deg)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'drift': 'drift 9s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
