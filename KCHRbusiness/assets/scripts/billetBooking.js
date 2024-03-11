const chooseBilletBlocksDesktop = document.querySelectorAll('.choose_billet__item')
const finalPriceDesktop = document.querySelector('.booking_final_price')

const chooseBilletBlocksMobile = document.querySelectorAll('.booking_mobile__item')
const finalPriceMobile = document.querySelector('.booking_final_price__mobile')

const approvalDesktop = document.querySelector('.approval_desktop')
const submitBtnDesktop = document.querySelector('.booking_submit_desktop')

const approvalMobile = document.querySelector('.approval_mobile')
const submitBtnMobile = document.querySelector('.booking_submit_mobile')

const bookingModal = document.querySelector('.booking_blackout')
const indexBookingModal = document.querySelector('.main_booking_blackout')
const indexBookingModalClose = document.querySelector('.modal_booking__close')
const bookingModalClose = document.querySelectorAll('.modal_booking__close')
const bookingDate = document.getElementById('booking_exc')

const modalBookingForm = document.querySelector('.modal_booking_form')
const modalSuccessBooking = document.querySelector('.success_booking')
const modalSuccessBookingClose = document.querySelector('.success_booking_close')

const prevStepMobile = document.querySelector('.prevBooking')
const finalStepMobile = document.querySelector('.nextStepBooking')
const mobileBookingFirst = document.querySelector('[data-mobail-block="booking"]')
const mobileBookingSecond = document.querySelector('[data-mobail-block="booking_second"]')
const mobileBookingFinal = document.querySelector('[data-mobail-block="booking_final"]')

submitBtnMobile.addEventListener('click', () => {
    mobileBookingFirst.classList.remove('max-h-screen-imp')
    mobileBookingSecond.classList.add('max-h-screen-imp')
})

prevStepMobile.addEventListener('click', () => {
    mobileBookingSecond.classList.remove('max-h-screen-imp')
    mobileBookingFirst.classList.add('max-h-screen-imp')
})

finalStepMobile.addEventListener('click', () => {
    mobileBookingSecond.classList.remove('max-h-screen-imp')
    mobileBookingFinal.classList.add('max-h-screen-imp')
})


function formatNumber(price) {
    const number = parseInt(price, 10)

    return number.toLocaleString('ru-RU')
}

function billetAction(chooseBilletBlocks, totalPrice) {
    chooseBilletBlocks.forEach((block) => {
        const changeQntBtns = block.querySelectorAll('button')

        changeQntBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                const action = btn.getAttribute('data-qnt-action')
                let finalPrice = Number(totalPrice.textContent.trim().replace(/\D/g,''))

                const oneBilletPriceText = block.querySelector('.price_for_one_billet').textContent
                const oneBilletPriceNum = oneBilletPriceText.trim().replace(/\D/g,'')
                const billetAllPrice = block.querySelector('.choose_billet__price')
                const billetQntText = block.querySelector('.block_billet_qnt')
                const billetQntNum = billetQntText.textContent
                const billetQntInput = block.querySelector('input')

                if (action === 'minus' && Number(billetQntNum)) {
                    billetQntText.textContent = (Number(billetQntNum) - 1).toString()
                    billetQntInput.value = (Number(billetQntNum) - 1).toString()

                    billetAllPrice.textContent = `${formatNumber(Number(billetQntText.textContent) * Number(oneBilletPriceNum))} ₽`

                    finalPrice -= Number(oneBilletPriceNum)
                } else if (action === 'plus') {
                    billetQntText.textContent = (Number(billetQntNum) + 1).toString()
                    billetQntInput.value = (Number(billetQntNum) + 1).toString()

                    billetAllPrice.textContent = `${formatNumber(Number(billetQntText.textContent) * Number(oneBilletPriceNum))} ₽`

                    finalPrice += Number(oneBilletPriceNum)
                }

                totalPrice.textContent = `${formatNumber(finalPrice)} ₽`
            })
        })
    })
}

function checkConsent(submitBtn, checkbox) {
    checkbox.addEventListener('change', () => {
        submitBtn.disabled = !checkbox.checked
    })
}

billetAction(chooseBilletBlocksDesktop, finalPriceDesktop)
billetAction(chooseBilletBlocksMobile, finalPriceMobile)

checkConsent(submitBtnDesktop, approvalDesktop)
checkConsent(submitBtnMobile, approvalMobile)

submitBtnDesktop.addEventListener('click', () => {
    if (bookingDate.value) {
        bookingModal.classList.remove('d-none-imp')
        document.body.style.overflow = 'hidden'
        if (indexBookingModal) {
            indexBookingModal.classList.add('d-none-imp')
        }
    } else {
        bookingDate.classList.add('error')
    }
})

bookingDate.addEventListener('input', () => {
    bookingDate.classList.remove('error')
})

bookingModalClose.forEach((btn) => {
    btn.addEventListener('click', () => {
        bookingModal.classList.add('d-none-imp')
        document.body.style.overflow = 'unset'
    })
})

modalBookingForm.addEventListener('submit', (event) => {
    event.preventDefault()
    bookingModal.classList.add('d-none-imp')
    modalSuccessBooking.classList.remove('d-none-imp')
})

modalSuccessBookingClose.addEventListener('click', () => {
    modalSuccessBooking.classList.add('d-none-imp')
    document.body.style.overflow = 'unset'
})

if (indexBookingModalClose) {
    indexBookingModalClose.addEventListener('click', () => {
        indexBookingModal.classList.add('d-none-imp')
    })
}