import Ember from "ember";

export default Ember.Component.extend({
  // Otras animaciones posibles: https://semantic-ui.com/modules/transition.html
  nombre: "scale in",

  didInsertElement() {
    this.$().transition({
      animation: "scale",
      duration: "2s",
      onComplete: function() {
        return;
      }
    });
  }
});
