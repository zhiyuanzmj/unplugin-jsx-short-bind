import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import JsxShortBind from 'unplugin-jsx-short-bind/vite'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import VueMacros from 'vue-macros/vite'

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
