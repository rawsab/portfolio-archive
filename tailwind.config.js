/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        menocondensed: ['MenoBannerCondensed', 'serif'],
        acuminpro: ['AcuminPro', 'sans-serif'],
        mbextracondensed: ['MenoBannerExtraCondensed', 'serif'],
        mbsemibold: ['MenoBannerSemiBold', 'serif'],
        'google-sans-code': ['Google Sans Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
