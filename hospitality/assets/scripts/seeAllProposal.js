const seeAllProposalBtns = document.querySelectorAll('.see_all_proposal')
const closeAllProposalBtns = document.querySelectorAll('.close_all_proposal')

seeAllProposalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const needBlock = btn.nextElementSibling

        btn.classList.add('d-none-imp')
        needBlock.classList.remove('d-none-imp')
        setTimeout(() => {
            needBlock.classList.add('max-h-screen-imp')
        }, 10)
    })
})

closeAllProposalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const needBlock = btn.parentNode
        const btnSeeAll = needBlock.previousElementSibling

        needBlock.classList.remove('max-h-screen-imp')

        setTimeout(() => {
            needBlock.classList.add('d-none-imp')
        }, 300)

        btnSeeAll.classList.remove('d-none-imp')
    })
})