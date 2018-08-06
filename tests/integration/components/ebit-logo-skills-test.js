import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("ebit-logo-skills", "Integration | Component | ebit logo skills", {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{ebit-logo-skills}}`);
  assert.ok(this.$().text());
});
