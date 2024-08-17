import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'emberfest-2024-memory-leaks/tests/helpers';
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

  test('MEMORY_LEAK: visiting repeatedly', async function (assert) {
    for (let i = 0; i != 50; i++) {
      await visit('/');
      await visit('another');
    }

    const assertions = {
      LeakerComponent: 0,
    };

    const results = await detectMemoryLeak(
      'url',
      document.location.href,
      assertions,
    );

    assert.deepEqual(results, assertions);
    assert.strictEqual(currentURL(), 'another');
  });
});
