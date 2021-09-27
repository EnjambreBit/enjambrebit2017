import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({
  tagName: "",
  didInsertElement() {
    $("#code_bg")
      .delay(250)
      .fadeIn(500);
    $("#ar_bg")
      .delay(250)
      .fadeIn(500);
    $("#web_bg")
      .delay(500)
      .fadeIn(500);
    $("#3d_bg")
      .delay(750)
      .fadeIn(500);
    $("#ux_bg")
      .delay(1000)
      .fadeIn(500);
    $("#design_bg")
      .delay(1250)
      .fadeIn(500);
    $("#mobile_bg")
      .delay(650)
      .fadeIn(500);
    $("#2d_bg")
      .delay(950)
      .fadeIn(500);

    $("#enjambrebit")
      .delay(1600)
      .fadeIn(800);

    $(".sumate-al-enjambre")
      .delay(2000)
      .fadeIn(800);

    $("#2d_bg").hover(function() {
      $("#2d_text").fadeIn();
    });
    $("#2d_bg").mouseout(function() {
      $("#2d_text").fadeOut();
    });
    $("#design_bg").hover(function() {
      $("#design_text").fadeIn();
    });
    $("#design_bg").mouseout(function() {
      $("#design_text").fadeOut();
    });
    $("#ux_bg").hover(function() {
      $("#ux_text").fadeIn();
    });
    $("#ux_bg").mouseout(function() {
      $("#ux_text").fadeOut();
    });
    $("#ar_bg").hover(function() {
      $("#ar_text").fadeIn();
    });
    $("#ar_bg").mouseout(function() {
      $("#ar_text").fadeOut();
    });
    $("#code_bg").hover(function() {
      $("#code_text").fadeIn();
    });
    $("#code_bg").mouseout(function() {
      $("#code_text").fadeOut();
    });
    $("#web_bg").hover(function() {
      $("#web_text").fadeIn();
    });
    $("#web_bg").mouseout(function() {
      $("#web_text").fadeOut();
    });
    $("#3d_bg").hover(function() {
      $("#3d_text").fadeIn();
    });
    $("#3d_bg").mouseout(function() {
      $("#3d_text").fadeOut();
    });
    $("#mobile_bg").hover(function() {
      $("#mobile_text").fadeIn();
    });
    $("#mobile_bg").mouseout(function() {
      $("#mobile_text").fadeOut();
    });
  }
});
