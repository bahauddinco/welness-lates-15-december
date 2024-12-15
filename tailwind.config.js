/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',
        background: 'var(--color-background)',
        'background-light': 'var(--color-background-light)',
        'background-dark': 'var(--color-background-dark)',
        card: 'var(--color-card)',
        'card-hover': 'var(--color-card-hover)',
        border: 'var(--color-border)',
      },
      textColor: {
        primary: 'var(--color-text)',
        secondary: 'var(--color-text-secondary)',
        muted: 'var(--color-text-muted)',
        accent: 'var(--color-primary)',
      },
      backgroundColor: {
        accent: {
          DEFAULT: 'var(--color-primary)',
          glow: 'var(--color-accent-glow)',
          surface: 'var(--color-accent-surface)',
        }
      }
    },
  },
  plugins: [],
};