const searchingBlock = document.querySelector('.search_name')
const searchTownInput = document.querySelector('.search_town')

const searchPeriodInput = document.querySelector('[name="select_period"]')

const searchPeopleInput = document.getElementById('search_people')
const testAdult = document.getElementById('test_adults_qnt')
const testChild = document.getElementById('test_child_qnt')
const choosePeopleBlock = document.querySelectorAll('.choose_people')

const submitMainBtn = document.getElementById('submitMainBtn')

const childCount = document.getElementById('childCount')

const formSearching = document.querySelector('.search_form')

formSearching.addEventListener('submit', (event) => {
    if (searchTownInput.value === '') {
        searchTownInput.classList.add('error')
    } else {
        searchTownInput.classList.remove('error')
    }

    if (searchPeriodInput.value === '') {
        searchPeriodInput.classList.add('error')
    } else {
        searchPeriodInput.classList.remove('error')
    }

    const popupBlocks = document.querySelectorAll('.popup_block')
    popupBlocks.forEach((el) => {
        el.classList.remove('max-h-popup')
    })

    event.preventDefault()

    const formData = new FormData(formSearching);
    console.log(Object.fromEntries(formData));
})

//Поиск по городу
searchTownInput.addEventListener('input', (event) => {
    if (event.target.value) {
        searchingBlock.classList.add('max-h-popup')
        searchTownInput.classList.remove('error')
    } else {
        searchingBlock.classList.remove('max-h-popup')
        searchTownInput.classList.add('error')
    }

    const nothingSearchItem = searchingBlock.querySelector('.nothing_search')

    const searchItems = searchingBlock.querySelectorAll('.finding_item')

    searchItems.forEach((item) => {
       if (!item.textContent.trim().toLowerCase().includes(event.target.value.trim().toLowerCase())) {
           item.classList.add('d-none')
       } else {
           item.classList.remove('d-none')
       }

       item.addEventListener('click', () => {
           if (!item.classList.contains('nothing_search')) {
               searchTownInput.value = item.textContent.trim()
               searchingBlock.classList.remove('max-h-popup')
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

//Выбор состава посетителей
searchPeopleInput.addEventListener('click', (event) => {
    if (window.innerWidth > 980) {
        choosePeopleBlock[1].classList.toggle('max-h-popup')
    } else {
        choosePeopleBlock[0].classList.toggle('max-h-popup')
    }
})

increaseQntPeople('plus_adults')
reduceQntPeople('minus_adults')

increaseQntPeople('plus_child')
reduceQntPeople('minus_child')

function increaseQntPeople(blockID) {
    const increaseBtns = document.querySelectorAll(`.${blockID}`)

    increaseBtns.forEach((activeBtn) => {
        const inputValue = activeBtn.previousElementSibling
        const counter = inputValue.previousElementSibling

        activeBtn.addEventListener('click', () => {
            const newValue = Number(counter.textContent.trim()) + 1
            counter.textContent = newValue.toString()
            inputValue.value = newValue

            let wordForm

            if (blockID.includes('adults')) {
                if (newValue === 1) {
                    wordForm = 'взрослый'
                } else {
                    wordForm = 'взрослых'
                }

                document.getElementById('mobile_adults').textContent = newValue.toString()
                searchPeopleInput.value = `${newValue} ${wordForm}`
                testAdult.textContent = newValue.toString()
                testAdult.nextSibling.textContent = ''
                testAdult.nextSibling.textContent = ` ${wordForm}`
            } else {
                if (newValue === 1) {
                    wordForm = 'ребёнок'
                } else {
                    wordForm = 'детей'
                }

                if (newValue === 0) {
                    childCount.classList.add('d-none')
                } else {
                    childCount.classList.remove('d-none')
                }

                document.getElementById('mobile_child').textContent = newValue.toString()
                testChild.textContent = newValue.toString()
                testChild.nextSibling.textContent = ''
                testChild.nextSibling.textContent = ` ${wordForm}`
            }
        })
    })
}

function reduceQntPeople(blockID) {
    const reduceBtns = document.querySelectorAll(`.${blockID}`)

    reduceBtns.forEach((activeBtn) => {
        const counter = activeBtn.nextElementSibling

        activeBtn.addEventListener('click', () => {
            let condition

            if (blockID === 'minus_child') {
                condition = Number(counter.textContent.trim()) !== 0
            } else {
                condition = Number(counter.textContent.trim()) !== 1
            }

            if (condition) {
                const newValue = Number(counter.textContent.trim()) - 1
                counter.textContent = newValue.toString()
                counter.nextElementSibling.value = newValue

                let wordForm

                if (blockID.includes('adults')) {
                    if (newValue === 1) {
                        wordForm = 'взрослый'
                    } else {
                        wordForm = 'взрослых'
                    }

                    document.getElementById('mobile_adults').textContent = newValue.toString()
                    searchPeopleInput.value = `${newValue} ${wordForm}`
                    testAdult.textContent = newValue.toString()
                    testAdult.nextSibling.textContent = ''
                    testAdult.nextSibling.textContent = ` ${wordForm}`
                } else {
                    if (newValue === 1) {
                        wordForm = 'ребёнок'
                    } else {
                        wordForm = 'детей'
                    }

                    if (newValue === 0) {
                        childCount.classList.add('d-none')
                    } else {
                        childCount.classList.remove('d-none')
                    }

                    document.getElementById('mobile_child').textContent = newValue.toString()
                    testChild.textContent = newValue.toString()
                    testChild.nextSibling.textContent = ''
                    testChild.nextSibling.textContent = ` ${wordForm}`
                }
            }
        })
    })
}

searchPeriodInput.addEventListener('input', (event) => {
    if (event.target.value) {
        searchPeriodInput.classList.remove('error')
    } else {
        searchPeriodInput.classList.add('error')
    }
})

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 1170) {
        submitMainBtn.classList.remove('p-23-10')
    } else {
        submitMainBtn.classList.add('p-23-10')
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 1170) {
        submitMainBtn.classList.remove('p-23-10')
    } else {
        submitMainBtn.classList.add('p-23-10')
    }
});