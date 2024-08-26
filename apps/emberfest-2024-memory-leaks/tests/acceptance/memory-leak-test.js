import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'emberfest-2024-memory-leaks-app/tests/helpers';
import { detectMemoryLeak } from 'memory-leak-detector';

module('Acceptance | memory leak', function (hooks) {
  setupApplicationTest(hooks);

  test('MEMORY_LEAK: visiting /', async function (assert) {
    await visit('/');

    const assertions = {
      LeakerComponent: 1,
    };

    const results = await detectMemoryLeak(
      'url',
      document.location.href,
      assertions,
    );

    assert.deepEqual(results, assertions);
    assert.strictEqual(currentURL(), '/');
  });

  test('MEMORY_LEAK: asserting a class thats not in heap results in null for that assertion', async function (assert) {
    for (let i = 1; i != 50; i++) {
      await visit('/');
      await visit('another');
    }

    const assertions = {
      LeakerComponent: 50,
      unknownC: 0,
    };

    const results = await detectMemoryLeak(
      'url',
      document.location.href,
      assertions,
    );

    assert.equal(results.unknownC, null, "Returned 'null' when ");
    assert.equal(results.LeakerComponent, 50, "Still leaking.");
    assert.strictEqual(currentURL(), 'another');
  });

  test('MEMORY_LEAK: / visiting repeatedly', async function (assert) {
    for (let i = 1; i != 50; i++) {
      await visit('/');
      await visit('another');
    }

    // const assertions = {
    //   LeakerComponent: 0,
    // };

    // const results = await detectMemoryLeak(
    //   'url',
    //   document.location.href,
    //   assertions,
    // );

    // assert.deepEqual(results, assertions);
    assert.strictEqual(currentURL(), 'another');
  });
});
