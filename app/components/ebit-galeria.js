import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({
  tagName: "",
  didInsertElement() {
    var contenedor = $(".grid");
    var filters = {};
    contenedor.imagesLoaded(function() {
      contenedor.isotope({
        percentPosition: true,
        transitionDuration: "0.7s",
        itemSelector: ".column",
        layoutMode: "fitRows"
      });
    });

    $(
      ".isotope-filter .filter.categorias li a, .isotope-filter .filter.clientes li a"
    ).click(function() {
      var classGroup = this.parentElement.parentElement.classList[1];
      $(".filter." + classGroup + " li a").removeClass("active");
      $(this).toggleClass("active");

      var $this = $(this);

      var buttonGroup = $this.parents(".button-group");
      var filterGroup = buttonGroup.attr("data-filter-group");

      filters[filterGroup] = $this.attr("data-filter");

      var selector = $(this).attr("data-filter");
      contenedor.isotope({
        filter: selector
      });

      return false;
    });
  }
});
