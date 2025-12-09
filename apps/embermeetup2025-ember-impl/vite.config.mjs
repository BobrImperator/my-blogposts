import { defineConfig } from 'vite';
import { extensions, classicEmberSupport, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';

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
        index: 'index.html',
        site: 'embedded.html',
        todoapp: './embedded.js'
      },
      output: {
        dir: 'embedded-dist',
        entryFileNames: '[name].js',
      },
    },
    // lib: {
    //   entry: ['./embedded.js'],
    //   formats: ['es'],
    //   // fileName: (format, entryname) => `embedded.js`
    // },
  },
});
