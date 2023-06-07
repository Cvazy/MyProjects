/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      boxShadow: {
        'order': '0px 0px 62px rgba(46, 236, 197, 0.15)',
      },
      colors: {
        'main-color': '#161617',
        'up-reg-color': '#2CE8C2',
        'down-reg-color': '#B5FEEF',
        'dark-green': 'rgba(46, 236, 197, 0.1)',
        'start-grad': '#22A98D',
        'end-grad': '#B5FEEF',
        'block-start': '#193895',
        'block-end': '#527791',
        'grey-start': '#414141',
        'grey-end': '#262626',
        'rate-start': '#313134',
        'rate-via': '#292929',
        'rate-end': '#282828',
        'banner-start': '#313134',
        'banner-via': '#12473C',
        'input-border': 'rgba(255, 255, 255, 0.2)',
        'from-burger': '#161919',
        'to-burger': '#373A3A',
        'burg-acrive-from': '#30DBB8',
        'burg-acrive-via': '#37A58F',
        'burg-acrive-to': '#398778',
      },
      backgroundImage: {
        'main': "url('/public/images/main.png')",
        'ellipses': "url('/public/images/ellipses.png')",
        'men-shadow': "url('/public/images/men-shadow.png')",
        'first-step': "url('/public/images/first-step.png')",
        'second-step': "url('/public/images/second-step.png')"
      },
      borderWidth: {
        1: '1px',
        1.5: '1.5px',
      },
      height: {
        23: '23rem',
        25: '25rem',
        26: '26px',
        30: '30px',
        31: '31rem',
        33: '33px',
        35: '35rem',
        40: '40rem',
        45: '45rem',
        72: '72px',
        75: '75px',
        110: '110px',
        111: '111rem',
        120: '120px',
        370: '370px',
        400: '400px',
        411: '411px',
        450: '450px',
        480: '480px',
        520: '520px',
        570: '570px',
        650: '650px',
        720: '720px',
      },
      width: {
        26: '26px',
        35: '35px',
        59: '59rem',
        72: '72px',
        110: '110px',
        240: '240px',
        295: '295px',
        300: '300px',
        370: '370px',
        400: '400px',
        437: '437px',
        720: '720px',
        770: '770px',
        1110: '1110px',
        1200: '1200px',
        1830: '1830px',
      },
      padding: {
        5.5: '',
        42: '42px',
        75: '75px',
        90: '90px',
        135: '135px',
        150: '150px',
        175: '175px',
        260: '260px',
        275: '275px',
        450: '450px',
      },
      margin: {
        22: '22rem',
        25: '25px',
        29: '29px',
        30: '30rem',
        35: '35px',
        55: '55px',
        70: '70px',
        84: '84px',
        85: '85px',
        140: '140px',
        160: '160px',
        170: '170px',
        200: '200px',
        235: '235px',
        275: '275px',
        780: '780px',
        1250: '1250px',
        1750: '1750px',
      },
      borderRadius: {
        36: '36px'
      },
      fontSize: {
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        17: '17px',
        22: '22px',
        70: '70px',
      },
    },
  },
  plugins: [],
  mode: process.env.NODE_ENV ? 'jit' : undefined,
}