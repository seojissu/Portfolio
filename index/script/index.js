$(document).ready(function () {
  //리사이징 할때마다 새로고침
  var lastWidth = $(window).width();
  $(window).resize(function () {
      if ($(window).width() != lastWidth) {
          location.reload();
          lastWidth = $(window).width();
          return false;
      }
  });
});

var swiper = new Swiper(".mySwiper", {
  mousewheel: true,
  // spaceBetween: 50,
  direction: "vertical",
  slidesPerView: 1,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChange: function () {
      $('.box').removeClass('active');
      $('.box').addClass('active');
    }
  }
});
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
  
});

$(".tabV ul li").click(function(){
  $(this).addClass('on').siblings().removeClass('on');
  $(".content").removeClass('on');
  $("#"+$(this).data('id')).addClass('on');
  return false;
});

$(".tabV ul .con2 .button").click(function(){
  draw(80, '.pie-chart1', 'orangered');
  draw(85, '.pie-chart2', 'skyblue');
  draw(50, '.pie-chart3', 'rgb(244, 244, 0)');
  draw(75, '.pie-chart4', 'darkblue');
  draw(70, '.pie-chart5', 'orange');
});

function draw(max, classname, colorname){
  var i=1;
   var func1 = setInterval(function(){
     if(i<max){
         color1(i,classname,colorname);
         i++;
     } else{
       clearInterval(func1);
     }
   },10);
}
function color1(i, classname,colorname){
  $(classname).css({
       "background":"conic-gradient("+colorname+" 0% "+i+"%, rgb(212, 212, 212) "+i+"% 100%)"
  });
}
