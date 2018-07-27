import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  didInsertElement() {
    Ember.$("#code_bg")
      .delay(250)
      .fadeIn(500);
    Ember.$("#ar_bg")
      .delay(250)
      .fadeIn(500);
    Ember.$("#web_bg")
      .delay(500)
      .fadeIn(500);
    Ember.$("#3d_bg")
      .delay(750)
      .fadeIn(500);
    Ember.$("#ux_bg")
      .delay(1000)
      .fadeIn(500);
    Ember.$("#design_bg")
      .delay(1250)
      .fadeIn(500);
    Ember.$("#mobile_bg")
      .delay(650)
      .fadeIn(500);
    Ember.$("#2d_bg")
      .delay(950)
      .fadeIn(500);

    Ember.$("#enjambrebit")
      .delay(1600)
      .fadeIn(800);

    Ember.$("#2d_bg").hover(function(e) {
      Ember.$("#2d_text").fadeIn();
    });
    Ember.$("#2d_bg").mouseout(function(e) {
      Ember.$("#2d_text").fadeOut();
    });
    Ember.$("#design_bg").hover(function(e) {
      Ember.$("#design_text").fadeIn();
    });
    Ember.$("#design_bg").mouseout(function(e) {
      Ember.$("#design_text").fadeOut();
    });
    Ember.$("#ux_bg").hover(function(e) {
      Ember.$("#ux_text").fadeIn();
    });
    Ember.$("#ux_bg").mouseout(function(e) {
      Ember.$("#ux_text").fadeOut();
    });
    Ember.$("#ar_bg").hover(function(e) {
      Ember.$("#ar_text").fadeIn();
    });
    Ember.$("#ar_bg").mouseout(function(e) {
      Ember.$("#ar_text").fadeOut();
    });
    Ember.$("#code_bg").hover(function(e) {
      Ember.$("#code_text").fadeIn();
    });
    Ember.$("#code_bg").mouseout(function(e) {
      Ember.$("#code_text").fadeOut();
    });
    Ember.$("#web_bg").hover(function(e) {
      Ember.$("#web_text").fadeIn();
    });
    Ember.$("#web_bg").mouseout(function(e) {
      Ember.$("#web_text").fadeOut();
    });
    Ember.$("#3d_bg").hover(function(e) {
      Ember.$("#3d_text").fadeIn();
    });
    Ember.$("#3d_bg").mouseout(function(e) {
      Ember.$("#3d_text").fadeOut();
    });
    Ember.$("#mobile_bg").hover(function(e) {
      Ember.$("#mobile_text").fadeIn();
    });
    Ember.$("#mobile_bg").mouseout(function(e) {
      Ember.$("#mobile_text").fadeOut();
    });
  }
});
