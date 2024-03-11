const openBookingModalBtns = document.querySelectorAll('.desc_medium__times-block')
const openBookingModalBtnsMb = document.querySelectorAll('.small_desc_medium__times-block')

const a = document.getElementById('bookingDate')

function openModalBooking(block) {
    block.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.preventDefault()

            if (window.innerWidth > 980) {
                indexBookingModal.classList.remove('d-none-imp')
            } else {
                window.scrollTo(0, 0)
                mobileBookingFirst.classList.add('max-h-screen-imp')
            }
        })
    })
}

openModalBooking(openBookingModalBtns)
openModalBooking(openBookingModalBtnsMb)
