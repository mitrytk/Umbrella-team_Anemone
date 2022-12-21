$(document).ready(function(){
  $('.blog__slider').slick({

   arrows: true,
   dots: false,
   adaptiveHeight: false,
   slidesToShow: 3,
   speed: 300,
   easing: 'linear',
   autoplay: true,
   autoplaySpeed:1500,
  waitForAnimate: false,
  centerMode: true,
  variableWidth: true,
  });
});
