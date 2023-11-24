var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    effect: "fade",

    thumbs: {
        swiper: swiper,
    },
});

var swiper3 = new Swiper(".mySwiper3", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper4 = new Swiper(".mySwiper4", {
    spaceBetween: 10,
    effect: "fade",

    thumbs: {
        swiper: swiper3,
    },
});

var swiper5 = new Swiper(".mySwiper5", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper6 = new Swiper(".mySwiper6", {
    spaceBetween: 10,
    effect: "fade",

    thumbs: {
        swiper: swiper5,
    },
});

var swiper7 = new Swiper(".mySwiper7", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper8 = new Swiper(".mySwiper8", {
    spaceBetween: 10,
    effect: "fade",

    thumbs: {
        swiper: swiper7,
    },
});

var swiper9 = new Swiper(".mySwiper9", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper10 = new Swiper(".mySwiper10", {
    spaceBetween: 10,
    effect: "fade",

    thumbs: {
        swiper: swiper9,
    },
});

var swiper11 = new Swiper(".mySwiper11", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper12 = new Swiper(".mySwiper12", {
    spaceBetween: 10,
    effect: "fade",

    thumbs: {
        swiper: swiper11,
    },
});

var mainSwiper = new Swiper(".mainSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
        enabled: false,
    },

    navigation: {
        nextEl: ".next",
        prevEl: ".btn__right",
    },

    on: {
        slideChange: function () {
            var currentSlide = mainSwiper.activeIndex + 1;
            document.getElementById('counter').innerText = currentSlide;
        },
    },
});
