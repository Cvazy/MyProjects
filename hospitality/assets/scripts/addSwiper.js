function initSwiper(block) {
    const travelsItems = block.querySelectorAll('a')

    block.classList.add('swiper-wrapper')

    travelsItems.forEach((el) => {
        el.classList.add('swiper-slide')
    })
}

function deleteSwiper(block) {
    const travelsItems = block.querySelectorAll('a')

    block.classList.remove('swiper-wrapper')

    travelsItems.forEach((el) => {
        el.classList.remove('swiper-slide')
    })
}

document.addEventListener('DOMContentLoaded', function() {
    checkResolution()
})

window.addEventListener('resize', function() {
    checkResolution()
})

function checkResolution() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1280) {
        const mySwiper = new Swiper(".popular_offer__navigation", {
            slidesPerView: 3,
            spaceBetween: 0,
            freeMode: true,
            loop: true
        })

        const smallCardsSwiper = new Swiper(".small-cards", {
            slidesPerView: 1,
            spaceBetween: 16,
            freeMode: true,

            breakpoints: {
                600: {
                    slidesPerView: 2,
                },

                767: {
                    slidesPerView: 3,
                },

                980: {
                    slidesPerView: 4,
                },
            }
        })

        const reviewSwiper = new Swiper(".reviews", {
            slidesPerView: 1,
            spaceBetween: 0,
            freeMode: true,

            breakpoints: {
                600: {
                    slidesPerView: 2,
                },

                980: {
                    slidesPerView: 3,
                },
            }
        })

        const newsSwiper = new Swiper(".news", {
            slidesPerView: 1,
            spaceBetween: 0,
            freeMode: true,

            breakpoints: {
                800: {
                    slidesPerView: 2,
                },

                1024: {
                    slidesPerView: 3,
                },
            }
        })

        const krimSwiper = new Swiper(".main-popular", {
            slidesPerView: 1,
            spaceBetween: 0,
            freeMode: true,

            breakpoints: {
                600: {
                    slidesPerView: 2,
                },

                980: {
                    slidesPerView: 3,
                },
            }
        })
    } else {
        mySwiper.destroy()
        smallCardsSwiper.destroy()
        reviewSwiper.destroy()
        newsSwiper.destroy()
        krimSwiper.destroy()
    }
}
