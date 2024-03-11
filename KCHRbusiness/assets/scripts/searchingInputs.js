function searchingInput(input, list, size, mainInput = null) {
    input.addEventListener('input', (event) => {
        if (event.target.value) {
            list.classList.add('max-h-popup')
            input.classList.remove('error')
        } else {
            list.classList.remove('max-h-popup')
            input.classList.add('error')
        }

        let nothingSearchItem

        if (size === 'mobile') {
            nothingSearchItem = list.querySelector('.nothing_search-mobile')
        } else {
            nothingSearchItem = list.querySelector('.nothing_search')
        }

        const searchItems = list.querySelectorAll('.finding_item')

        searchItems.forEach((item) => {
            if (!item.textContent.trim().toLowerCase().includes(event.target.value.trim().toLowerCase())) {
                item.classList.add('d-none')
            } else {
                item.classList.remove('d-none')
            }

            item.addEventListener('click', () => {
                if (!item.classList.contains('nothing_search') && !item.classList.contains('nothing_search-mobile')) {
                    input.value = item.textContent.trim()

                    if (size === 'mobile') {
                        mainInput.value = item.textContent.trim()
                    }

                    list.classList.remove('max-h-popup')
                }
            })
        })

        const checkNothing = Array.from(searchItems).filter((item) => !item.classList.contains('d-none'))

        if (!checkNothing.length) {
            if (nothingSearchItem) {
                nothingSearchItem.classList.remove('d-none')
            }
        } else {
            if (nothingSearchItem) {
                nothingSearchItem.classList.add('d-none')
            }
        }
    })
}