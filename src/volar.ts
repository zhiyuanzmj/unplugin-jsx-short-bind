import {
  FileKind,
  type VueLanguagePlugin,
  replaceSourceRange,
} from '@vue/language-core'
import { transformJsxShortBind } from './core/transform'

const plugin: VueLanguagePlugin = () => {
  return {
    name: 'jsx-short-bind',
    version: 1,
    resolveEmbeddedFile(fileName, sfc, embeddedFile) {
      if (embeddedFile.kind !== FileKind.TypeScriptHostFile)
        return

      for (const source of ['script', 'scriptSetup'] as const) {
        if (!sfc[source]?.content)
          continue

        const { nodes } = transformJsxShortBind(sfc[source]!.content)
        for (const node of nodes) {
          replaceSourceRange(
            embeddedFile.content,
            source,
            node.range().start.index - 1,
            node.range().start.index - 1,
              `${node.text()}=`,
          )
        }
      }
    },
  }
}

export default plugin
