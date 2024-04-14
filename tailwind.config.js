/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
      fontFamily: {
        'body': ['Roboto']
      },
      extend: {
         colors: {
           primary: '#2196F3',
           secondary: '#64B5F6',
            },
           },
          },
  colors: {
      'purple': '#bb86fc',
    },
  important: '#root',
  plugins: [],
}
