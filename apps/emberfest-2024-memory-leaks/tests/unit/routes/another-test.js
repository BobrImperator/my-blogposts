import { module, test } from 'qunit';
import { setupTest } from 'emberfest-2024-memory-leaks/tests/helpers';

module('Unit | Route | another', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:another');
    assert.ok(route);
  });
});
