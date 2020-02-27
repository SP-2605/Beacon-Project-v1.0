//Video Popup Close Btn Function
$(document).ready(function(){
    $('.popup__close').click(function () {
        $('.popup__video').get(0).pause();
        $('.popup__video').get(0).currentTime=0;
    });

    $('#Intro-video-button').click(function() {
        $('.popup__video')[0].play();
    });
});

//AOS SCRIPT
AOS.init({
    disable: function () {
        var maxWidth = 900;
        return window.innerWidth < maxWidth;
    }
});

//Glide
$(document).ready(function(){
    const config = {
        type: 'carousel',
        perView: 1,
        gap: 20,
        autoplay: true,
        autoplay: 4000,
        animationDuration:2000,

        breakpoints: {

            1600: {
                gap: 2,
                perView: 2,
                peek: {
                    before: 20,
                    after: 20,
                }
            },

            960: {
                gap: 2,
                perView: 1,
                peek: {
                    before: 20,
                    after: 20,
                }
            },

            500: {
                gap: 1,
                perView: 1,
                peek: {
                    before: 10,
                    after: 10,
                }
            },

        }
    }
    new Glide(".glide", config).mount()
})
$(document).ready(function(){
    const config = {
        type: 'carousel',
        perView: 1,
        autoplay: true,
        autoplay: 3000,
        animationDuration: 2500,
        keyboard: true,
        swipeThreshold: 10,
        touchRatio:0.3,

        breakpoints: {

            1600: {
                gap: 5,
                perView: 2,
            },

            1200: {
                gap: 5,
                perView: 1,
                peek: {
                    before:10,
                    after: 10,
                },
            },

            900: {
                perView: 1,
                peek: {
                    before:20,
                    after: 20,
                },
            },

            500: {
                perView: 1,
                peek: {
                    before: 30,
                    after: 30,
                },
            },

        }
    }
    new Glide(".glide1", config).mount()
})