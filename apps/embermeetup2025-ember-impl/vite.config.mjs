import { defineConfig } from 'vite';
import { extensions, classicEmberSupport, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';
import { resolve } from 'node:path';

// <!-- @EMBERMEETUP2025  -->

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
    minify: false,
    rollupOptions: {
      input: {
        // index: 'index.html',
        // site: 'embedded.html',
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
      // fileName: (format, entryname) => `embedded.js`
    },
  },
});
