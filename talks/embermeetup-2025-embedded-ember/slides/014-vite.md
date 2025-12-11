# We're on Vite

```js x-small-font [17-33]
// vite.config.mjs
import { defineConfig } from 'vite';
import { extensions, classicEmberSupport, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [
    classicEmberSupport(),
    ember(),
    // extra plugins here
    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        // index: 'index.html',
        embedded: './embedded.js',
      },
      output: {
        dir: 'embedded-dist',
        entryFileNames: '[name].js',
      },
    },
    // Either the lib or `index: index.html` input are needed for this
    lib: {
      entry: resolve(__dirname, 'embedded.js'),
      formats: ['es'],
    },
  },
});

```

Note:

We provide the `embedded.js` as an input to rollup. It needs to be specified because when not provided, Vite will assume `index.html` as the only entrypoint by default and won't take `embedded.js` into account.

You can provide `index.html` too if your project serves as both an app and a library.

`build.lib` also needs to point to the `embedded.js` entrypoint, the reason behind this is still unknown to me, but without that the build will be borked.
An alternative to that would be creating an `embedded.html` that uses our new `embedded.js` entrypoint. That at this moment requires patching `@embroider/vite` due to it expecting `content-for` hooks, which we don't want.



