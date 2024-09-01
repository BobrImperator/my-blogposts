# Environment

```js
// ember-cli-build.js
const TerserPlugin = require('terser-webpack-plugin'); // npm add -D terser-webpack-plugin
module.exports = function (defaults) {
  return require('@embroider/compat').compatBuild(app, Webpack, {
    packagerOptions: {
      webpackConfig: {
        optimization: {
          minimize: true,
          minimizer: [
            new TerserPlugin({
              terserOptions: {
                keep_classnames: true,
                keep_fnames: true,
              },
            }),
          ],
        },
      },
    },
  });
};
```

Note:
Production builds by default obfuscate the names of our code. Function and class names are shorter so the overall bundle is smaller.
Additionally classes turn into generic objects in a snapshot making debugging much harder.

You should configure terser to preserve those names.
