/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        main: ['Inter Tight'],
      },
      backgroundImage: {
        'main-content': "url('/src/images/main-bg.jpg')",
        'bg1': "url('/src/images/bg1.png')",
        'bg2': "url('/src/images/bg2.jpg')",
        'bg3': "url('/src/images/bg3.png')",
        'bg4': "url('/src/images/bg4.png')",
        'bg5': "url('/src/images/bg5.png')",
        'bg6': "url('/src/images/bg6.jpg')",
        'bg7': "url('/src/images/bg7.jpg')",
        'bg8': "url('/src/images/bg8.png')",
      }
    },
  },
  plugins: [],
}

