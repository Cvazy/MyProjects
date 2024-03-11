const navClose = document.querySelectorAll('.navClose')
const inputTownMobile = document.querySelector('.input__item-mobile')
const inputEmojiMobile = document.querySelector('.input__emoji_mobile')

const mobileHeader = document.querySelector('.mobile_top_header')

const mtMain = document.querySelector('.margin_under_header')

const searchDateMobile = document.getElementById('search_date_mobile')
const mobileDate = document.querySelector('.mobile_date')

const main = document.querySelector('main')

const editVisitDate = document.querySelectorAll('.edit_booking_input')

function headerOpenMobile(block) {
    if (mtMain) mtMain.classList.add('m-0-imp')

    if (mobileHeader) {
        mobileHeader.classList.add('d-none-imp')
    }

    const popupBlock = document.querySelector(`[data-mobail-block=${block}]`)

    window.scrollTo(0, 0);
    popupBlock.classList.add('max-h-screen-imp')
    main.style.filter = 'brightness(0.5)'
    document.body.style.overflow = 'hidden'
}

navClose.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        document.body.style.overflow = 'auto'
        main.style.filter = 'brightness(1)'
        if (mtMain) mtMain.classList.remove('m-0-imp')

        if (mobileHeader) {
            mobileHeader.classList.remove('d-none-imp')
        }

        const popupBlock = document.querySelector('.max-h-screen-imp')

        if (popupBlock.classList.contains('max-h-screen-imp')) {
            popupBlock.classList.remove('max-h-screen-imp')
        }
    })
})

if (searchDateMobile) {
    searchDateMobile.addEventListener('input', (event) => {
        const inputValue = searchDateMobile.value.trim()
        const dateRange = inputValue.split(' — ')

        if (dateRange.length === 2) {
            const startDateParts = dateRange[0].split('.');
            const endDateParts = dateRange[1].split('.');

            if (startDateParts.length === 3 && endDateParts.length === 3) {
                const formattedStartDate = `${startDateParts[0]}.${startDateParts[1]}`;
                const formattedEndDate = `${endDateParts[0]}.${endDateParts[1]}`;

                mobileDate.textContent = `${formattedStartDate} - ${formattedEndDate}`;
            }
        }
    })
}