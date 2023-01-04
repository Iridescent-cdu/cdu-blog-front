import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  safelist: '',
  theme: {
    extend: {
      colors: {
        'dark-mode': '#4A4F55',
        'm-gray': 'rgba(28, 28, 28, 0.5)',
        'm-input': 'rgba(248, 248, 248, 1)',
        'm-admin': '#3B3F44',
        'm-focus': '#545A61',
      },
      borderRadius: {
        xl: '0.625rem',
        '5xl': '3.125rem',
        '6xl': '1.5625rem',
        '7xl': '0.9375rem',
      },
      fontSize: {
        '9xl': ['2.0625rem', '1.24'],
        '10xl': ['2.625rem', '1.36'],
        '11xl': ['1.25rem', '1.35'],
        '12xl': ['0.35rem', '1.28'],
        '13xl': ['1.625rem', '1.24'],
        '14xl': ['1.375rem', '1.24'],
      },
    },
  },
  plugins: [require('@windicss/plugin-scrollbar')],
  variants: {
    scrollbar: ['rounded'],
  },
})
