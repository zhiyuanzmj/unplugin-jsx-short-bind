import type { Processor } from '@typescript-eslint/utils/ts-eslint';
import type { Linter } from 'eslint'
import { version } from '../package.json'
import { transformJsxShortBind } from './core/transform'

interface Offset {
  end: number
  offset: number
}
const offsetMap = new Map<string, Offset[]>()

function findOffsetRange(arr: Offset[], end: number) {
  if (end < arr[0].end) {
    return { offset: 0 }
  }
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]
    const next = arr[i + 1] || { end: Infinity }
    if (end >= current.end + current.offset && end <= next.end + next.offset) {
      return current
    }
  }
  return arr[arr.length - 1]
}

const shortBindRE = /(\S+)=(?=\{\1\})/g

const processor: Processor.ProcessorModule = {
  meta: {
    name: 'jsx-short-bind',
    version,
  },
  preprocess(text, filename) {
    const { s: transformedText, nodes } = transformJsxShortBind(text)
    let offset = 0
    offsetMap.set(
      filename,
      nodes.reduce((result, node) => {
        result.push({
          end: node.range().end.index,
          offset: offset += (node.text().length) + 1,
        })
        return result
      }, [] as Offset[]),
    )

    return [transformedText.toString()]
  },

  postprocess(messages, filename) {
    for (const message of messages) {
      for (const { fix } of message) {
        const offsets = offsetMap.get(filename)
        if (!fix || !offsets?.length)
          continue
        const { offset } = findOffsetRange(offsets, fix.range[1])

        let replaceOffset: number | undefined
        fix.text = fix.text.replaceAll(shortBindRE, (str: string) => {
          replaceOffset ??= 0
          if (replaceOffset !== undefined) {
            replaceOffset += str.length
          }
          return ''
        })
        if (offset) {
          // @ts-expect-error ignore
          fix.range[0] -= offset - (replaceOffset || 0)
          // @ts-expect-error ignore
          fix.range[1] -= offset
        }
      }
    }

    return messages.flat()
  },

  supportsAutofix: true,
}

export default {
  name: 'jsx-short-bind',
  files: ['**/*.vue', '**/*.jsx', '**/*.tsx'],
  processor,
} as Linter.Config
