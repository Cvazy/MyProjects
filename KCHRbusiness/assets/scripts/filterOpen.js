const filterItem = document.querySelectorAll('.filter_item')
const seeAllFilter = document.querySelectorAll('.see_all_filter')

filterItem.forEach((el) => {
    if (!el.classList.contains('not_open')) {
        const elList = el.querySelector('.filter_block')

        elList.addEventListener('click', () => {
            el.querySelector('img').classList.toggle('rotate-180')

            const filterList = el.querySelector('.filter_item__list')
            filterList.classList.toggle('open_list')

            const seeAll = el.querySelector('a')
            if (seeAll) seeAll.classList.toggle('d-none')
        })
    }
})

seeAllFilter.forEach((btn) => {
    const filterBlock = btn.previousElementSibling
    const hiddenItems = filterBlock.querySelectorAll('.d-none-imp')

    btn.addEventListener('click', () => {
        hiddenItems.forEach((block) => {
            block.classList.remove('d-none-imp')
        })

        btn.classList.add('d-none-imp')
    })
})