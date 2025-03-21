import { createPlugin, replaceSourceRange } from 'ts-macro'
import { transformJsxShortBind } from './core/transform'

const plugin = createPlugin(() => {
  return {
    name: 'volar-pugin-jsx-short-bind',
    resolveVirtualCode({ ast, codes, source }) {
      const { nodes } = transformJsxShortBind(ast.text)
      for (const node of nodes) {
        replaceSourceRange(
          codes,
          source,
          node.range().start.index - 1,
          node.range().start.index - 1,
          `${node.text()}=`,
        )
      }
    },
  }
})

export default plugin
