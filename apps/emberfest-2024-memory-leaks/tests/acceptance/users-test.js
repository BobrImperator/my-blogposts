import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'emberfest-2024-memory-leaks-app/tests/helpers';
import { detectMemoryLeak } from 'memory-leak-detector';

module('Acceptance | Users', function (hooks) {
  setupApplicationTest(hooks);

  test('pagination', async function (assert) {
    await visit('users');

    const assertions = {
      UserListItemComponent: 30,
    };

    const results = await detectMemoryLeak(
      'url',
      document.location.href,
      assertions,
    );

    assert.deepEqual(results, assertions);
    assert.strictEqual(currentURL(), 'users');
  });

  test('paginating back and forth', async function (assert) {
    await visit('users');

    await click('[data-test-pagination-next]');
    await click('[data-test-pagination-next]');
    await click('[data-test-pagination-previous]');

    const assertions = {
      UserListItemComponent: 30,
    };

    const results = await detectMemoryLeak(
      'url',
      document.location.href,
      assertions,
    );
    assert.deepEqual(results, assertions);
    assert.strictEqual(currentURL(), 'users');
  });

  test('trick#1 triggering route repeatedly', async function (assert) {
    for (let index = 0; index < 30; index++) {
      await visit('/');
      await visit('users');
    }

    // When the test stops, grab your snapshot
    await this.pauseTest();

    assert.strictEqual(currentURL(), 'users');
  });
});
