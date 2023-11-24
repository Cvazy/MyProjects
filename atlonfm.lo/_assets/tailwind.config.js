/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./Секции/**/*.php",
  ],
  theme: {

    screens: {
      // '2xl':{'max': '1536px'},
      xl: { max: '1170px' },
      xl_only: {min: '981px', max: '1170px'},
      // lg: { max: '768px' },
      md_only: {min: '681px', max: '980px'},
      md: { max: '980px' },
      sm: { max: '680px' },
    },


    container: {
      center: true,
    },
    extend: {
      fontSize: {
        'hero': '5rem',
      },
 
      colors: {
        'light': '#F0E6E0',
        'dark': '#1F1814',
        'blacker': '#1D1D1D',
        'black': '#2D2D2D',

        'gray-400': '#acacac',
        'md-grey': '#8B8B8B',
        'dark-grey': '#524D4A',
        'custom-black': '#090909',
        'custom-black-light': '#1C140F',

        'popup': '#F3F3F3',

        'fixed-menu': 'rgba(18, 13, 10, 0.9)',

        'accent': '#FBC110',
        'border-icon': 'rgba(255, 255, 255, 0.2)',
        'bg-opacity': 'rgba(38, 27, 19, 0.7)',
        'white-08': 'rgba(255, 255, 255, 0.8)',
        'white-05': 'rgba(255, 255, 255, 0.5)',
        
        'border-nav': '#30231C',
        'beige': '#F0E6E0',
        'brown': '#645145',
        'dark-brown': '#32231A',

        'blur': 'rgba(64, 44, 33, 0.4)',
        // Maya 13.11
        'yellow': '#FBC110',
        'yellow-light': '#FFCE31'

      },
      
      spacing: {
        '15': '3.75rem',
        '22': '5.5rem',
        'crl': '2.813rem',
        'sqr': '3.125rem',
      },

      backgroundImage: {
        'states': "radial-gradient(50% 50% at 50% 50%, #F0ECE9 0%, #F1EFED 100%)",
        'designers': "radial-gradient(50% 50% at 50% 50%, #F0ECE9 0%, #DAD0C9 100%)",
        'brown-gradient': "radial-gradient(50% 50% at 50% 50%, #8C7F5D 0%, #38301C 100%)",
        'green-gradient': "radial-gradient(50% 50% at 50% 50%, #769C64 0%, #2F4D21 100%)",
        'dark-brown-gradient': "radial-gradient(50% 50% at 50% 50%, #1C140F 0%, #443023 0.01%, #1C140F 100%)",
      },

      borderColor: {
        'yellow-400': 'rgb(250 204 21 / var(--tw-border-opacity))',
      },

      borderRadius: {
      }
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1160px',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@media (max-width: theme("screens.xl.max"))': {
            maxWidth: '870px',
          },
          '@screen md': {
            maxWidth: '620px',
          },
          '@screen sm': {
            maxWidth: '300px',
          },
        },
      })
    }
  ]
}

      