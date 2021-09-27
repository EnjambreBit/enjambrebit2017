import Route from '@ember/routing/route';

export default Route.extend({
  tagName: "",
  activate() {
    this.transitionTo("app");
  }
});
