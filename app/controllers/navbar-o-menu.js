import $ from 'jquery';
import Controller from '@ember/controller';

const ANCHO_PARA_MOBILE = 768;

export default Controller.extend({
  init() {
    this.set("mostrarNavbar", window.innerWidth > ANCHO_PARA_MOBILE);

    $(window).on("resize", () => {
      var mostrarNavbar = window.innerWidth > ANCHO_PARA_MOBILE;

      if (mostrarNavbar !== this.mostrarNavbar) {
        this.set("mostrarNavbar", mostrarNavbar);
      }
    });
  }
});
