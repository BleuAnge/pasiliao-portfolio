/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'voldemort' : '#33115c',
        'velvet' : '#6a0040',
        'infinity-light' : '#001241',
        'midnight-melachonly' : '#001d5a',
        'windstrom' : '#6e9ad0',
      },
      fontFamily: {
        'ocean' : 'Optima',
        'lemon_jelly' : 'LemonJelly',
        'scholarly_ambitious' : 'ScholarlyAmbitious',
      },
    },
  },
  plugins: [],
}
