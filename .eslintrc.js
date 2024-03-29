module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'max-classes-per-file': 'off',
    'max-len': ['error', { code: 200 }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'off',
    'no-shadow': 'off',
    'no-param-reassign': [2, { props: false }],
    'linebreak-style': 'off',
    'lines-between-class-members': 'off',
    'vue/no-unused-components': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
    {
      files: ['**/Icons.vue', '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',],
      rules: {
        'max-len': 'off',
      },
    },
  ],
};
