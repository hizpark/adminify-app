import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginPrettierRecommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
      sourceType: 'module',
    },
    extends: [eslintPluginPrettierRecommended],
    rules: {
      semi: ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
      sourceType: 'script',
    },
    extends: [eslintPluginPrettierRecommended],
    rules: {
      semi: ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
)
