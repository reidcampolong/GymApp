module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }]
  }
};
