function selectorAction() {
    const selectors = document.querySelectorAll('.selector')

    selectors.forEach((el) => {
        const selectorInput = el.querySelector('input')
        const selectorBlock = el.querySelector('.selector_block')
        const selectorArrow = el.querySelector('.selector_arrow')
        const selectItems = selectorBlock.querySelectorAll('.selector_block__item')

        selectorInput.addEventListener('click', () => {
            selectorInput.classList.remove('error')
            selectorArrow.classList.toggle('rotate-180')
            selectorBlock.classList.toggle('max-h-popup')

            selectItems.forEach((item) => {
                item.addEventListener('click', () => {
                    selectorInput.value = item.textContent.trim()
                    selectorArrow.classList.remove('rotate-180')
                    selectorBlock.classList.remove('max-h-popup')
                })
            })
        })

        selectorArrow.addEventListener('click', (event) => {
            event.stopPropagation()
            selectorInput.classList.remove('error')
            selectorArrow.classList.toggle('rotate-180')
            selectorBlock.classList.toggle('max-h-popup')
        });
    })
}

selectorAction()