import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  didInsertElement() {
    var contenedor = Ember.$(".grid");
    var filters = {};
    contenedor.imagesLoaded(function() {
      contenedor.isotope({
        percentPosition: true,
        transitionDuration: "0.7s",
        itemSelector: ".column",
        layoutMode: "fitRows"
      });
    });

    Ember.$(
      ".isotope-filter .filter.categorias li a, .isotope-filter .filter.clientes li a"
    ).click(function() {
      var classGroup = this.parentElement.parentElement.classList[1];
      $(".filter." + classGroup + " li a").removeClass("active");
      $(this).toggleClass("active");

      var $this = $(this);

      var buttonGroup = $this.parents(".button-group");
      var filterGroup = buttonGroup.attr("data-filter-group");

      filters[filterGroup] = $this.attr("data-filter");

      var selector = Ember.$(this).attr("data-filter");
      contenedor.isotope({
        filter: selector
      });

      return false;
    });
  }
});
