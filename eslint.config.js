import prettierConfig from 'eslint-config-prettier';

export default [
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-undef': 'error',
    },
  },
  prettierConfig,
];
