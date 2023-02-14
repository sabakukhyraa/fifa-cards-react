/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#DBF227",
          "lighter": "#D6D58E",
          "light": "#DBF227",
          "dark": "#9FC131",
          "darker": "#005C53",
          "darkest": "#042940",
        },
        sky: {
          DEFAULT: "#3F858C",
          "lightest": "#d5f0f2",
          "lighter": "#C4EEF2",
          "light": "#7AB8BF",
          "base": "#3F858C",
          "dark": "#025159",
        },
        red: {
          DEFAULT: "#A72929",
          "lightest": "#D24B44",
          "lighter": "#DC5F26",
          "light": "#D14210",
          "base": "#A72929",
          "darkest": "#962220",
        },
      },
      boxShadow: {
        'small': "0px 0px 1px rgba(20, 20, 20, 0.04), 0px 0px 8px rgba(20, 20, 20, 0.08)",
        'medium': "0px -3px 8px 2px rgba(20, 20, 20, 0.08)",
        'large': "0px 1px 24px 8px rgba(20, 20, 20, 0.3)",
      },
      dropShadow: {
        'large': "0px 1px 24px 8px rgba(20, 20, 20, 0.3)", 
      },
      fontSize: {
        'title1': ['48px', {
          lineHeight: '56px',
        }],
        'title2': ['32px', {
          lineHeight: '36px',
        }],
        'title3': ['24px', {
          lineHeight: '32px',
        }],
        'large': '18px',
        'regular': '16px',
        'small': '14px',
        'tiny': '12px'
      },
      fontFamily: {
        sourcesanspro: ["SourceSansPro", "sans-serif"],
        "sans": ["SourceSansPro", "sans-serif"],
      },
      // backgroundImage: {
        "modal" : "url('../../public/bg/player-modal-bg.png')",
      //   "slide-2" : "url('../../public/bg/silver-slide.png')",
      //   "slide-3" : "url('../../public/bg/gold-slide.png')",
      // }
    },
  },
  plugins: [],
}
