/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text1: 'var(--text1)',
        text2: 'var(--text2)',
        text3: 'var(--text3)',
        link:'var(--link)',
        success: 'var(--success)',
        active: 'var(--active)',
        failure: 'var(--failure)',
        border: 'var(--border)',
        background: 'var(--background)',
        background1: 'var(--background1)',
        background2: 'var(--background2)',
      },
    },
  },
  plugins: [],
}

