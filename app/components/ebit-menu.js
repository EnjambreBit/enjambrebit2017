import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    abrirMenu() {
      Ember.$(".ui.sidebar").sidebar("show");
    },
    cerrarMenu() {
      Ember.$(".ui.sidebar").sidebar("hide");
    }
  }
});
