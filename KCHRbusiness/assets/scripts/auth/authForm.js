const authBtns = document.querySelectorAll('.auth__navigation-item')
const authForm = document.querySelectorAll('.auth_form')
const authTitle = document.querySelectorAll('.auth__title')
const authInfo = document.querySelector('.auth_info')

authBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        authBtns.forEach((el) => {
            el.classList.remove('auth_block_active')
        })

        const btnBlock = btn.getAttribute('data-auth-btn')

        const activeForm = document.querySelector(`[data-auth-block=${btnBlock}]`)
        const activeTitle = document.querySelector(`[data-auth-title=${btnBlock}]`)

        authForm.forEach((form) => {
            form.classList.add('d-none-imp')
        })

        authTitle.forEach((title) => {
            title.classList.add('d-none-imp')
        })

        btn.classList.add('auth_block_active')

        if (btnBlock === 'registration') {
            authInfo.classList.remove('d-none-imp')
        } else {
            authInfo.classList.add('d-none-imp')
        }

        activeForm.classList.remove('d-none-imp')
        activeTitle.classList.remove('d-none-imp')
    })
})