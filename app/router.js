import Ember from "ember";
import config from "./config/environment";

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Ember.Router.reopen({
  rutaAnterior: "",

  didTransition() {
    this._super(...arguments);

    let rutaActual = this.get("currentRouteName");
    let haCambiadoDeRuta = this.get("rutaAnterior") !== rutaActual;

    if (haCambiadoDeRuta) {
      Ember.$("html")[0].scrollTop = 0;
    }

    this.set("rutaAnterior", rutaActual);
  }
});

Router.map(function() {
  this.route("app", function() {
    this.route("quienes-somos");
    this.route("portfolio");
    this.route("lab");
    this.route("contacto");
    this.route("que-hacemos");
    this.route("sumate");
  });
});

export default Router;
