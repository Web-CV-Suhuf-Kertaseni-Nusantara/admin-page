const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        'sideshadow': '4px 0px 4px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
});
