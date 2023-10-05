const swiper = new Swiper('.reviews__content', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 40,

    pagination: {
        el: '.rev_navigation',
    },

    navigation: {
        nextEl: '.arrow_forward',
        prevEl: '.arrow_reverse',
    },
});