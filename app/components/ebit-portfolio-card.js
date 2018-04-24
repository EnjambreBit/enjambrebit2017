import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  tecIcons: Ember.computed("tecnologias", function() {
    let tecs = this.get("tecnologias").split(", ");
    return tecs;
  }),
  didInsertElement() {
    Ember.$(".fluid.card .image.ebit-blog").dimmer({
      on: "hover"
    });
  }
});
