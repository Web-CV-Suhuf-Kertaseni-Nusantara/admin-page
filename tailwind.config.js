const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        'sideshadow': '4px 0px 4px rgba(0, 0, 0, 0.25)',
        'DashboardShadow': '4px 4px 4px rgba(0, 0, 0, 0.15)',
        'LogOutshadow': '2px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
});
