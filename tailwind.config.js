const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    colors: {
      primary: "#635bfc",
      secondary: "#79dbc0",
      ...defaultTheme.colors,
    },
    variants: {
      textColor: ["responsive", "hover", "focus", "group-hover"],
    },
    container: {
      center: true,
      padding: "0.5rem",
    },
    extend: {
      fontFamily: {
        sans: ["Fira Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
