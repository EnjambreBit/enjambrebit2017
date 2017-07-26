import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ebit-redes', 'Integration | Component | ebit redes', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ebit-redes}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ebit-redes}}
      template block text
    {{/ebit-redes}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
