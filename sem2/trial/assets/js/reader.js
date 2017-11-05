$(document).ready(function() {


// Add jQuery here

// menu spinning question mark
//$('.nav').click(function() {
//   $('.menu').toggleClass('showme');
// });

$('.dummylink').click(function() {
   $('.loading').addClass('showme');

   setTimeout(function () {
     $('.loading').removeClass('showme');
   }, 5000);

//click fake link game over appears

////  $('.dummylink').on('click', function() {
////            $('.gameover').addClass('active');

            // Start timeout images

//            setTimeout(function () {
//              $('.p1').fadeIn('fast');
//            }, 200);

//            setTimeout(function () {
//              $('.p1').fadeIn('fast');
//            }, 400);

//            setTimeout(function () {
//              $('.p1').fadeIn('fast');
//            }, 500);

//            setTimeout(function () {
//              $('.p1').fadeIn('fast');
//            }, 600);

  });
            // End timeout images

// counter
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

      // rollover counter message //
      $('.counter').mouseenter(function() {
        $('.counter__message').addClass('showme');
      });

      $('.counter').mouseleave(function() {
        $('.counter__message').removeClass('showme');
      });

      // rollover downarrow scroll message //
      $('.downarrow').mouseenter(function() {
        $('.scroll').addClass('showme');
      });

      $('.downarrow').mouseenter(function() {
        $('.scroll').removeClass('showme');
      });

$( function() {
        $( ".draggable" ).draggable();
      } );

  //click chapter number
  $('.link__one').click(function() {
     $('.footnote__one').toggleClass('showme');
   });

   $('.link__two').click(function() {
      $('.footnote__two').toggleClass('showme');
    });

   $('.link__three').click(function() {
      $('.footnote__three').toggleClass('showme');
    });

    $('.link__four').click(function() {
       $('.footnote__four').toggleClass('showme');
     });

     $('.link__five').click(function() {
        $('.footnote__five').toggleClass('showme');
      });

  // Copy setTimeout, and change the 1000ms. You can target divs with the $ 'sign' and single quotes. Then try fadeIn, fadeOut, addClass, removeClass.

  //  FADE IN TIMED NOTIFICATIONS:

   //   Fade in .t1 notifcation at 3second

    setTimeout(function () {
      $('.t1').addClass('show');
    }, 4000);

  //   Fade out .t1 notifcation at 7second **fade out not working for all

    setTimeout(function () {
      $('.t1').removeClass('show');
    }, 8000);

  //   Fade in .t2 notifcation at 10second

    setTimeout(function () {
      $('.t2').addClass('show');
    }, 9500);

  //   Fade out .t2 notifcation at 16second

    setTimeout(function () {
      $('.t2').removeClass('show');
    }, 14500);

    //   Fade in .t3 notifcation at 17second

    setTimeout(function () {
      $('.t3').addClass('showme');
    }, 12000);

  //   Fade out .t3 notifcation at 22second

    setTimeout(function () {
      $('.t3').removeClass('showme');
    }, 14500);

    //   Fade in .t4 notifcation at 17second

    setTimeout(function () {
      $('.t4').addClass('show');
    }, 16000);

  //   Fade out .t4 notifcation at 22second

    setTimeout(function () {
        $('.t4').removeClass('show');
    }, 18000);

    //   Fade in .t5 notifcation at 17second

    setTimeout(function () {
      $('.t5').addClass('show');
    }, 22000);

  //   Fade out .t5 notifcation at 22second

    setTimeout(function () {
      $('.t5').removeClass('show');
    }, 25000);

    //   addClass new width notifcation at 12second

      setTimeout(function () {
        $('.text').addClass('new__width');
        $('.intro').addClass('new__width');
        $('.heading').addClass('new__width');
      }, 23000);

    //   Fade in .t6 notifcation at 17second

    setTimeout(function () {
      $('.t6').addClass('show');
    }, 26000);

  //   Fade out .t6 notifcation at 22second

    setTimeout(function () {
      $('.t6').removeClass('show');
    }, 29000);

  // fade in popup

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

    //   Fade in .t7 notifcation at 17second

    setTimeout(function () {
      $('.t7').addClass('show');
    }, 38000);

  //   Fade out .t7 notifcation at 22second

    setTimeout(function () {
      $('.t7').removeClass('show');
    }, 44000);

    //   Fade in .t8 notifcation at 17second

    setTimeout(function () {
      $('.t8').addClass('showme');
    }, 40000);

  //   Fade out .t8 notifcation at 22second

    setTimeout(function () {
      $('.t8').removeClass('showme');
    }, 44000);

    //   Fade in .t9 notifcation at 17second

    setTimeout(function () {
      $('.t9').addClass('showme');
    }, 42000);

  //   Fade out .t9 notifcation at 22second

    setTimeout(function () {
      $('.t9').removeClass('showme');
    }, 44000);

    //   Fade in .t10 notifcation at 17second

    setTimeout(function () {
      $('.t10').addClass('show');
    }, 45000);

  //   Fade out .t10 notifcation at 22second

    setTimeout(function () {
      $('.t10').removeClass('show');
    }, 49000);

    //   Fade in .gym notifcation

    setTimeout(function () {
      $('.gym').addClass('show');
    }, 46500);

  //   Fade out .gym notifcation

    setTimeout(function () {
      $('.gym').removeClass('show');
    }, 49000);

    //   Fade in .t11 notifcation

    setTimeout(function () {
      $('.t11').addClass('showme');
    }, 47500);

  //   Fade out .t11 notifcation

    setTimeout(function () {
      $('.t11').removeClass('showme');
    }, 49000);

    //   Fade in .t12 notifcation

    setTimeout(function () {
      $('.t12').addClass('show');
    }, 50000);

    // fade in popup

      setTimeout(function () {
        $('.people').fadeIn('fast');
      }, 51000);

      // fade in popup

        setTimeout(function () {
          $('.congratulations3').fadeIn('fast');
        }, 52000);

  //   Fade out .t12 notifcation

    setTimeout(function () {
      $('.t12').removeClass('show');
    }, 53000);

    //   Fade in .update notifcation ***slide in not working

    setTimeout(function () {
      $('.update').addClass('show');
    }, 55000);

  //   Fade out .update notifcation ***slide out/fade out not working

    setTimeout(function () {
      $('.update').removeClass('show');
    }, 58500);

    //   Fade in .lowbatt notifcation ***slide in not working

    setTimeout(function () {
      $('.lowbatt').addClass('show');
    }, 56000);

  //   Fade out .lowbatt notifcation ***slide out/fade out not working

    setTimeout(function () {
      $('.lowbatt').removeClass('show');
    }, 58500);

    //   Fade in .t13 notifcation

    setTimeout(function () {
      $('.t13').addClass('show');
    }, 59500);

  //   Fade out .t13 notifcation

    setTimeout(function () {
      $('.t13').removeClass('show');
    }, 61500);

    //   Fade in .t13a notifcation

    setTimeout(function () {
      $('.t13a').addClass('show');
    }, 63000);

  //   Fade out .t13a notifcation

    setTimeout(function () {
      $('.t13a').removeClass('show');
    }, 65000);

    // fade in popup

      setTimeout(function () {
        $('.instagram').fadeIn('fast');
      }, 67000);

      // fade in popup

        setTimeout(function () {
          $('.buzzfeed').fadeIn('fast');
        }, 67000);

    //   Fade in .t14 notifcation

    setTimeout(function () {
      $('.t14').addClass('show');
    }, 69000);

    // fade in popup

      setTimeout(function () {
        $('.testosterone').fadeIn('fast');
      }, 70000);

  //   Fade out .t14 notifcation

    setTimeout(function () {
      $('.t14').removeClass('show');
    }, 72000);

    // fade in popup

      setTimeout(function () {
        $('.flash').fadeIn('fast');
      }, 73000);

      // fade in popup

        setTimeout(function () {
          $('.retailers').fadeIn('fast');
        }, 74000);

        // fade in popup

          setTimeout(function () {
            $('.christian').fadeIn('fast');
          }, 74500);


    //   Fade in .t15 notifcation

    setTimeout(function () {
      $('.t15').addClass('show');
    }, 77000);

  //   Fade out .t15 notifcation

    setTimeout(function () {
      $('.t15').removeClass('show');
    }, 82000);

    //   Fade in .t16 notifcation

    setTimeout(function () {
      $('.t16').addClass('showme');
    }, 78000);

  //   Fade out .t16 notifcation

    setTimeout(function () {
      $('.t16').removeClass('showme');
    }, 82000);

    //   Fade in .t17 notifcation

    setTimeout(function () {
      $('.t17').addClass('showme');
    }, 80000);

  //   Fade out .t17 notifcation

    setTimeout(function () {
      $('.t17').removeClass('showme');
    }, 82000);

    // fade in popup

      setTimeout(function () {
        $('.derma').fadeIn('fast');
      }, 81000);

    //   Fade in .t18 notifcation

    setTimeout(function () {
      $('.t18').addClass('show');
    }, 84000);

  //   Fade out .t18 notifcation

    setTimeout(function () {
      $('.t18').removeClass('show');
    }, 88000);

    //   Fade in .t19 notifcation

    setTimeout(function () {
      $('.t19').addClass('showme');
    }, 86000);

  //   Fade out .t19 notifcation

    setTimeout(function () {
      $('.t19').removeClass('showme');
    }, 88000);

    // fade in popup

      setTimeout(function () {
        $('.cute').fadeIn('fast');
      }, 89000);

    //   Fade in .t20 notifcation

    setTimeout(function () {
      $('.t20').addClass('show');
    }, 90000);

  //   Fade out .t20 notifcation

    setTimeout(function () {
      $('.t20').removeClass('show');
    }, 95000);

    //   Fade in .t21 notifcation

    setTimeout(function () {
      $('.t21').addClass('showme');
    }, 92000);

  //   Fade out .t21 notifcation

    setTimeout(function () {
      $('.t21').removeClass('showme');
    }, 95000);

    //   Fade in .t22 notifcation

    setTimeout(function () {
      $('.t22').addClass('show');
    },  97000);

  //   Fade out .t22 notifcation

    setTimeout(function () {
      $('.t22').removeClass('show');
    }, 100000);

    // fade in popup

      setTimeout(function () {
        $('.congratulations4').fadeIn('fast');
      }, 102000);

    //   Fade in .t23 notifcation

    setTimeout(function () {
      $('.t23').addClass('show');
    },  104000);

  //   Fade out .t23 notifcation

    setTimeout(function () {
      $('.t23').removeClass('show');
    }, 107000);

    //   Fade in .t24 notifcation

    setTimeout(function () {
      $('.t24').addClass('show');
    },  108000);

    // fade in popup

      setTimeout(function () {
        $('.celebrities').fadeIn('fast');
      }, 108000);

  //   Fade out .t24 notifcation

    setTimeout(function () {
      $('.t24').removeClass('show');
    }, 113000);

    //   Fade in .t25 notifcation

    setTimeout(function () {
      $('.t25').addClass('showme');
    },  110000);

  //   Fade out .t25 notifcation

    setTimeout(function () {
      $('.t25').removeClass('showme');
    }, 113000);

    // fade in popup

      setTimeout(function () {
        $('.chloe').fadeIn('fast');
      }, 114000);

      // fade in popup

        setTimeout(function () {
          $('.wine').fadeIn('fast');
        }, 116000);

    //   Fade in .fb1 notifcation

    setTimeout(function () {
      $('.fb1').fadeIn('fast');
    }, 118000);

  //   Fade out .fb1 notifcation

    setTimeout(function () {
      $('.fb1').fadeOut('fast');
    }, 121000);

    //   Fade in .t26 notifcation

    setTimeout(function () {
      $('.t26').addClass('show');
    }, 122000);

  //   Fade out .t26 notifcation

    setTimeout(function () {
      $('.t26').removeClass('show')
    }, 126000);

    //   Fade in .fb2 notifcation

    setTimeout(function () {
      $('.fb2').fadeIn('fast');
    }, 123000);

  //   Fade out .fb2 notifcation

    setTimeout(function () {
      $('.fb2').fadeOut('fast');
    }, 126000);

    //   Fade in .fb3 notifcation

    setTimeout(function () {
      $('.fb3').fadeIn('fast');
    }, 127000);

  //   Fade out .fb3 notifcation

    setTimeout(function () {
      $('.fb3').fadeOut('fast');
    }, 133000);

    //   Fade in .fb4 notifcation

    setTimeout(function () {
      $('.fb4').fadeIn('fast');
    }, 128000);

  //   Fade out .fb4 notifcation

    setTimeout(function () {
      $('.fb4').fadeOut('fast');
    }, 133000);

    // fade in popup

      setTimeout(function () {
        $('.hes52').fadeIn('fast');
      }, 129000);

      // fade in popup

        setTimeout(function () {
          $('.backflip').fadeIn('fast');
        }, 129500);

    //   Fade in .fb5 notifcation

    setTimeout(function () {
      $('.fb5').fadeIn('fast');
    }, 129000);

  //   Fade out .fb5 notifcation

    setTimeout(function () {
      $('.fb5').fadeOut('fast');
    }, 133000);

    //   Fade in .fb6 notifcation

    setTimeout(function () {
      $('.fb6').fadeIn('fast');
    }, 130000);

  //   Fade out .fb6 notifcation

    setTimeout(function () {
      $('.fb6').fadeOut('fast');
    }, 133000);

    // fade in popup

      setTimeout(function () {
        $('.arthur').fadeIn('fast');
      }, 133000);

    //   Fade in .t27 notifcation

    setTimeout(function () {
      $('.t27').addClass('show');
    }, 134000);

  //   Fade out .t27 notifcation

    setTimeout(function () {
      $('.t27').removeClass('show');
    }, 137000);

    //   Fade in .fb7 notifcation

    setTimeout(function () {
      $('.fb7').fadeIn('fast');
    }, 135000);

  //   Fade out .fb7 notifcation

    setTimeout(function () {
      $('.fb7').fadeOut('fast');
    }, 139000);

    //   Fade in .fb8 notifcation

    setTimeout(function () {
      $('.fb8').fadeIn('fast');
    }, 136000);

  //   Fade out .fb8 notifcation

    setTimeout(function () {
      $('.fb8').fadeOut('fast');
    }, 139000);

    // fade in popup

      setTimeout(function () {
        $('.fat').fadeIn('fast');
      }, 137000);

      // fade in popup

        setTimeout(function () {
          $('.flowers').fadeIn('fast');
        }, 137000);

    //   Fade in .t28 notifcation

    setTimeout(function () {
      $('.t28').addClass('show');
    }, 140000);

  //   Fade out .t28 notifcation

    setTimeout(function () {
      $('.t28').removeClass('show');
    }, 143000);

    //   Fade in .t29 notifcation

    setTimeout(function () {
      $('.t29').addClass('show');
    }, 144000);

  //   Fade out .t29 notifcation

    setTimeout(function () {
      $('.t29').removeClass('show');
    }, 149000);

    //   Fade in .fb9 notifcation

    setTimeout(function () {
      $('.fb9').fadeIn('fast');
    }, 145000);

  //   Fade out .fb9 notifcation

    setTimeout(function () {
      $('.fb9').fadeOut('fast');
    }, 149000);

    //   Fade in .fb10 notifcation

    setTimeout(function () {
      $('.fb10').fadeIn('fast');
    }, 146000);

  //   Fade out .fb10 notifcation

    setTimeout(function () {
      $('.fb10').fadeOut('fast');
    }, 149000);

    // fade in popup

      setTimeout(function () {
        $('.nicolascage').fadeIn('fast');
      }, 146000);

    //   Fade in .t30 notifcation

    setTimeout(function () {
      $('.t30').addClass('show');
    }, 155000);

  //   Fade out .t30 notifcation

    setTimeout(function () {
      $('.t30').removeClass('show');
    }, 158000);

    //   Fade in .t31 notifcation

    setTimeout(function () {
      $('.t31').addClass('show');
    }, 164000);

  //   Fade out .t31 notifcation

    setTimeout(function () {
      $('.t31').removeClass('show');
    }, 167000);

    //  shrink text

      setTimeout(function () {
        $('.text').addClass('new__size');
        $('.chapter').addClass('shrink');
        $('.intro').addClass('shrink');
        $('.heading').addClass('shrink');
        $('.new').addClass('shrink');
        $('.gif').addClass('shrink');
        $('.footnote').addClass('shrink');
        $('.downarrow').addClass('shrink');
      }, 165000);
//
      //   Fade in .t32 notifcation

      setTimeout(function () {
        $('.t32').addClass('show');
      }, 169000);

    //   Fade out .t32 notifcation

      setTimeout(function () {
        $('.t32').removeClass('show');
      }, 173000);

      //  regrow text

        setTimeout(function () {
          $('.text').removeClass('new__size');
          $('.chapter').removeClass('shrink');
          $('.intro').removeClass('shrink');
          $('.heading').removeClass('shrink');
          $('.new').removeClass('shrink');
          $('.gif').removeClass('shrink');
          $('.footnote').removeClass('shrink');
          $('.downarrow').removeClass('shrink');
        }, 170000);

        // fade in popup

          setTimeout(function () {
            $('.congratulations2').fadeIn('fast');
          }, 172000);

        //   Fade in .t32b notifcation

        setTimeout(function () {
          $('.t32b').addClass('show');
        }, 176000);

      //   Fade out .t32b notifcation

        setTimeout(function () {
          $('.t32b').removeClass('show');
        }, 179000);

        //   Fade in .t33 notifcation

        setTimeout(function () {
          $('.t33').addClass('show');
        }, 183000);

        // fade in popup

          setTimeout(function () {
            $('.pill').fadeIn('fast');
          }, 184000);

          // fade in popup

            setTimeout(function () {
              $('.animal').fadeIn('fast');
            }, 184000);

      //   Fade out .t33 notifcation

        setTimeout(function () {
          $('.t33').removeClass('show');
        }, 186000);

        //   Fade in .t34 notifcation

        setTimeout(function () {
          $('.t34').addClass('show');
        }, 187000);

      //   Fade out .t34 notifcation

        setTimeout(function () {
          $('.t34').removeClass('show');
        }, 190000);

        //   Fade in .t35 notifcation

        setTimeout(function () {
          $('.t35').addClass('show');
        }, 197000);

      //   Fade out .t35 notifcation

        setTimeout(function () {
          $('.t35').removeClass('show');
        }, 201000);


        //  shrink text

          setTimeout(function () {
            $('.text').addClass('new__size');
            $('.chapter').addClass('shrink');
            $('.intro').addClass('shrink');
            $('.heading').addClass('shrink');
            $('.downarrow').addClass('shrink');
          }, 198000);

          //  regrow text

            setTimeout(function () {
              $('.text').removeClass('new__size');
              $('.chapter').removeClass('shrink');
              $('.intro').removeClass('shrink');
              $('.heading').removeClass('shrink');
              $('.downarrow').removeClass('shrink');
            }, 199000);

            //  shrink text

              setTimeout(function () {
                $('.text').addClass('new__size');
                $('.chapter').addClass('shrink');
                $('.intro').addClass('shrink');
                $('.heading').addClass('shrink');
                $('.downarrow').addClass('shrink');
              }, 200000);

              //  regrow text

                setTimeout(function () {
                  $('.text').removeClass('new__size');
                  $('.chapter').removeClass('shrink');
                  $('.intro').removeClass('shrink');
                  $('.heading').removeClass('shrink');
                  $('.downarrow').removeClass('shrink');
                }, 201000);

                //  shrink text

                  setTimeout(function () {
                    $('.text').addClass('new__size');
                    $('.chapter').addClass('shrink');
                    $('.intro').addClass('shrink');
                    $('.heading').addClass('shrink');
                    $('.downarrow').addClass('shrink');
                  }, 202000);

                  //  regrow text

                    setTimeout(function () {
                      $('.text').removeClass('new__size');
                      $('.chapter').removeClass('shrink');
                      $('.intro').removeClass('shrink');
                      $('.heading').removeClass('shrink');
                      $('.downarrow').removeClass('shrink');
                    }, 203000);

                    //  shrink text

                      setTimeout(function () {
                        $('.text').addClass('new__size');
                        $('.chapter').addClass('shrink');
                        $('.intro').addClass('shrink');
                        $('.heading').addClass('shrink');
                        $('.downarrow').addClass('shrink');
                      }, 204000);

                      //  regrow text

                        setTimeout(function () {
                          $('.text').removeClass('new__size');
                          $('.chapter').removeClass('shrink');
                          $('.intro').removeClass('shrink');
                          $('.heading').removeClass('shrink');
                          $('.downarrow').removeClass('shrink');
                        }, 205000);

                        //  shrink text

                          setTimeout(function () {
                            $('.text').addClass('new__size');
                            $('.chapter').addClass('shrink');
                            $('.intro').addClass('shrink');
                            $('.heading').addClass('shrink');
                            $('.downarrow').addClass('shrink');
                          }, 206000);

                          //  regrow text

                            setTimeout(function () {
                              $('.text').removeClass('new__size');
                              $('.chapter').removeClass('shrink');
                              $('.intro').removeClass('shrink');
                              $('.heading').removeClass('shrink');
                              $('.downarrow').removeClass('shrink');
                            }, 207000);

                            //  shrink text

                              setTimeout(function () {
                                $('.text').addClass('new__size');
                                $('.chapter').addClass('shrink');
                                $('.intro').addClass('shrink');
                                $('.heading').addClass('shrink');
                                $('.downarrow').addClass('shrink');
                              }, 208000);

                              //  regrow text

                                setTimeout(function () {
                                  $('.text').removeClass('new__size');
                                  $('.chapter').removeClass('shrink');
                                  $('.intro').removeClass('shrink');
                                  $('.heading').removeClass('shrink');
                                  $('.downarrow').removeClass('shrink');
                                }, 209000);

                                //  shrink text

                                  setTimeout(function () {
                                    $('.text').addClass('new__size');
                                    $('.chapter').addClass('shrink');
                                    $('.intro').addClass('shrink');
                                    $('.heading').addClass('shrink');
                                    $('.downarrow').addClass('shrink');
                                  }, 210000);

                                  //  regrow text

                                    setTimeout(function () {
                                      $('.text').removeClass('new__size');
                                      $('.chapter').removeClass('shrink');
                                      $('.intro').removeClass('shrink');
                                      $('.heading').removeClass('shrink');
                                      $('.downarrow').removeClass('shrink');
                                    }, 211000);

                                    //  shrink text

                                      setTimeout(function () {
                                        $('.text').addClass('new__size');
                                        $('.chapter').addClass('shrink');
                                        $('.intro').addClass('shrink');
                                        $('.heading').addClass('shrink');
                                        $('.downarrow').addClass('shrink');
                                      }, 212000);

                                      //  regrow text

                                        setTimeout(function () {
                                          $('.text').removeClass('new__size');
                                          $('.chapter').removeClass('shrink');
                                          $('.intro').removeClass('shrink');
                                          $('.heading').removeClass('shrink');
                                          $('.downarrow').removeClass('shrink');
                                        }, 213000);

                                        //  shrink text

                                          setTimeout(function () {
                                            $('.text').addClass('new__size');
                                            $('.chapter').addClass('shrink');
                                            $('.intro').addClass('shrink');
                                            $('.heading').addClass('shrink');
                                            $('.downarrow').addClass('shrink');
                                          }, 214000);

                                          //  regrow text

                                            setTimeout(function () {
                                              $('.text').removeClass('new__size');
                                              $('.chapter').removeClass('shrink');
                                              $('.intro').removeClass('shrink');
                                              $('.heading').removeClass('shrink');
                                              $('.downarrow').removeClass('shrink');
                                            }, 215000);

                                            //  shrink text

                                              setTimeout(function () {
                                                $('.text').addClass('new__size');
                                                $('.chapter').addClass('shrink');
                                                $('.intro').addClass('shrink');
                                                $('.heading').addClass('shrink');
                                                $('.downarrow').addClass('shrink');
                                              }, 216000);

                                              //  regrow text

                                                setTimeout(function () {
                                                  $('.text').removeClass('new__size');
                                                  $('.chapter').removeClass('shrink');
                                                  $('.intro').removeClass('shrink');
                                                  $('.heading').removeClass('shrink');
                                                  $('.downarrow').removeClass('shrink');
                                                }, 217000);

                                                //  shrink text

                                                  setTimeout(function () {
                                                    $('.text').addClass('new__size');
                                                    $('.chapter').addClass('shrink');
                                                    $('.intro').addClass('shrink');
                                                    $('.heading').addClass('shrink');
                                                    $('.downarrow').addClass('shrink');
                                                  }, 218000);

                                                  //  regrow text

                                                    setTimeout(function () {
                                                      $('.text').removeClass('new__size');
                                                      $('.chapter').removeClass('shrink');
                                                      $('.intro').removeClass('shrink');
                                                      $('.heading').removeClass('shrink');
                                                      $('.downarrow').removeClass('shrink');
                                                    }, 219000);

                                                    //  shrink text

                                                      setTimeout(function () {
                                                        $('.text').addClass('new__size');
                                                        $('.chapter').addClass('shrink');
                                                        $('.intro').addClass('shrink');
                                                        $('.heading').addClass('shrink');
                                                        $('.downarrow').addClass('shrink');
                                                      }, 220000);

                                                      //  regrow text

                                                        setTimeout(function () {
                                                          $('.text').removeClass('new__size');
                                                          $('.chapter').removeClass('shrink');
                                                          $('.intro').removeClass('shrink');
                                                          $('.heading').removeClass('shrink');
                                                          $('.downarrow').removeClass('shrink');
                                                        }, 221000);

                                                        //  shrink text

                                                          setTimeout(function () {
                                                            $('.text').addClass('new__size');
                                                            $('.chapter').addClass('shrink');
                                                            $('.intro').addClass('shrink');
                                                            $('.heading').addClass('shrink');
                                                            $('.downarrow').addClass('shrink');
                                                          }, 222000);

                                                          //  regrow text

                                                            setTimeout(function () {
                                                              $('.text').removeClass('new__size');
                                                              $('.chapter').removeClass('shrink');
                                                              $('.intro').removeClass('shrink');
                                                              $('.heading').removeClass('shrink');
                                                              $('.downarrow').removeClass('shrink');
                                                            }, 223000);


      // fade in popup

        setTimeout(function () {
          $('.congratulations').fadeIn('fast');
        }, 200000);

        // fade in popup

          setTimeout(function () {
            $('.meme').fadeIn('fast');
          }, 200000);

          // fade in popup

            setTimeout(function () {
              $('.penguins').fadeIn('fast');
            }, 201000);

            // fade in popup

              setTimeout(function () {
                $('.people').fadeIn('fast');
              }, 202500);

              // fade in popup

                setTimeout(function () {
                  $('.congratulations3').fadeIn('fast');
                }, 203000);

                // fade in popup

                  setTimeout(function () {
                    $('.instagram').fadeIn('fast');
                  }, 204500);

                  // fade in popup

                    setTimeout(function () {
                      $('.buzzfeed').fadeIn('fast');
                    }, 204000);

                    // fade in popup

                      setTimeout(function () {
                        $('.testosterone').fadeIn('fast');
                      }, 205000);

                      // fade in popup

                        setTimeout(function () {
                          $('.flash').fadeIn('fast');
                        }, 205500);

                        // fade in popup

                          setTimeout(function () {
                            $('.retailers').fadeIn('fast');
                          }, 206000);

                          // fade in popup

                            setTimeout(function () {
                              $('.christian').fadeIn('fast');
                            }, 206500);

                            // fade in popup

                              setTimeout(function () {
                                $('.cute').fadeIn('fast');
                              }, 207000);

                              // fade in popup

                                setTimeout(function () {
                                  $('.derma').fadeIn('fast');
                                }, 207500);

                                // fade in popup

                                  setTimeout(function () {
                                    $('.congratulations4').fadeIn('fast');
                                  }, 208000);

                                  // fade in popup

                                    setTimeout(function () {
                                      $('.celebrities').fadeIn('fast');
                                    }, 208500);

                                    // fade in popup

                                      setTimeout(function () {
                                        $('.chloe').fadeIn('fast');
                                      }, 209000);

                                      // fade in popup

                                        setTimeout(function () {
                                          $('.wine').fadeIn('fast');
                                        }, 209500);

                                        // fade in popup

                                          setTimeout(function () {
                                            $('.hes52').fadeIn('fast');
                                          }, 210000);

                                          // fade in popup

                                            setTimeout(function () {
                                              $('.backflip').fadeIn('fast');
                                            }, 211000);

                                            // fade in popup

                                              setTimeout(function () {
                                                $('.arthur').fadeIn('fast');
                                              }, 212000);

                                              // fade in popup

                                                setTimeout(function () {
                                                  $('.fat').fadeIn('fast');
                                                }, 213000);

                                                // fade in popup

                                                  setTimeout(function () {
                                                    $('.flowers').fadeIn('fast');
                                                  }, 213500);

                                                  // fade in popup

                                                    setTimeout(function () {
                                                      $('.nicolascage').fadeIn('fast');
                                                    }, 214000);

                                                    // fade in popup

                                                      setTimeout(function () {
                                                        $('.congratulations2').fadeIn('fast');
                                                      }, 214500);

                                                      // fade in popup

                                                        setTimeout(function () {
                                                          $('.pill').fadeIn('fast');
                                                        }, 215000);

                                                        // fade in popup

                                                          setTimeout(function () {
                                                            $('.animal').fadeIn('fast');
                                                          }, 216000);



  // clear whole page- end of reader

      setTimeout(function () {
        $('.clear').addClass('show');
      }, 205000);

  //   Remove p1 and all notifications on click

  $('.notification, .draggable, notification__appear, .notification__image').on('click', function() {
            $(this).remove();
          });
  });




  // stolen scrollchecker
  var checkScrollSpeed = (function(settings){
      settings = settings || {};

      var lastPos, newPos, timer, delta,
          delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

      function clear() {
        lastPos = null;
        delta = 0;
      }

      clear();

      return function(){
        newPos = window.scrollY;
        if ( lastPos != null ){ // && newPos < maxScroll
          delta = newPos -  lastPos;
        }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        return delta;
      };
  })();

  // listen to "scroll" event
  window.onscroll = function(){


    var speed = checkScrollSpeed();
  // if speed is faster than 30ms, adjust if needed

    if (speed > 110) {
      $('.slowdown').addClass('show');
    }
    if (speed < 30) {
      $('.slowdown').removeClass('show');
    }


  };
