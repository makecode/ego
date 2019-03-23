// libs
import './rateit';

// styles
import 'ress';
import './styles/index.sass';

$(document).ready(function() {

  (function menuToggling() {
    $('#hamburger').click(function(){
      $('.mobile-menu').toggleClass('is-open');
      $('.header__left').toggleClass('is-menu-open');
    });
  }());

});
