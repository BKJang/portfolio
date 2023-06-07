module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['airbnb-base', 'prettier', "react-app"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,

  },
  plugins: [],
  rules: {
    "no-unused-vars": 0
  },
};