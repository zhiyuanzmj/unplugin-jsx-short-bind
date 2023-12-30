import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/*.ts'],
  format: ['cjs', 'esm'],
  splitting: false,
  dts: true,
  clean: true,
  esbuildPlugins: [
    {
      name: 'rewrite-export-default',
      setup(build) {
        build.onLoad({ filter: /\.ts$/ }, async ({ path }) => {
          if (!path.startsWith(resolve(__dirname, 'src')))
            return

          const contents = readFile(path, 'utf8')
          return {
            contents: (await contents).replace('export default', 'export ='),
            loader: 'ts',
          }
        })
      },
    },
  ],
})
