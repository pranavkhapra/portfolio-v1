/* eslint-disable global-require */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        firamono: ['Fira Mono', 'monospace'],
      },

      colors: {
        darkBackgroundBlue: '#203447',
        neonGreen: '#74ee15', /// neon green
        neonPurple: '#f000ff', /// neon purple
        neonBlue: '#4deeea	', // neon blue
        neonYellow: '#ffe700	', // neon yellow
        oliveGreen: '#06b6d4',
        lightPurple: '#55198b',
        darkBackgroundPink: '#eb4471',
        darkBackgroundYellow: '#ffc600',
        darkText: '#d7d7d7',
        darkVimColor: '#64ffda', // the green color something of the vim
      },
    },
  },
  variants: {
    scrollbar: ['dark'],
    extend: {},
  },
  // plugins: [require('ps-scrollbar-tailwind')],
  fontFamily: {
    Karla: ['Karla', 'sans-serif'],
  },
};
