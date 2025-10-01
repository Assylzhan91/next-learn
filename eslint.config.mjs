import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

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
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
    ],
  }),
  {
  files: ["**/*.ts", "**/*.tsx"] ,
    rules: {
      "semi": "off",
      "@typescript-eslint/no-empty-interface": [
          "error",
        {
          allowSingleExtends: true
        }
      ],
      "@typescript-eslint/no-unused-vars": ["warn"]
    },
  },

]

export default eslintConfig