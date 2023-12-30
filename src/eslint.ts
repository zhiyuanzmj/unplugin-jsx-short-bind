import { version } from '../package.json'
import { transformJsxShortBind } from './core/transform'

let offsets: {
  end: number
  offset: number
}[] = []

const processor = {
  meta: {
    name: 'jsx-short-bind',
    version,
  },
  preprocess(text: string) {
    const { s: transformedText, nodes } = transformJsxShortBind(text)
    offsets = nodes.reduce((result, node) => {
      result.push({
        end: node.range().end.index,
        offset: (result.at(-1)?.offset || 0) + node.text().length + 1,
      })
      return result
    }, [] as typeof offsets)

    return [transformedText.toString()]
  },

  postprocess(messages: any) {
    for (const message of messages) {
      for (const { fix, ruleId } of message) {
        if (!fix)
          continue

        const { offset } = offsets[ruleId
          === 'style/jsx-indent-props'
          ? 'find'
          : 'findLast'](node => fix.range[1] >= node.end) || {}

        if (ruleId === 'style/jsx-max-props-per-line' && offset) {
          fix.text = `${fix.text.replace(/(\S+)=(?={\1})/g, '')}`
          fix.range[1] -= offset
          continue
        }

        if (offset) {
          fix.range[0] -= offset
          fix.range[1] -= offset
        }
      }
    }

    return [].concat(...messages)
  },

  supportsAutofix: true,
}

export default {
  name: 'jsx-short-bind',
  files: ['**/*.vue', '**/*.jsx', '**/*.tsx'],
  processor,
  rules: {
    'vue/comment-directive': 'off',
  },
}
