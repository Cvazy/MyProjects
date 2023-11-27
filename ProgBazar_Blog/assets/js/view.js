const viewStyle = document.querySelectorAll('.show-button svg')

viewStyle.forEach((btn) => {
    btn.addEventListener('click', () => {
        viewStyle.forEach((el) => {
            el.classList.remove('active')
        })

        btn.classList.add('active')

        const activeBlock = document.querySelector('.mainSwiper:not(.hidden)')

        if (btn.getAttribute('data-view') === 'list') {

            const listBlock = document.querySelector(`[data-block="${activeBlock.getAttribute('data-block')}"][data-style="list"]`)

            activeBlock.classList.add('hidden')
            listBlock.classList.remove('hidden')
        } else {
            const allBlock = document.querySelector(`[data-block="${activeBlock.getAttribute('data-block')}"]:not([data-style="list"])`)

            activeBlock.classList.add('hidden')
            allBlock.classList.remove('hidden')
        }
    })
})