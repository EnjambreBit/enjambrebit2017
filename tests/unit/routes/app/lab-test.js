import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | app/lab', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:app/lab');
    assert.ok(route);
  });
});
