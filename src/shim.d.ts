import type { FilterPattern } from '@rollup/pluginutils'

declare module '@vue/language-core' {
  export interface VueCompilerOptions {
    jsxShortBind?: {
      include?: FilterPattern
      exclude?: FilterPattern
    }
  }
}

export {}
