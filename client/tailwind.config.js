module.exports = { //eslint-disable-line
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        primary:'#FF9100',
        secondary:'#121212',
        primaryLight:'#FFB400',
        secondaryLight:'#484848',
        tertiary:'#F5F5F5'
      },
      fontFamily:{
        sans:['Roboto','sans-serif'],
        heading:['Poppins','sans-serif'],
        central:['Caveat','sans-serif']
      }
    },
  },
  plugins: [
        require('@tailwindcss/line-clamp')  //eslint-disable-line
  ],
};
