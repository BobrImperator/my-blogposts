# We're on Vite

```js x-small-font [4-9]
// app/config/environment.js
import { assert } from '@ember/debug';

const config = {
  modulePrefix: 'embermeetup2025-ember-impl',
  rootURL: '/',
  locationType: 'none',
  APP: {},
};

assert(
  'config is not an object',
  typeof config === 'object' && config !== null
);
assert(
  'modulePrefix was not detected on your config',
  'modulePrefix' in config && typeof config.modulePrefix === 'string'
);
assert(
  'locationType was not detected on your config',
  'locationType' in config && typeof config.locationType === 'string'
);
assert(
  'rootURL was not detected on your config',
  'rootURL' in config && typeof config.rootURL === 'string'
);
assert(
  'APP was not detected on your config',
  'APP' in config && typeof config.APP === 'object'
);

export default config;
```

Note:

Normally Ember app's config is loaded from a `<meta>` tag embedded in `html`.
In a library that's not going to work, but also in Vite apps, the `environment.js` is not a special module anymore. In this case it's going to be hardcoded but it could reference build time variables instead.
