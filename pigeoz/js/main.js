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

$(document).ready(function () {
  $(".title a").click(function (event) {
    if ($(this).hasClass("on")) {
      $(this).add(".list").removeClass("on");
    } else {
      $(this).add(".list").addClass("on");
    }
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
  $("html").click(function () {
    $(".title a").add(".list").removeClass("on");
  });
});

$(document).ready(function () {
  $(".sec1 .img").mousemove(function (event) {
    var x = event.pageX;
    var y = event.pageY;
    $(".tip").css({ left: x - 400, top: y - 360 }).addClass("on");
  }).mouseleave(function () {
    $(".tip").removeClass("on");
  });
  $('.button').on('click', function(){
    $(this).toggleClass('on')
    $("header .menu").toggleClass('on')
    $(".logo").toggleClass('on')
  });
});

$(document).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 200) {
    $("header").addClass("on");
    $("header").mouseover(function () {
      $(this).addClass("on");
    }).mouseout(function () {
      $(this).addClass("on");
    });
  } else if (scroll < 199) {
    $("header").removeClass("on");
    $("header").mouseover(function () {
      $(this).addClass("on");
    }).mouseout(function () {
      $(this).removeClass("on");
    });
  }
});

var iw = window.innerWidth;
  if(iw > 640){
    var swiper = new Swiper(".inner.mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
  } else if (iw < 641){
    var swiper = new Swiper(".inner.mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
  };

var swiper = new Swiper(".own", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var iw = window.innerWidth;
  if (iw < 641){
    var swiper = new Swiper(".kongyoung", {
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    })
  };

$(".mMenuBt").click(function(){
  $("nav").addClass("open");
});
$(".mCloseBt").click(function(){
  $("nav").removeClass("open");
});
if($(window).width() < 641){
  $(".mSnb").hide();
  $(".gnbMenu > .title").click(function(){
      $(this).next().slideToggle(300);
      $(".gnbMenu > .title").not(this).next().slideUp(300);
      return false;
  });    
}