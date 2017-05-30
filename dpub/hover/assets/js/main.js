$(document).ready(function() {

  $('.number').mouseenter(function() {
    $('.footnote').addClass('showme');
  });

  $('.number').mouseleave(function() {
  $('.footnote').removeClass('showme');
});


  $('.cloud').mouseenter(function() {
    $('.metaheaven').addClass('orange');
  });

  $('.cloud').mouseleave(function() {
    $('.metaheaven').removeClass('orange');
  });


  $('.thumbnail').mouseleave(function() {
    $(this).toggleClass('enlarge'); 
  });
});
