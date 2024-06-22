import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

export default config
