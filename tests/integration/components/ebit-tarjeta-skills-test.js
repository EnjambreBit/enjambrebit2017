import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("ebit-tarjeta-skills", "Integration | Component | ebit tarjeta skills", {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{ebit-tarjeta-skills}}`);
  assert.ok(this.$().text());
});
