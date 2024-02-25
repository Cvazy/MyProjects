const underPopup = document.querySelector('.under_popup')
const underPopupForm = underPopup.querySelector('.search_form')
const mobileForm = document.querySelectorAll('.mobile_form')
const chooseHotel = document.querySelector('.choose_hotel__btn')
const underPopUpClose = document.getElementById('underPopUpClose')

const catalogMobileHeader = document.querySelector('.catalog_mobile_header')
const hotelMobileHeader = document.querySelector('.mobile_top_header')
const catalogWrapper = document.querySelector('.catalog__wrapper')
const hotelWrapper = document.querySelector('.hotel__wrapper')

if (mobileForm) {
    mobileForm.forEach((form) => {
        form.addEventListener('click', () => {
            underPopup.classList.add('max-h-75vh')
            catalogMobileHeader.style.filter = 'brightness(80%)'
            catalogWrapper.style.filter = 'brightness(80%)'
        })
    })
}

if (chooseHotel) {
    chooseHotel.addEventListener('click', () => {
        underPopup.classList.add('max-h-75vh')
        hotelWrapper.style.filter = 'brightness(80%)'
        hotelMobileHeader.style.filter = 'brightness(80%)'
    })
}

underPopUpClose.addEventListener('click', () => {
    underPopup.classList.remove('max-h-75vh')
    if (catalogWrapper) {
        catalogWrapper.style.filter = 'brightness(100%)'
        catalogMobileHeader.style.filter = 'brightness(100%)'
    }

    if (hotelWrapper) {
        hotelWrapper.style.filter = 'brightness(100%)'
        hotelMobileHeader.style.filter = 'brightness(100%)'
    }
})

underPopupForm.addEventListener('submit', (event) => {
    event.preventDefault()
    underPopup.classList.remove('max-h-75vh')

    if (catalogWrapper) {
        catalogWrapper.style.filter = 'brightness(100%)'
        catalogMobileHeader.style.filter = 'brightness(100%)'
    }

    if (hotelWrapper) {
        hotelWrapper.style.filter = 'brightness(100%)'
        hotelMobileHeader.style.filter = 'brightness(100%)'
    }
})