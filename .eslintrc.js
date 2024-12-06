module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks'],
  rules: {
    'comma-dangle': 1,
    'react/no-danger': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': 0,
  },
  globals: {
    fetch: 1,
    window: 1,
  },
};
