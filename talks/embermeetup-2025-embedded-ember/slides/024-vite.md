```json [5]
  "exports": {
    "./tests/*": "./tests/*",
    "./*": "./app/*",
    "./embedded": "./embedded-dist/embedded.js",
    "./styles": "./embedded-dist/embermeetup2025-ember-impl.css"
  },
```

```js [3]
// App.jsx
import EmbeddedEmber from "embermeetup2025-ember-impl/embedded";
import "embermeetup2025-ember-impl/styles.css";
```

Note:

Now to fix the styles
