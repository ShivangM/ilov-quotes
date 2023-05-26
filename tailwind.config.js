/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        gradient: {
          '0%': { transform: 'bg-top' },
          '50%': { transform: 'bg-left' },
          '100%': { transform: 'bg-top' },
        },
      },
      animation: {
        gradient: 'gradient 6s ease infinite',
      },
    },
  },
  plugins: [],
};
