import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("ebit-footer", "Integration | Component | ebit footer", {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{ebit-footer}}`);
  assert.ok(this.$().text());
});
