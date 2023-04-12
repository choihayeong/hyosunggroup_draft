$(function() {
    // main
    const intro = document.querySelector('.main-intro');
    // const beginning = document.querySelector('.main-beginning');
    const titleBeginning = document.querySelector('.section-title--beginning');
    const titleHistory = document.querySelector('.section-title--history');
    const titleSubsidiary = document.querySelector('.section-title--subsidiary');
    const titleSustain = document.querySelector('.main-sustain__title');
    const beginning01 = document.querySelector('.beginning--01');
    const beginning02 = document.querySelector('.beginning--02');
    const beginning03 = document.querySelector('.beginning--03');
    const history = document.querySelector('.history');
    const historyContent = history.querySelector('.main-history__contents');
    const subsidiary = document.querySelector('.subsidary');
    const story = document.querySelector('.main-story');
    const connect = document.querySelector('.main-connect');
    const sustain = document.querySelector('.main-sustain');
    const showroom = document.querySelector('.showroom');

    var isMoving = false; 
    var mainIndex = 0;

    $('#main-section').bind('mousewheel', function (event, delta) {
        event.preventDefault();
        if (isMoving) return;

        var delta = event.originalEvent.wheelDelta;
        isMoving = true;

        if (delta < 0) {
            mainIndex ++;
            switch (mainIndex) {
                case 1: 
                    intro.setAttribute('style','opacity:0')
                    titleBeginning.classList.add('on');
                    break;
                case 2:
                    beginning01.classList.add('on');
                    break;
                case 3:
                    beginning01.querySelector('.stroketext--fill').classList.add('on');
                    break;
                case 4:
                    beginning02.classList.add('on');
                    break;
                case 5:
                    beginning02.querySelector('.beginning__text').setAttribute('style','opacity:0');
                    beginning03.classList.add('on');
                    break;
                case 6:
                    titleHistory.classList.add('on');
                    break;
                case 7:
                    history.classList.add('on');
                    break;
                case 8:
                    history.querySelector('.main-history__contents').classList.add('on');
                    break;
                case 9:
                    titleSubsidiary.classList.add('on');
                    break;
                case 10:
                    subsidiary.classList.add('on');
                    isMoving = false;
                    return;
                    break;
            }
        } else {
            mainIndex --;
            switch (mainIndex) {
                case 8: 
                    titleSubsidiary.classList.remove('on');
                    break;
                case 7:
                    history.classList.remove('on');
                    break;
                case 6:
                    titleHistory.classList.remove('on');
                    break;
                case 5:
                    beginning02.querySelector('.beginning__text').removeAttribute('style');
                    beginning03.classList.remove('on');
                    break;
                case 4: 
                    beginning02.classList.remove('on');
                    break;
                case 3:
                    beginning01.querySelector('.stroketext--fill').classList.remove('on');
                    break;
                case 2:
                    beginning01.classList.remove('on');
                    break;
                case 1: 
                    intro.removeAttribute('style','opacity:0')
                    titleBeginning.classList.remove('on');
                    break;
            }
        }
        
        console.log(mainIndex);

        setTimeout(function () {
            isMoving = false;
        }, 1200);
    });

    $('.subsidary').bind('mousewheel', function (event, delta) {
        // event.preventDefault();
        if (isMoving) return;

        var delta = event.originalEvent.wheelDelta;
        isMoving = true;

        let anotherIndex = 0;

        if (delta < 0) {
            // mainIndex ++;
        } else {
            anotherIndex --;
            switch (anotherIndex) {
                case -1:
                    subsidiary.classList.remove('on');
                    break;
            }
        }
        
        console.log(anotherIndex);

        setTimeout(function () {
            isMoving = false;
        }, 1200);
    });

    $('.main-connect').bind('mousewheel', function (event, delta) {
        if (isMoving) return;

        let connectIndex = 0;

        var delta = event.originalEvent.wheelDelta;
        isMoving = true;

        if (delta < 0) {
            connectIndex ++;
            switch (connectIndex) {

            }
        } else {
            connectIndex --;
        }
        
        console.log(connectIndex);

        setTimeout(function () {
            isMoving = false;
        }, 1200);
    })

    function calcHeight(content) {
        let currentScroll = window.pageYOffset;
        let start = 0;
        let end = content.offsetHeight;
        let scrollRatio = 0;

        if (currentScroll >= content.offsetTop && currentScroll <= (content.offsetTop + content.offsetHeight)) {
            let currentPosition = currentScroll - content.offsetTop;
            scrollRatio = currentPosition / content.offsetHeight;

            switch (content) {
                // case historyContent: 
                //     console.log('historyContent');
                //     console.log(scrollRatio);
                //     historyContent.querySelector('.main-history__contents img').setAttribute('style', `transform: translate3d(${20-(120*scrollRatio)}%, 0, 0)`);
                // break;
                case story:
                    // console.log('story');
                    if (scrollRatio >= 0.01) {
                        story.querySelector('.story').setAttribute('style', `background-position-y:${scrollRatio*200}%`)
                    }
                    break;
                case connect:
                    if (scrollRatio >= 0.11) {
                        sustain.querySelector('.main-sustain__title').setAttribute('style', 'position:fixed;top:0;left:0;width:100%;opacity:1');
                        sustain.querySelector('.title-inner').classList.add('on');
                    }
                    if (scrollRatio < 0.11) {
                        sustain.querySelector('.main-sustain__title').removeAttribute('style');
                        sustain.querySelector('.title-inner').classList.remove('on');
                        connect.setAttribute('style','opacity:1')
                    }
                    break;
                case sustain:
                    console.log(scrollRatio);
                    if (scrollRatio >= 0.01) {
                        connect.setAttribute('style','opacity:0');
                    }
                    if (scrollRatio < 0.01) {
                        connect.removeAttribute('style');
                    }
                    if (scrollRatio >= 0.05) {
                        sustain.querySelector('.main-sustain__title').setAttribute('style','opacity:0');
                        sustain.querySelector('.section-content--sustain').classList.add('on');
                    } 
                    if (scrollRatio < 0.05) {
                        sustain.querySelector('.main-sustain__title').removeAttribute('style');
                        sustain.querySelector('.section-content--sustain').classList.remove('on');
                    }
                    if (scrollRatio >= 0.67) {
                        showroom.querySelector('.showroom__inner').setAttribute('style', `background-position-y:${scrollRatio*100}%`)
                    }
                    break;
                case showroom:
                    showroom.querySelector('.showroom__inner').setAttribute('style', `background-position-y:${(1-scrollRatio)*100}%`)
                    break;
            }
        }
    }

    function motionEffect() {
        // calcHeight(historyContent);
        calcHeight(story);
        calcHeight(sustain);
        calcHeight(connect);
        calcHeight(showroom);
    }

    window.addEventListener('resize', calcHeight);
    window.addEventListener('scroll', motionEffect);
});
    
