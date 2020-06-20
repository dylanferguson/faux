module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
  overrides: [
    {
      files: ["src/components/**/*.{ts,tsx}"],
      plugins: ["filenames"],
      rules: {
        "filenames/match-regex": [2, "^[A-Z]+[a-z]*(?:[A-Z][a-z]+)*$|^index$"],
      },
    },
    {
      files: ["cypress/integration/**/*.ts"],
      env: {
        "cypress/globals": true,
      },
      extends: ["plugin:cypress/recommended"],
      plugins: ["cypress"],
      rules: {
        "cypress/assertion-before-screenshot": "error",
        "cypress/require-data-selectors": "error",
        "cypress/no-force": "error",
      },
    },
  ],
};
