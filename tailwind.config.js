/** @type {import('tailwindcss').Config} */
export const darkMode = 'class'
export const content = [
  './components/**/*.{js,vue,ts}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './plugins/**/*.{js,ts}',
  './app.vue',
  './error.vue',
  './node_modules/flyonui/flyonui.js',
  './node_modules/v-wave/dist/**/*.js',
]
export const flyonui = {
  vendors: true,
}
export const theme = {
  extend: {
    colors: {
      cyan: {
        50: '#b4ffff',
        100: '#91e4f4',
        200: '#6dc8e8',
        300: '#49addd',
        400: '#2692d2',
        500: '#1279bf',
        600: '#0d62a4',
        700: '#094b8a',
        800: '#043470',
        900: '#001e55',
      },
      raspberry: {
        50: '#ffabe0',
        100: '#f986c6',
        200: '#f362ab',
        300: '#ed3e91',
        400: '#e71a76',
        500: '#d5075d',
        600: '#b60546',
        700: '#97042f',
        800: '#780217',
        900: '#590000',
      },
      amber: {
        50: '#ffff9f',
        100: '#fde983',
        200: '#fad366',
        300: '#f8be49',
        400: '#f5a82c',
        500: '#e5911b',
        600: '#c77814',
        700: '#a95f0d',
        800: '#8b4607',
        900: '#6e2e00',
      },
    },
  },
}
export const plugins = [
  require('flyonui'),
  require('flyonui/plugin'),
  require('tailwindcss-motion'),
]
