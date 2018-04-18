import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "ebit-secciones-del-menu",
  "Integration | Component | ebit secciones del menu",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ebit-secciones-del-menu}}`);

  assert.ok(this.$().text());
});
