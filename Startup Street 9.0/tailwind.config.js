import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#A416C8',
        secondary:'#BA5DD1',
      },
      fontFamily:{
         'Goldman': ['Goldman', 'sans-serif'] 
      },
      animation:{
        "slide":"slide 10s linear infinite "
      },
      keyframes:{
        slide:{
          "0%":{
            transform:"translateX(0)",
          },
          "100%":{
            transform:"translateX(-100%)",
          }
        }
      }
    },
  },
  plugins: [],
}