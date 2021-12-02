module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: {
          light: '#112240',
          DEFAULT: '#0a192f',
          dark: '#020c1b',
          lightest: '#233554',
        },
        slate: {
          light: '#a8b2d1',
          DEFAULT: '#8892b0',
          dark: '#495670',
          lightest: '#ccd6f6',
        },
        green: '#64ffda',
      },
      animation: {
        fadeInButton: 'fadeInButton 0.4s ease-in-out forwards',
        fadeIn: 'fadeIn 1s ease-in forwards',
      },
      keyframes: {
        fadeInButton: {
          '0%': {
            backgroundColor: '#0a192f',
          },
          '100%': {
            backgroundColor: '#233554',
          },
        },
        fadeIn: {
          '0%': { transform: 'translateY(-100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      fontFamily: {
        calibre: ['Calibre'],
        sfmono: ['SF Mono'],
      },
      fontSize: {
        small: '0.8125rem',
      },
      transitionDelay: {
        400: '400ms',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}
