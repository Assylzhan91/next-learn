import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import tsParser from '@typescript-eslint/parser'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
})

const eslintConfig = [
  ...compat.config({
    extends: [
      'eslint:recommended',
      'next',
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
    ],
  }),
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true
        }
      },
    },
  files: ["**/*.ts", "**/*.tsx"] ,
    rules: {
      "semi": "off",
      "@/semi": ["error", "always"],
      "@typescript-eslint/no-empty-interface": [
          "error",
        {
          allowSingleExtends: true
        }
      ],
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/explicit-function-return-type": "error"
    },
  },

]

export default eslintConfig