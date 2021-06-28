module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    tsconfigRootDir: './',
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },
  extends: [
    // then, enable whichever type-aware rules you want to use
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  settings: {
    'svelte3/typescript': true,
    'svelte3/ignore-styles': () => true,
  },
  rules: {
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
  },
};
