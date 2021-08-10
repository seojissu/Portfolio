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
