const mobileSearchTownInput = document.querySelector('[name="town_mobile"]')
const mobileTownsList = document.querySelector('.mobile-town-list')

mobileSearchTownInput.addEventListener('input', (e) => {
    if (e.target.value) {
        mobileTownsList.classList.add('max-h-popup')
    } else {
        mobileTownsList.classList.remove('max-h-popup')
    }

    const nothingSearchMobile = mobileTownsList.querySelector('.nothing_search-mobile')

    const searchMobileItems = mobileTownsList.querySelectorAll('.finding_item')

    searchMobileItems.forEach((item) => {
        if (!item.textContent.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())) {
            item.classList.add('d-none')
        } else {
            item.classList.remove('d-none')
        }

        item.addEventListener('click', () => {
            if (!item.classList.contains('nothing_search-mobile')) {
                mobileSearchTownInput.value = item.textContent.trim()
                searchTownInput.value = item.textContent.trim()
                mobileSearchTownInput.classList.remove('max-h-popup')
            }
        })
    })

    const checkNothing = Array.from(searchMobileItems).filter((item) => !item.classList.contains('d-none'))

    if (checkNothing.length === 0) {
        nothingSearchMobile.classList.remove('d-none')
    } else {
        nothingSearchMobile.classList.add('d-none')
    }
})