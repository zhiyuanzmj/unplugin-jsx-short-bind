# unplugin-jsx-short-bind [![npm](https://img.shields.io/npm/v/unplugin-jsx-short-bind.svg)](https://npmjs.com/package/unplugin-jsx-short-bind)

[![Unit Test](https://github.com/zhiyuanzmj/unplugin-jsx-short-bind/actions/workflows/unit-test.yml/badge.svg)](https://github.com/zhiyuanzmj/unplugin-jsx-short-bind/actions/workflows/unit-test.yml)

A shorthand for binding prop with the same data name for JSX. Powered by [ast-grep](https://github.com/ast-grep/ast-grep).

```vue
<script setup lang="tsx">
let value = $ref('foo')
function onInput(e: any) {
  value = e.target.value
}

export default () => (
  <input
    {value}
    {onInput}
  />
)
</script>
```

## Installation

```bash
npm i -D unplugin-jsx-short-bind
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import JsxShortBind from "unplugin-jsx-short-bind/vite";

export default defineConfig({
  plugins: [JsxShortBind()],
});
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import JsxShortBind from "unplugin-jsx-short-bind/rollup";

export default {
  plugins: [JsxShortBind()],
};
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from "esbuild";

build({
  plugins: [require("unplugin-jsx-short-bind/esbuild")()],
});
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [require("unplugin-jsx-short-bind/webpack")()],
};
```

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [require("unplugin-jsx-short-bind/webpack")()],
  },
};
```

<br></details>

### Volar

```jsonc {5}
// tsconfig.json
{
  // ...
  "vueCompilerOptions": {
    "plugins": ["unplugin-jsx-short-bind/volar"]
  }
}
```

### Eslint

```js {5}
// eslint.config.js
import antfu from "@antfu/eslint-config";
import jsxShortBind from "unplugin-jsx-short-bind/eslint";

export default antfu({}, jsxShortBind);
```

## License

[MIT](./LICENSE) License © 2023-PRESENT [zhiyuanzmj](https://github.com/zhiyuanzmj)
