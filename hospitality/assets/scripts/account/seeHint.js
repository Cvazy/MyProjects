const hintText = document.querySelectorAll('.question__block-wrap')

hintText.forEach((block) => {

    if (window.innerWidth > 980) {
        block.addEventListener('mouseover', () => {
            const hintBlock = block.nextElementSibling
            hintBlock.classList.add('opacity-100-imp')
            hintBlock.classList.add('z-1210')
        })

        block.addEventListener('mouseout', () => {
            const hintBlock = block.nextElementSibling
            hintBlock.classList.remove('opacity-100-imp')
            hintBlock.classList.remove('z-1210')
        })
    } else {
        block.addEventListener('click', () => {
            const hintBlock = block.nextElementSibling
            hintBlock.classList.toggle('opacity-100-imp')
            hintBlock.classList.toggle('z-1210')
        })
    }
})