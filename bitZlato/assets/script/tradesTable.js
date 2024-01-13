const tradeLists = document.querySelectorAll('.trades__list')
const tradeBtnSee = document.querySelectorAll('.trade-type__wrapper span')

tradeBtnSee.forEach((tradeBtn) => {
    tradeBtn.addEventListener('click', () => {
        tradeBtnSee.forEach((activeBtn) => activeBtn.classList.remove('active-trade'))
        tradeBtn.classList.add('active-trade')

        tradeLists.forEach((tradeItem) => {
            tradeItem.classList.add('hidden')
        })

        document.querySelector(`[data-list=${tradeBtn.getAttribute('id')}]`).classList.remove('hidden')
    })
})