import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],
    },
  },
  {
    files: ['**/*.js'],
    rules: {
      'no-console': 'off',
      'import/extensions': 'off',
    },
  },
];