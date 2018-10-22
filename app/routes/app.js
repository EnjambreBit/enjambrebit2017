import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  i18n: service(),

  model() {
    let lang = null;
    if (localStorage.getItem("idioma")) {
      lang = localStorage.getItem("idioma");
    } else {
      let idiomasSoportados = this.get("i18n.locales");
      let idiomaUsuario = navigator.language.split("-")[0];

      if (idiomasSoportados.indexOf(idiomaUsuario) > -1) {
        lang = idiomaUsuario;
      } else {
        lang = "en";
      }
    }

    this.set("i18n.locale", lang);
  }
});
