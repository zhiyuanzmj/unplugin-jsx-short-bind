# unplugin-jsx-short-bind [![npm](https://img.shields.io/npm/v/unplugin-jsx-short-bind.svg)](https://npmjs.com/package/unplugin-jsx-short-bind)

[![Unit Test](https://github.com/zhiyuanzmj/unplugin-jsx-short-bind/actions/workflows/unit-test.yml/badge.svg)](https://github.com/zhiyuanzmj/unplugin-jsx-short-bind/actions/workflows/unit-test.yml)

A shorthand for binding prop with the same data name for JSX. Powered by [ast-grep](https://github.com/ast-grep/ast-grep).

```tsx
export default () => {
  const [value, setValue] = useState()
  const onInput = (e) => {
    setValue(e.currentTarget.value)
  }
  return (
    <input
      {onInput}
      {value}
    />
  )
}
```

## Installation

```bash
npm i -D unplugin-jsx-short-bind
```
> Note: While registering the plugin in your config files, always have the plugin before the framework's main plugin. Otherwise, you'll get parse errors; For example:
```ts
// vite.config.ts
import react from '@vitejs/plugin-react';
import JsxShortBind from "unplugin-jsx-short-bind/vite";

export default defineConfig({
  plugins: [JsxShortBind(), react()],
});
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

## Typescript

### [TS Macro](https://github.com/ts-macro/ts-macro)

```ts {5}
// tsm.config.ts
import jsxShortBind from "unplugin-jsx-short-bind/volar";
export default {
  plugins: [jsxShortBind()],
};
```

### Volar

```jsonc {5}
// tsconfig.json
{
  // ...
  "vueCompilerOptions": {
    "plugins": ["unplugin-jsx-short-bind/volar"],
  },
}
```

## Eslint

```js {5}
// eslint.config.js
import antfu from "@antfu/eslint-config";
import jsxShortBind from "unplugin-jsx-short-bind/eslint";

export default antfu({}, jsxShortBind);
```

## License

[MIT](./LICENSE) License © 2023-PRESENT [zhiyuanzmj](https://github.com/zhiyuanzmj)
