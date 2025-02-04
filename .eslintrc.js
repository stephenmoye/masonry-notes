module.exports = {
  extends: "prettier",
  extends: "airbnb-base",
  env: {
    browser: true,
    node: true,
  },
  rules: {
    quotes: "off",
    "no-console": "off",
    "func-names": "off",
    "comma-dangle": "off",
    "operator-linebreak": "off",
  },
  parserOptions: {
    ecmaFeatures: {
      modules: true,
    },
  },
};
