```js [5-19]
// config/targets.js
"use strict";

const browsers = [
  "last 1 Chrome versions",
  "last 1 Firefox versions",
  "last 1 Safari versions",
];

module.exports = {
  browsers,
};
```

Note:
If your targets config is different than this one and you still support older browsers, then it could be a good idea to set it to the latest browsers if only for debugging.

Older browsers code includes polyfills, unsupported features and in general will create more noise.
