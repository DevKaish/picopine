/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#05070A', b2: '#0A0F10', ch: '#12181A', pine: '#0F4A3A',
        ac: '#2DE2C4', vi: '#7C4DFF', vl: '#A78BFA', vd: '#1E1145', tx: '#F2F1EC', mu: '#8FA3A0',
        ln: 'rgba(45,226,196,.18)',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
