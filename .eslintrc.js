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
  plugins: ["@typescript-eslint", "jsx-a11y"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:jsx-a11y/recommended",
  ],
  rules: {
    complexity: ["error", 10],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    // Next.js' <Link/> holds the child anchor's href value
    "jsx-a11y/anchor-is-valid": "off",
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
