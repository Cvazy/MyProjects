const mainSearchBlock = document.getElementById('searching')
const mainSearchTownInput = mainSearchBlock.querySelector('.search_town')
const mainSearchTownList = mainSearchBlock.querySelector('.search_name')

const mainChoosePeople = document.getElementById('choose_people')

searchPeopleInput.addEventListener('click', () => {
    mainChoosePeople.classList.toggle('max-h-popup')
})

mainSearchTownInput.addEventListener('input', (event) => {
    if (event.target.value) {
        mainSearchTownList.classList.add('max-h-popup')
        mainSearchTownInput.classList.remove('error')
    } else {
        mainSearchTownList.classList.remove('max-h-popup')
        mainSearchTownInput.classList.add('error')
    }

    const nothingSearchItem = mainSearchTownList.querySelector('.nothing_search')

    const searchItems = mainSearchTownList.querySelectorAll('.finding_item')

    searchItems.forEach((item) => {
        if (!item.textContent.trim().toLowerCase().includes(event.target.value.trim().toLowerCase())) {
            item.classList.add('d-none')
        } else {
            item.classList.remove('d-none')
        }

        item.addEventListener('click', () => {
            if (!item.classList.contains('nothing_search')) {
                mainSearchTownInput.value = item.textContent.trim()
                mainSearchTownList.classList.remove('max-h-popup')
            }
        })
    })

    const checkNothing = Array.from(searchItems).filter((item) => !item.classList.contains('d-none'))

    if (checkNothing.length === 0) {
        nothingSearchItem.classList.remove('d-none')
    } else {
        nothingSearchItem.classList.add('d-none')
    }
})