const ipTypeBlock = document.getElementById('ip_type')
const leTypeBlock = document.getElementById('le_type')
const ipInput = document.querySelector('.ip_input')

const ipPrev = ipInput.previousElementSibling

const ipInputItem = ipInput.querySelector('input')
const ipPrevItem = ipPrev.querySelector('input')

ipTypeBlock.addEventListener('change', () => {
    if (ipTypeBlock.checked) {
        ipPrev.classList.add('d-none-imp')
        ipPrevItem.removeAttribute('data-input-required')
        ipInput.classList.remove('d-none-imp')
        ipInputItem.setAttribute('data-input-required', 'required')
    }
})

leTypeBlock.addEventListener('change', () => {
    if (leTypeBlock.checked) {
        ipInput.classList.add('d-none-imp')
        ipInputItem.removeAttribute('data-input-required')
        ipPrev.classList.remove('d-none-imp')
        ipPrevItem.setAttribute('data-input-required', 'required')
    }
})