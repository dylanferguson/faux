const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: isProd
    ? [
        "tailwindcss",
        "autoprefixer",
        "postcss-import",
        "postcss-flexbugs-fixes",
        "postcss-100vh-fix",
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
