const swiperState = new Swiper('.StateSwiper', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,

    navigation: {
        nextEl: ".next-state",
        prevEl: ".prev-state",
    },

    pagination: {
        el: '.state-pagination',
    },

    breakpoints: {
        680: {
            slidesPerView: 3,
        },
    },
});

const swiperOffice = new Swiper('.OfficeSwiper', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,

    navigation: {
        nextEl: ".next-office",
        prevEl: ".prev-office",
    },

    pagination: {
        el: '.office-pagination',
    },

    breakpoints: {
        680: {
            slidesPerView: 2,
        },
    },
});

const swiperWindows = new Swiper('.WindowsSwiper', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,

    navigation: {
        nextEl: ".next-windows",
        prevEl: ".prev-windows",
    },

    pagination: {
        el: '.windows-pagination',
    },

    breakpoints: {
        680: {
            slidesPerView: 2,
        },
    },
});

const swiperInstructions = new Swiper('.InstructionsSwiper', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,

    navigation: {
        nextEl: ".next-instr",
        prevEl: ".prev-instr",
    },

    pagination: {
        el: '.instr-pagination',
    },

    breakpoints: {
        680: {
            slidesPerView: 2,
        },
    },
});