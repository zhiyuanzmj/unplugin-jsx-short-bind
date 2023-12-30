import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'
import JsxShortBind from 'unplugin-jsx-short-bind/vite'

export default defineConfig({
  build: {
    outDir: './dist/vite',
  },
  plugins: [
    JsxShortBind(),
    VueMacros({
      exportRender: true,
      reactivityTransform: true,
      plugins: {
        vue: Vue(),
        vueJsx: VueJsx(),
      },
    }),
    Inspect({
      build: true,
    }),
  ],
})
