const visitorsInputs = document.querySelectorAll('.form_input')

visitorsInputs.forEach((block) => {
    const label = block.querySelector('label')
    const input = block.querySelector('input')

    input.addEventListener('click', () => {
        label.classList.add('active_label')
    })

    window.addEventListener('click', (event) => {
        if (!input.contains(event.target) && input.value === '') {
            label.classList.remove('active_label')
        }
    })

    input.addEventListener('input', (event) => {
        if (!event.target.value) {
            label.classList.remove('active_label')
        } else {
            label.classList.add('active_label')
        }
    })
})