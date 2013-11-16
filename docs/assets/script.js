/********************************************************
 *
 * Custom Javascript code
 * Written by Themelize.me (http://themelize.me)
 *
 *******************************************************/
/*global jRespond */
$(document).ready(function() {
  "use strict";
  
  // --------------------------------
  // Custom code
  // --------------------------------
  
  //Show scroll (show/hide an element on scroll)
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('[data-js=scroll-show]').addClass('scroll-show');
    }
    else {
      $('[data-js=scroll-show]').removeClass('scroll-show');
    }
  });
  
  //Stripe it (alternates even/odd classes on match elements)
  $('[data-js=stripe]').each(function() {
    var stripeTarget = $(this).data('stripe-target');
    var stripeState;

    $(this).find(stripeTarget).each(function(i) {
      stripeState = i%2===0 ? 'even' : 'odd';
      $(this).addClass(stripeState);
    });
  });
  
});