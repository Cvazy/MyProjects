const smooth = document.getElementById('smooth')
const gidsList = document.getElementById('gids')
const searchGidsBtn = document.getElementById('searchGidsBtn')

function openModal(chooseBlock) {
    const block = chooseBlock.getAttribute('data-block')

    const modal = document.getElementById(block)
    const modalClose = modal.querySelector('div[role="button"]')
    const modalInfo = modal.querySelector('div[data-info]')
    // const blockInput = document.querySelector(`input[name=${block}]`)

    smooth.classList.remove('d-none')
    smooth.classList.add('d-flex')

    modal.classList.remove('d-none')
    modal.classList.add('d-block')

    document.body.classList.add('overflow-hidden')

    modalInfo.querySelectorAll('button').forEach((btn) => {
        btn.addEventListener('click', () => {
            chooseBlock.querySelector('span').innerText = btn.textContent.trim()

            // blockInput.value = btn.textContent.trim()

            if (block === 'chooseStart') {
                searchGidsBtn.removeAttribute('disabled')

                gidsList.classList.remove('d-none')
                gidsList.classList.add('d-flex')

                innerSpan(btn.textContent.trim())
            }

            closeModal(modal)
        })
    })

    modalClose.addEventListener('click', () => {
        closeModal(modal)
    })
}

function closeModal(modalBlock) {
    modalBlock.classList.remove('d-block')
    modalBlock.classList.add('d-none')
    smooth.classList.add('d-none')
    document.body.classList.remove('overflow-hidden')
}