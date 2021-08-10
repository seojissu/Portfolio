$(document).ready(function(){
    $('.sec2_bta').click(function(){
        var offset = $('.sec2').offset().top;
        $('html,body').animate({scrollTop : offset}, 1000);
        });

    $('.sec1_bta').click(function(){
        var offset = $('.sec1').offset().top;
        $('html,body').animate({scrollTop : offset}, 1000);
        });
    return false
});
