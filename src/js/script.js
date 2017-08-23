document.addEventListener("DOMContentLoaded", function () {


  // smooth scroll
//(function(){
//  $('nav a').on('click', function(event){
//    event.preventDefault();
//    $('html, body').animate({
//      scrollTop: $( $.attr(this, 'href') ).offset().top
//    }, 2000);
//  });
//})();
  $(function() {
  $('nav a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
  // end smooth scroll

//   // social media icons
// (function(){
//   $('.social-media>a').each(function(){$(this).load('svg/' + $(this).attr('data-icon') + '.svg')});
// })();
//   // end social media icons


//   // parallax effect
// (function(){
//
//   var windowHeight = jQuery(window).height();
//   var windowScrollPosTop = jQuery(window).scrollTop();
//   var windowScrollPosBottom = windowHeight + windowScrollPosTop;
//   var windowWidth = jQuery(window).width();
//
//   // start position flag
//   var startFlagScroll = false;
//
//   function parEfFunc(){
//     windowHeight = jQuery(window).height();
//     windowScrollPosTop = jQuery(window).scrollTop();
//     windowScrollPosBottom = windowHeight + windowScrollPosTop;
//     windowWidth = jQuery(window).width();
//
//     myScrollVal(-100, 100, '.header-circle-container');
//     var iconValue = 20;
//     myScrollVal(-iconValue, iconValue, '.icon--a>img');
//     myScrollVal(-15, 15, '.icon--b>img', 'X');
//     myScrollVal(iconValue, -iconValue, '.icon--c>img');
//
//     if (windowWidth < 768){
//       myScrollVal(-10, 40, '.bg2');
//     } else {
//       myScrollVal(-10, 20, '.bg2');
//     }
//     if (startFlagScroll === false){
//       startFlagScroll = true;
//     }
//
//   };
//   parEfFunc();
//   $(window).scroll(parEfFunc);
//
//
//
//   function myScrollVal(startValue, endValue, object, direction){
//     if (direction === undefined){
//       direction = 'Y';
//     }
//
//     var objectOffset = jQuery(object).offset();
//     var objectOffsetTop = objectOffset.top;
//     var objectOffsetBottom = objectOffsetTop + jQuery(object).outerHeight();
//
//     if (windowScrollPosBottom > objectOffsetTop && windowScrollPosTop < (objectOffsetTop+$(object).height())){
//
// //      var scrollTop = $(this).scrollTop();
//       $(object).css('transform', 'translate' + direction + '(' + Math.round((startValue+(((windowScrollPosBottom-objectOffsetTop)*(endValue-startValue))/(windowHeight+(objectOffsetBottom-objectOffsetTop))))) + '%)');
//     } else if (startFlagScroll === false){
// //      $(this).scrollTop();
//       $(object).css('transform', 'translate' + direction + '(' + startValue + '%)');
//     }
//
//   };
//
// })();
//   //end parralax

// end DOMContentLoaded
});
