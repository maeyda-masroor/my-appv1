import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
       'sm': '640px',
       'md': '768px', 
       'lg': '1024px', 
       'xl': '1280px', 
       '2xl': '1536px'
    },
    extend: {
      colors: {
        violet: '#7E33E0',
        lightpurple:'#F2F0FF',
        pink:'#FB2E86',
        green:'#08D15F',
        blue:'#2F1AC4',
        lightpink:'#FFF6FB',
        gradientLeft: '#8e24aa',
        gradientRight: '#1e88e5',
      },
    },
  },
  plugins: [],
};
export default config;
