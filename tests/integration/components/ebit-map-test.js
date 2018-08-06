import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("ebit-map", "Integration | Component | ebit map", {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{ebit-map}}`);
  assert.ok(this.$());
});
