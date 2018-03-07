import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ebit-tarjeta-skills', 'Integration | Component | ebit tarjeta skills', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ebit-tarjeta-skills}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ebit-tarjeta-skills}}
      template block text
    {{/ebit-tarjeta-skills}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
