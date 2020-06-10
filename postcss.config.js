const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: isProd
    ? [
        "tailwindcss",
        "autoprefixer",
        [
          "@fullhuman/postcss-purgecss",
          {
            content: [
              "./src/components/**/*.tsx",
              "./src/lib/**/*.tsx",
              "./src/pages/**/*.tsx",
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        ],
        "postcss-import",
        "postcss-flexbugs-fixes",
        [
          "postcss-preset-env",
          {
            autoprefixer: {
              flexbox: "no-2009",
            },
            stage: 3,
            features: {
              "custom-properties": false,
            },
          },
        ],
      ]
    : ["tailwindcss"],
};
