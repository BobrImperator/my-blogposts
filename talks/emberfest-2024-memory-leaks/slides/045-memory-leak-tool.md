```js
// tests/acceptance/users-test.js
import { detectMemoryLeak } from "memory-leak-detector";

test("paginating back and forth", async function (assert) {
  await visit("users");

  await click("[data-test-pagination-next]");
  await click("[data-test-pagination-next]");
  await click("[data-test-pagination-previous]");

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
Additional test helper we have is `detectMemoryLeak` which accepts a map of class names and their expected count.
`detectMemoryLeak` will look for any classes that match provided keys and count them, then we can pass the results directly to `assert.deepEqual` and compare whether they match.

On a side note, if you've provided an incorrect name, results would return `null` for that key which would fail this test. Preventing situations where a class name was changed, removed or simply mispelled.
