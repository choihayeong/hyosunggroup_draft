$(function() {
    $(window).on('load', function () {
        AOS.refresh();
    });
    $('.main-top').on('click', function() {
        window.location.reload();
        location.href = "#";
        $('.main-intro').attr('style', 'position:relative; z-index:50');
        $('.initialize').attr('style', 'z-index:100');
    });
    $('.button-top').on('click', function() {
        $('html, body').animate({scrollTop:0}, 1000, "linear").delay(1500);
    });
    $('#btnMenu').on('click', function() {
        $(this).toggleClass('on');
        $('.snb__links').toggleClass('on');
        $('#gnb').toggleClass('on');
        $('body').toggleClass('dim');
    })

    /* HEADER */
    $('.gnb__list > li').on('mouseenter', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('.lnb').addClass('on');
    });
    $('.lnb').on('mouseleave', function() {
        $('.gnb__list > li').removeClass('active');
        $('.lnb').removeClass('on');
    });

});