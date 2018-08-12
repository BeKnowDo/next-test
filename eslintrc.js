module.exports = {
  env: { browser: true, es6: true, commonjs: true },
  extends: ['eslint:recommended', 'plugin:compat/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: { experimentalObjectRestSpread: true, jsx: true },
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-uses-vars': [2],
  },
};
