import Ember from "ember";

export default Ember.Route.extend({
  tagName: "",
  activate() {
    this.transitionTo("app");
  }
});
