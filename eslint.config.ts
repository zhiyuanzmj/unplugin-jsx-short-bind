import antfu from '@antfu/eslint-config'

import jsxShortBind from 'unplugin-jsx-short-bind/eslint'

export default antfu(
  {
    rules: {
      'jsonc/comma-dangle': 'off',
      'style/jsx-sort-props': 'error',
      'style/semi': 'off',
      'style/quotes': 'off',
    },
  },
  jsxShortBind,
)
