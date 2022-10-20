/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    backgroundImage: {
      homeheroimage: "url('../public/homepage/bull.png')",
      cardcustom: "url('../public/assets/nftCardBaclgrounImage.png')",
      homeheroimageNew: "url('../public/homepage/bullnew.png')",
      marketplacebackground:
        "url('../public/assets/marketplacebackground.png')",
      profilepageheader: "url('../public/assets/profileHeaderImage.png')",
      profilepic: "url('../public/assets/profilePic.png')",
    },
    screens: {
      '3xs': '250px',
      '2xs': '320px',
      xs: '480px',
      ...defaultTheme.screens,
    },
    colors: {
      headerorange: '#FEC304',
      ...colors,
    },
    fontFamily: {
      ethnocentric: ['Ethnocentric', 'serif'],
      poppinsmedium: ['Poppins-Medium', 'serif'],
      ralewaybold: ['Raleway-Bold', 'serif'],
      ralewaylight: ['Raleway-light', 'serif'],
      ralewayregular: ['Raleway-Regular', 'serif'],
      ralewaysemibold: ['Raleway-semibold', 'serif'],
      popinsregular: ['Popins-regular', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
