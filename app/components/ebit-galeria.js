import Ember from 'ember';

export default Ember.Component.extend({
    tagName: "",
    didInsertElement(){
    var $container = $('.isotope-grid');
    $container.imagesLoaded(function() {
      $container.isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });
    });

    $('.isotope-filter .filter li a').click(function () {

        $('.isotope-filter .filter li a').removeClass('active');

        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });
        return false;
    });
    }
});
