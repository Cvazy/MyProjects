const selectorBlocks = document.querySelectorAll('.selector')

document.addEventListener('click', (event) => {
    selectorBlocks.forEach((block) => {
        const selectorInput = block.querySelector('input')
        const selectorBlock = block.querySelector('.selector_block')

        if (!selectorInput.contains(event.target) && !selectorBlock.contains(event.target)) {
            selectorBlock.classList.remove('max-h-popup')
        }
    })
})