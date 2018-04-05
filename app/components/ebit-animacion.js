import Ember from "ember";

export default Ember.Component.extend({
  // Otras animaciones posibles: https://semantic-ui.com/modules/transition.html
  nombre: "scale in",

  didInsertElement() {
    let animation = this.get("nombre");
    this.$().transition({
      animation: "scale",
      duration: "2s",
      onComplete: function() {
        alert("done");
      }
    });
  }
});
