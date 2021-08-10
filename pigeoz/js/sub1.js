var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

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
    $('.button').on('click', function(){
      $(this).toggleClass('on')
      $("header .menu").toggleClass('on')
      $(".logo").toggleClass('on')
    });
  });