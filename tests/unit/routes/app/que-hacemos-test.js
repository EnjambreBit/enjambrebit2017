import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | app/que hacemos', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:app/que-hacemos');
    assert.ok(route);
  });
});
