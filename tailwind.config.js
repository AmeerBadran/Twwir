
/** @type {import('tailwindcss').Config} */

export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "URL('./src/assets/images/home-bg.jpg')",
        'contactbg':"URL('./src/assets/images/contactbg.png')",
        'aboutbg':"URL('./src/assets/images/aboutbg.png')",
        'req':"URL('./src/assets/images/bgs/12944-NOMX20.jpg')",
        'dev':"URL('./src/assets/images/bgs/3964906.jpg')",
        'des':"URL('./src/assets/images/bgs/331917-P9V46S-888.jpg')",
        'lunch':"URL('./src/assets/images/bgs/3054479.jpg')",
      },
      boxShadow: {
        'inner-shadow': 'inset 0px 0px 24px 13px rgba(50,255,255,0.3)',
        'out-shadow': '0px 0px 34px 13px rgba(50,255,255,0.3)',
      },
      fontFamily: {
        'reem-kufi': ['"Reem Kufi"', 'sans-serif'],
      },
      colors: {
        'my-color': '#0B4747',
        'sec-color': '#de8e16'
      },
    },
    screens: {
      'mobile': '320px',
      'xmobile': '350px',
      '2xmobile': '520px',
      'md': '640px',
      '2md': '820px',
      'slg': '950px',
      'lg': '1024px',
      'sxl': '1140px',
      'xl': '1300px',
    },
  },
  plugins: [],
}

