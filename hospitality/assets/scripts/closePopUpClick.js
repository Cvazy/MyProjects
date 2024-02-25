function closeOutsideClickBlock(inputID, popupID) {
    document.addEventListener('click', function(event) {
        const inputItem = document.getElementById(`${inputID}`)
        const isClickInsideInputItem = inputItem.contains(event.target)
        const popupBlock = document.getElementById(`${popupID}`)
        const isClickInsidePopup = popupBlock.contains(event.target)

        if (!isClickInsideInputItem && !isClickInsidePopup) {
            popupBlock.classList.remove('max-h-popup')

            if (inputID === 'chooseSorted') {
                inputItem.classList.remove('br-bottom-0')
                const itemArrow = inputItem.querySelector('img')
                itemArrow.classList.remove('rotate-180')
                popupBlock.classList.remove('open_filter_type')
            }
        }

        if (dropMenuArrow) {
            if (!dropMenu.classList.contains('max-h-popup')) {
                dropMenuArrow.classList.remove('rotate-180')
            }
        }
    })
}

const testSearchTown = document.getElementById('search_town')
const testSearchPeople = document.getElementById('search_people')
const testSortedList = document.getElementById('chooseSorted')
const testAccountMenu = document.getElementById('accountIcon')

if (testSearchTown) {
    closeOutsideClickBlock('search_town', 'select_town')
}

if (testSearchPeople) {
    closeOutsideClickBlock('search_people', 'choose_people')
}

if (testSortedList) {
    closeOutsideClickBlock('chooseSorted', 'sortedList')
}

if (testAccountMenu) {
    closeOutsideClickBlock('accountIcon', 'accountNav')
}

closeOutsideClickBlock('hotel', 'dropMenu')
