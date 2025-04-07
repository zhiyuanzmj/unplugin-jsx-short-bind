import antfu from '@antfu/eslint-config'

import jsxShortBind from 'unplugin-jsx-short-bind/eslint'

export default antfu(
  {
    rules: {
      'vue/no-export-in-script-setup': 'off',
      'jsonc/comma-dangle': 'off',
    },
    overrides: {
      markdown: {
        'style/semi': 'off',
        'style/quotes': 'off',
      },
    },
  },
  jsxShortBind,
)
