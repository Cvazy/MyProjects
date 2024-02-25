const mainLkForm = document.querySelector('.main_form')
const companionLkForm = document.querySelector('.companion_form')

mainLkForm.addEventListener('submit', (event) => {
    const allInputsBlocks = mainLkForm.querySelectorAll('.lk_input')

    allInputsBlocks.forEach((block) => {
        if (!block.classList.contains('check_in_input')) {
            const allInputs = block.querySelectorAll('input')

            allInputs.forEach((input) => {
                if (input.value === '') {
                    event.preventDefault()
                    input.classList.add('error')
                }
            })
        }
    })
})