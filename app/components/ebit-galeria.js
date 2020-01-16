import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  didInsertElement() {
    var $container = Ember.$(".grid");
    $container.imagesLoaded(function() {
      $container.isotope({
        itemSelector: ".column",
        layoutMode: "fitRows"
      });
    });

    Ember.$(
      ".isotope-filter .filter.categorias li a, .isotope-filter .filter.clientes li a"
    ).click(function() {
      Ember.$(".isotope-filter .filter li a").removeClass("active");

      Ember.$(this).addClass("active");

      var selector = Ember.$(this).attr("data-filter");
      $container.isotope({
        filter: selector
      });
      return false;
    });
  }
});
