import type { BaseOptions } from '@vue-macros/common'
import {

  REGEX_NODE_MODULES,
  REGEX_SUPPORTED_EXT,
} from '@vue-macros/common'

export interface Options extends Pick<BaseOptions, 'include' | 'exclude'> {}

export type OptionsResolved = Pick<Required<Options>, 'include'> & Pick<Options, 'exclude'>

export function resolveOption(options: Options): OptionsResolved {
  return {
    include: [REGEX_SUPPORTED_EXT],
    exclude: [REGEX_NODE_MODULES],
    ...options,
  }
}
