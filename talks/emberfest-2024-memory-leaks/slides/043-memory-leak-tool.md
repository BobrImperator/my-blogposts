# Running it

```js
// tests/test-helper.js

import { detectLeakingClasses } from "memory-leak-detector";
// this checks whether there are any of `our` classes retained after all tests have passed.
globalThis.Testem?.afterTests(async (_config, _data, callback) => {
  await detectLeakingClasses("title", document.title);
  callback();
});
```

```sh
    pnpm -F emberfest-2024-memory-leaks-app start:memory-leak-detector & pid=$!; \
    pnpm -F emberfest-2024-memory-leaks-app test:memory-leak; \
    wait $pid
```

Note:
Because this check function should run after the test suite completes, a different approach to reporting the error is needed.

Here we start a `memory-leak-detector` server in the background and grab it's process id.
Then run our tests and finally wait for the outcome of the server.

`detectLeakingClasses` closes exits the server process, so it should be called last and only once.
