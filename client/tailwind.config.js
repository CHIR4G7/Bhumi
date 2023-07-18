/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        NoeStandard : ['NoeStandard', 'sans-serif'],
        NoeDisplay : ['NoeDisplay', 'sans-serif'],
        YatraOne : ['Yatra One', 'cursive'],
        AnekMalayalam : ['Anek Malayalam', 'sans-serif'],
        PlusJakartaSans : ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontWeight: {
        normal: 500,
        bold: 700,
      },
      screens: {
        'sm': '368px',
        // => @media (min-width: 576px) { ... }
  
        'md': '768px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
}

