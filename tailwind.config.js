/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        outfit : ['outfit']
      },
      backgroundImage : {
        'aks': "url('../src/img/BG-Tx-1.svg')"
      }
  },
  plugins: [],
}
}
