module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
    webextensions: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-trailing-spaces': ['error'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: [2, 'single'],
    'react/react-in-jsx-scope': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
  },
};
