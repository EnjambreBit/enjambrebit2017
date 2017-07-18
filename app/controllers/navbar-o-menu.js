import Ember from "ember";

const ANCHO_PARA_MOBILE = 768;

export default Ember.Controller.extend({
  init() {
    this.set("mostrarNavbar", window.innerWidth > ANCHO_PARA_MOBILE);

    Ember.$(window).on("resize", () => {
      var mostrarNavbar = window.innerWidth > ANCHO_PARA_MOBILE;

      if (mostrarNavbar !== this.get("mostrarNavbar")) {
        this.set("mostrarNavbar", mostrarNavbar);
      }
    });
  }
});
