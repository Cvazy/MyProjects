const checkInBlocks = document.querySelectorAll('.check_in')

checkInBlocks.forEach((block) => {
    const checkInInput = block.querySelector('input[type="checkbox"]')
    const checkInBlock = block.querySelector('.check_in__block')
    const checkInSave = block.querySelector('.check_in_submit button')

    checkInInput.addEventListener('change', () => {
        if (checkInInput.checked) {
            checkInBlock.classList.add('max-h-screen-imp')
        } else {
            checkInBlock.classList.remove('max-h-screen-imp')
        }
    })

    checkInSave.addEventListener('click', () => {
        checkInBlock.classList.remove('max-h-screen-imp')
    })
})