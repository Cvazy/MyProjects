const hintText = document.querySelectorAll('.question__block-wrap')

function actionHintText() {
    hintText.forEach((block) => {
        const hintBlock = block.nextElementSibling

        if (window.innerWidth > 980) {
            block.addEventListener('mouseover', () => {
                hintBlock.classList.add('opacity-100-imp')
                hintBlock.classList.add('z-1210')
            })

            block.addEventListener('mouseout', () => {
                hintBlock.classList.remove('opacity-100-imp')
                hintBlock.classList.remove('z-1210')
            })
        } else {
            block.addEventListener('click', (event) => {
                hintBlock.classList.toggle('opacity-100-imp')
                hintBlock.classList.toggle('z-1210')
            })

            document.addEventListener('click', (event) => {
                if (!block.contains(event.target)) {
                    hintBlock.classList.remove('opacity-100-imp')
                    hintBlock.classList.remove('z-1210')
                }
            })
        }
    })
}

document.addEventListener('DOMContentLoaded', actionHintText)
window.addEventListener('resize', actionHintText)