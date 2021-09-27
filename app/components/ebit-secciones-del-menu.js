import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({
  tagName: "",
  didInsertElement() {
    $("#sub-sidebar a").off("click");

    $("#sub-sidebar a").on("click", function() {
      $("#sub-sidebar").sidebar("hide");
    });
  }
});
