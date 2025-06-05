/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      lendaBg: '#D9D9D9',
      lendaBlue: '#0053A6',
      lendaLightBlue: '#F2F6FA',
      lendaBlack_1: '#1E1E1E',
      lendaBlack_2: '#101828',
      lendaGrey_1: '#757575',
      lendaGrey_2: '#667085',
      lendaWhite: '#FFFFFF',
      lendaBorderGrey: '#D9D9D9',
      lendaGreen: '#14AE5C',
      lendaRed: '#EC221F',
      lendaLightRed: '#FFEFEA',
      lendaActiveStatusBg: '#B9F0D1',
      lendaActiveStatusText: '#235939',
      lendaInactiveStatusBg: '#F9E69A',
      lendaInactiveStatusText: '#866E0C',
      lendaOverdueStatusBg: '#30B0C7',
      lendaOverdueStatusText: '#FFFFFF',
      lendaLightPurple: '#F9F5FF',
      lendaPurple: '#6941C6',
      lendaLightBlue: '#EFF8FF',
      lendaBlue: '#175CD3',
      lendaLightIndigo: '#EEF4FF',
      lendaIndigo: '#3538CD',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

