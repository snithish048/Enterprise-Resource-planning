/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx,css,html}",],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'primary': "#6333FF", 
        'secondary':"#0EB56F",
        'headline':"#eef5f8",
        'grey400': "#778cac",
        'grey600': "#3e4859",
        'black900':"#0C0E0C",
        'black800':"#15151b",
        'black750':"#1a1a22",
        'black700':" #191919",
        'black600':" #2D2D2D",
        'black550':" #22222c",
        'black500':"#252D3B",
        'black450':"#252D3B",
        'black400':"#212330",
        'black300':"#3B444F"
      },
      
    },
  },
  plugins: [],
}

