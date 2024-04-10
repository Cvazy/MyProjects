const visitorsRadios = document.querySelectorAll('.form_radio input')

visitorsRadios.forEach((radio) => {
    radio.addEventListener('change', () => {
        if (radio.checked) {
            visitorsRadios.forEach((el) => {
                el.checked = false
            })

            radio.checked = true
        }
    })
})