const inputDateBooking = document.querySelectorAll('.input_date_booking')
const timeBlock = document.querySelectorAll('.time_item')

inputDateBooking.forEach((input) => {
    input.addEventListener('input', () => {
        const timeBlock = input.parentNode.nextElementSibling

        if (input.value) {
            timeBlock.classList.remove('d-none-imp')
        } else {
            timeBlock.classList.add('d-none-imp')
        }
    })
})

timeBlock.forEach((block) => {
    block.addEventListener('click', () => {
        timeBlock.forEach((el) => {
            el.classList.remove('active_time')
        })

        block.classList.add('active_time')
    })
})