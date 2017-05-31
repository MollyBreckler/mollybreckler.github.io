$(document).ready(function() {
  // Add jQuery here


  $(".magazine").mouseenter(function() {
    $(".magazine__image").addClass("showme");
  });

  $(".magazine").mouseleave(function() {
    $(".magazine__image").removeClass("showme");
  });
