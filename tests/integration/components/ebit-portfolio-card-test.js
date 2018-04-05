import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ebit-portfolio-card', 'Integration | Component | ebit portfolio card', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ebit-portfolio-card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ebit-portfolio-card}}
      template block text
    {{/ebit-portfolio-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
