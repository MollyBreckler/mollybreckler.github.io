$(document).ready(function() {


  setTimeout(function () {
      $('.loading').removeClass('showme');
    }, 5000);

    var counter = document.getElementsByClassName("counter")[0];
      var min    = 0;
      var second = 00;
      var zeroPlaceholder = 0;
      var counterId = setInterval(function(){
                        countUp();
                      }, 1000);

      function countUp () {
          second++;
          if(second == 59){
            second = 00;
            min = min + 1;
          }
          if(second == 10){
              zeroPlaceholder = '';
          }else
          if(second == 00){
              zeroPlaceholder = 0;
          }

          counter.innerText = min+':'+zeroPlaceholder+second;
      }

      $( function() {
              $( ".draggable" ).draggable();
            } );




          setTimeout(function () {
            $('.congratulations').fadeIn('fast');
          }, 30000);

          // fade in popup

            setTimeout(function () {
              $('.meme').fadeIn('fast');
            }, 31000);

            // fade in popup

              setTimeout(function () {
                $('.penguins').fadeIn('fast');
              }, 32000);

          //   Fade in .t6a notifcation at 17second

          setTimeout(function () {
            $('.t6a').addClass('show');
          }, 33500);

        //   Fade out .t6a notifcation at 22second

          setTimeout(function () {
            $('.t6a').removeClass('show');
          }, 36500);
