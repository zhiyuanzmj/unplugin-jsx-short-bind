import { createUnplugin } from 'unplugin'
import {
  createFilter,
  generateTransform,
} from '@vue-macros/common'
import { type Options, resolveOption } from './core/options'
import { transformJsxShortBind } from './core/transform'

export default createUnplugin<Options | undefined, false>((rawOptions = {}) => {
  const options = resolveOption(rawOptions)
  const filter = createFilter(options)

  const name = 'unplugin-jsx-short-bind'
  return {
    name,
    enforce: 'pre',

    transformInclude(id) {
      return filter(id)
    },
    transform(code, id) {
      return generateTransform(transformJsxShortBind(code).s, id)
    },
  }
})
