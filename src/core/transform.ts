import { js } from '@ast-grep/napi'
import {
  MagicString,
} from '@vue-macros/common'

export function transformJsxShortBind(code: string) {
  const s = new MagicString(code)
  const ast = js.parse(code)
  const root = ast.root()
  const nodes = root.findAll({
    rule: {
      kind: 'identifier',
      inside: {
        kind: 'jsx_expression',
        inside: {
          any: [
            { kind: 'jsx_opening_element' },
            { kind: 'jsx_self_closing_element' },
          ],
        },
      },
    },
  })

  for (const node of nodes) {
    const range = node.range()
    s.appendLeft(range.start.index - 1, `${node.text()}=`)
  }
  return { s, nodes }
}
