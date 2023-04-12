$(function() {
    $('.sub-history__tab > a').on('click', function(event) {
        event.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).attr('data-index');

        $('.sub-history__inner').attr('data-index', index);
        $('.history-snap__item').attr('style', 'top:-3000px');
        $('.sub-history__list').eq(4).addClass('on').siblings().removeClass('on');
    });

    const stickyPart = document.querySelector('.history-sticky');
    const yearPart = document.querySelector('.history-snap__item');
    const parts = yearPart.querySelectorAll('li');
    const history = document.querySelector('.sub-history');
    const footer = document.querySelector('.footer');

    function calcHeight() {
        let currentScroll = window.pageYOffset;
        let scrollRatio = currentScroll / document.scrollingElement.offsetHeight;

        if (currentScroll >= (history.offsetTop + 125 + window.innerHeight) - 200 && scrollRatio < 0.67) {
            history.querySelector('.history-sticky').setAttribute('style','position:fixed;left:105px;right:105px;');
            history.querySelector('.history-snap').setAttribute('style','position:fixed;top:0;');
        } else {
            history.querySelector('.history-sticky').removeAttribute('style');
            history.querySelector('.history-snap').removeAttribute('style');
        }

        if (scrollRatio >= 0.67) {
            history.querySelector('.history-sticky').removeAttribute('style');
            history.querySelector('.history-snap').removeAttribute('style');
        }
    }

    function motionEffect() {
        calcHeight();
    }

    window.addEventListener('resize', calcHeight);
    window.addEventListener('scroll', motionEffect);

    var isMoving = false; 
    var historyIndex = 0;
    $('.sub-history').on('mousewheel', function(event,delta) {
        // event.preventDefault();
        if (isMoving) return;

        var delta = event.originalEvent.wheelDelta;
        isMoving = true;

        if (historyIndex === 0) {
            history.querySelector('.history-snap__item').setAttribute('style','top:0');
        }

        if (delta < 0) {
            historyIndex ++;
            switch(historyIndex) {
                case 2 : 
                    history.querySelector('.history-snap__item').setAttribute('style','top:-200px');
                    $('.sub-history__list').eq(1).addClass('on').siblings().removeClass('on');
                    break;
                case 3 :
                    history.querySelector('.history-snap__item').setAttribute('style','top:-400px');
                    $('.sub-history__list').eq(2).addClass('on').siblings().removeClass('on');
                    break;
                case 4 :
                    history.querySelector('.history-snap__item').setAttribute('style','top:-600px');
                    $('.sub-history__list').eq(3).addClass('on').siblings().removeClass('on');
                    break;
            }
        } else {
            historyIndex --;
        }
    
        // console.log(historyIndex);

        setTimeout(function () {
            isMoving = false;
        }, 1200);
    });
})