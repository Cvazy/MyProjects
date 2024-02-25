const filterType = document.querySelectorAll('.sorting_btn')
const cardsBlock = document.querySelector('.cards')

filterType.forEach((el) => {
    const filterTypeBtn = el.querySelector('.sorting_block__item')
    const activeType = filterTypeBtn.querySelector('span')
    const filterArrow = filterTypeBtn.querySelector('img')
    const typeList = el.querySelector('.sorting_block__list')
    const typeElements = typeList.querySelectorAll('p')

    filterTypeBtn.addEventListener('click', () => {
        filterTypeBtn.classList.toggle('br-bottom-0')
        typeList.classList.toggle('open_filter_type')
        filterArrow.classList.toggle('rotate-180')
    })

    typeElements.forEach((el) => {
        el.addEventListener('click', () => {
            activeType.textContent = el.textContent
            typeList.classList.remove('open_filter_type')
            filterTypeBtn.classList.remove('br-bottom-0')
            filterArrow.classList.remove('rotate-180')

            cardsBlock.setAttribute('data-filter', el.getAttribute('data-filter-action'))
        })
    })
})