$(document).ready(function() {
  // Add jQuery here



    $(".birthday").mouseenter(function() {
      $(".birthday__image").addClass("showme");
    });

    $(".birthday").mouseleave(function() {
      $(".birthday__image").removeClass("showme");
    });
