import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({
  actions: {
    abrirMenu() {
      $(".ui.sidebar").sidebar("show");
    },
    cerrarMenu() {
      $(".ui.sidebar").sidebar("hide");
    }
  }
});
