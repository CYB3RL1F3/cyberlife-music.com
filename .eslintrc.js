// eslint.config.js
import remix from '@remix-run/eslint-config';
import remixNode from '@remix-run/eslint-config/node';
import eslintRecommended from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  remix,
  remixNode,
  eslintRecommended.configs.recommended,

  {
    name: 'custom-rules',
    plugins: {
      prettier: prettierPlugin,
    },

    rules: {
      'prettier/prettier': 'error',
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // Node.js built-ins (fs, path, etc.)
            'external', // npm packages (react, lodash, etc.)
            'internal', // Internal project modules
            ['parent', 'sibling'], // Relative imports
            'index', // index files
          ],
          pathGroups: [
            { pattern: '~/**', group: 'internal', position: 'before' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
];
