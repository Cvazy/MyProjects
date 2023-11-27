const swiperState = new Swiper('.StateSwiper', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,

    breakpoints: {
        680: {
            slidesPerView: 3,
        },
    },

    navigation: {
        nextEl: ".next-state",
        prevEl: ".prev-state",
    },

    pagination: {
        el: '.state-pagination',
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
            slidesPerView: 3,
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
            slidesPerView: 3,
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
            slidesPerView: 3,
        },
    },
});

const swiperWindowsList = new Swiper('.WindowsSwiperList', {
    loop: true,
    slidesPerView: 4,
    // centeredSlides: true,

    navigation: {
        nextEl: ".next-windows-list",
        prevEl: ".prev-windows-list",
    },

    pagination: {
        el: '.windows-pagination-list',
    },
});


const swiperStateList = new Swiper('.StateSwiperList', {
    loop: true,
    slidesPerView: 4,
    centeredSlides: true,

    navigation: {
        nextEl: ".next-state-list",
        prevEl: ".prev-state-list",
    },

    pagination: {
        el: '.state-pagination-list',
    },
});


const swiperOfficeList = new Swiper('.OfficeSwiperList', {
    loop: true,
    slidesPerView: 4,
    centeredSlides: true,

    navigation: {
        nextEl: ".next-office-list",
        prevEl: ".prev-office-list",
    },

    pagination: {
        el: '.office-pagination-list',
    },
});


const swiperInstructionsList = new Swiper('.InstructionsSwiperList', {
    loop: true,
    slidesPerView: 4,
    centeredSlides: true,

    navigation: {
        nextEl: ".next-instr-list",
        prevEl: ".prev-instr-list",
    },

    pagination: {
        el: '.instr-pagination-list',
    },
});
