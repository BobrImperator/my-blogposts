# Different kind of test

```js
// tests/acceptance/users-test.js
import { detectMemoryLeak } from "memory-leak-detector";

test("pagination", async function (assert) {
  await visit("users");

  const assertions = {
    UserListItemComponent: 30,
  };

  const results = await detectMemoryLeak(
    "url",
    document.location.href,
    assertions,
  );

  assert.deepEqual(results, assertions);
  assert.strictEqual(currentURL(), "users");
});
```

Note:
Next slide.
