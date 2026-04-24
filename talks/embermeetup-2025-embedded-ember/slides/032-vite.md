```mjs [4-5, 11]
import { defineConfig } from 'vite';
import { extensions, classicEmberSupport, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';
// https://github.com/laynezh/vite-plugin-lib-assets
import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets';

export default defineConfig({
  plugins: [
    classicEmberSupport(),
    ember(),
    libAssetsPlugin(),
    // extra plugins here
    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
  ],
});
```


Note:

`vite-plugin-lib-assets` helps projects with library mode to emit assets and preserve imports in the emitted code.
This plugin is particularily useful for builds targeting consumers who are expected to use a compiler like Vite that will be able to handle these imports.
