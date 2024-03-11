document.addEventListener('DOMContentLoaded', () => {
    const openAuthBtn = document.querySelector('.open_auth')
    const authBlackoutBlock = document.querySelector('.auth_blackout')
    const closeAuthBlock = document.querySelectorAll('.auth_blackout_close')

    openAuthBtn.addEventListener('click', (event) => {
        event.preventDefault()
        window.scrollTo(0, 0)
        authBlackoutBlock.classList.remove('d-none-imp')
    })

    closeAuthBlock.forEach((close) => {
        close.addEventListener('click', () => {
            authBlackoutBlock.classList.add('d-none-imp')
        })
    })
})

const authModalBtns = document.querySelectorAll('.auth_modal__navigation-item')
const authModalTitle = document.querySelectorAll('.modal_auth__title')
const authModalInfo = document.querySelector('.modal_auth_info')

authModalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        authModalBtns.forEach((el) => {
            el.classList.remove('modal_auth_block_active')
        })

        const btnBlock = btn.getAttribute('data-modal-auth-btn')

        const activeForm = document.querySelector(`[data-modal-auth-block=${btnBlock}]`)
        const activeTitle = document.querySelector(`[data-modal-auth-title=${btnBlock}]`)

        modalAuthForms.forEach((form) => {
            form.classList.add('d-none-imp')
        })

        authModalTitle.forEach((title) => {
            title.classList.add('d-none-imp')
        })

        btn.classList.add('modal_auth_block_active')

        if (btnBlock === 'registration') {
            authModalInfo.classList.remove('d-none-imp')
        } else {
            authModalInfo.classList.add('d-none-imp')
        }

        activeForm.classList.remove('d-none-imp')
        activeTitle.classList.remove('d-none-imp')
    })
})