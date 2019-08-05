// module.exports = {
//   root: true,
//   extends: ['eslint:recommended', 'plugin:prettier/recommended'],
//   rules: {
//     quotes: [2, 'single', { avoidEscape: true }]
//   }
// };

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['jest', 'react-hooks'],
  env: {
    browser: true,
    jest: true
  },
  globals: {
    jsdom: true,
    heap: true
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  rules: {
    'no-underscore-dangle': 'off',

    'import/no-cycle': 'warn',
    'import/no-extraneous-dependencies': 'off',

    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['a', 'Link'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ],

    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js']
      }
    ],

    'react-hooks/rules-of-hooks': 'error'
  }
};
