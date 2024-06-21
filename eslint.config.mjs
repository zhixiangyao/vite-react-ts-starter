import path from 'node:path'
import { fileURLToPath } from 'node:url'

import _import from 'eslint-plugin-import'
import globals from 'globals'
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: [
      '**/*.sh',
      '**/*.md',
      '**/*.woff',
      '**/*.ttf',
      '**/Dockerfile',
      '**/.vscode',
      '**/.idea',
      '**/.husky',
      '**/.local',
      '**/node_modules',
      '**/dist',
      '**/dist-ssr',
      '**/public',
      '**/docs',
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
      'prettier',
    ),
  ),
  {
    plugins: {
      import: fixupPluginRules(_import),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      ecmaVersion: 2020,
      sourceType: 'module',

      parserOptions: {
        parser: '@typescript-eslint/parser',
        jsxPragma: 'React',

        ecmaFeatures: {
          jsx: true,
          tsx: true,
        },
      },
    },

    rules: {
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      'space-before-function-paren': 'off',

      'import/order': [
        1,
        {
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'internal', 'sibling', 'parent', 'index'],

          pathGroups: [
            {
              pattern: '/@/**',
              group: 'internal',
              position: 'after',
            },
          ],
        },
      ],
    },
  },
]
