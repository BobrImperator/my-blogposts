# Tricks

```js
test("trick#1 triggering route repeatedly", async function (assert) {
  for (let index = 0; index < 30; index++) {
    await visit("/");
    await visit("users");
  }

  // When the test stops, grab your snapshot
  await this.pauseTest();

  assert.strictEqual(currentURL(), "users");
});
```

![memory trick#1](/snapshot/memory_leak_trick_1.png)

Note:
You should prefer using production environment, but if you're looking for the quickest way to blow memory up, use tests and some iteration.
