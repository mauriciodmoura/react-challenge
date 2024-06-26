module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  plugins: ['react'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  rules: {
  },
};