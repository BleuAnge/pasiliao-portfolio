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
        'lost-in-space' : '#003663',
        'win-95-desktop' : '#008686',
        'cucumber' : '#006500',
        'medicine-green' : '#007d36',
      },
      fontFamily: {
        'ocean' : 'Optima',
        'lemon_jelly' : 'LemonJelly',
      },
    },
  },
  plugins: [],
}
