const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: false,
  plugins: [require("@tailwindcss/typography")],
  purge: {
    content: [
      "./src/components/**/*.tsx",
      "./src/lib/**/*.tsx",
      "./src/pages/**/*.tsx",
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
  theme: {
    colors: {
      primary: "#635bfc",
      secondary: "#79dbc0",
      ...defaultTheme.colors,
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
  variants: {
    shadow: ["responsive", "hover", "focus", "group-hover"],
    translate: ["responsive", "hover", "focus", "group-hover"],
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
  },
};
