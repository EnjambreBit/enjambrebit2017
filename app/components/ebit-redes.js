import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
  i18n: service(),
  tagName: "",
  actions: {
    idiomaEs() {
      localStorage.setItem("idioma", "es");
      this.set("i18n.locale", localStorage.getItem("idioma"));
    },
    idiomaEn() {
      localStorage.setItem("idioma", "en");

      this.set("i18n.locale", localStorage.getItem("idioma"));
    }
  }
});
