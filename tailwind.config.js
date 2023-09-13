/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './public/**/*.html',
    './resources/**/*.{js,jsx,ts,tsx,vue}',
    './resources/components/admin/*.{js,jsx,ts,tsx,vue}',
    './resources/components/**/**/*.{js,jsx,ts,tsx,vue}',
    './resources/components/user/*.{js,jsx,ts,tsx,vue}',
    './src/**/*.js',
    './resources/views/*.vue',
    "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
    'blue': {
      '50': '#ebf1ff',
      '100': '#dbe5ff',
      '200': '#becfff',
      '300': '#97aeff',
      '400': '#6e80ff',
      '500': '#4c54ff',
      '600': '#2b24ff',
      '700': '#2a20e2',
      '800': '#221db6',
      '900': '#21208f',
      '950': '#151353',
  }, 
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    "module-resolver",
      {
        "extensions": [".js", ".jsx", ".es", ".es6", ".mjs"]
      }
  ],
}

