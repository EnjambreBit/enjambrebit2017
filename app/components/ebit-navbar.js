import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "",
  classNames: ["ui", "fixed", "menu", "inverted", "ebit-navbar"],
  actions: {
    toggle: function(id) {
      Ember.$(`#${id}`).sidebar("toggle");
    }
  }
});
