const searchingBlock = document.querySelector('.search_name')
const searchTownInput = document.querySelector('.search_town')
const townInputs = document.querySelectorAll('.search_town')

const searchEmojiInput = document.querySelector('.search_emoji')
const searchEmojiList = document.querySelector('.search_emoji_list')
const emojiInputs = document.querySelectorAll('.search_emoji')

const searchPeriodInput = document.querySelector('[name="select_period"]')
const periodInputs = document.querySelectorAll('[name="select_period"]')

const searchPeopleInput = document.getElementById('search_people')
const testAdult = document.getElementById('test_adults_qnt')
const testChild = document.getElementById('test_child_qnt')
const catalogAdult = document.getElementById('catalog_mobile_adults')
const catalogChild = document.getElementById('catalog_mobile_child')
const choosePeopleBlock = document.querySelectorAll('.choose_people')

const submitMainBtn = document.getElementById('submitMainBtn')

const childCount = document.getElementById('childCount')
const childCountMobile = document.getElementById('childCountMobile')

const formsSearching = document.querySelectorAll('.search_form')
const catalogFrom = document.querySelector('.catalog_inputs')

function processingForm(form) {
    townInputs.forEach((el) => {
        if (el.value === '') {
            el.classList.add('error')
        } else {
            el.classList.remove('error')
        }
    })

    emojiInputs.forEach((el) => {
        if (el.value === '') {
            el.classList.add('error')
        } else {
            el.classList.remove('error')
        }
    })

    periodInputs.forEach((el) => {
        if (el.value === '') {
            el.classList.add('error')
        } else {
            el.classList.remove('error')
        }
    })

    const popupBlocks = document.querySelectorAll('.popup_block')
    popupBlocks.forEach((el) => {
        el.classList.remove('max-h-popup')
    })

    const formData = new FormData(form);
    console.log(Object.fromEntries(formData));
}

formsSearching.forEach((form) => {
    form.addEventListener('submit', (event) => {
        processingForm(form)
        event.preventDefault()
    })
})

if (catalogFrom) {
    catalogFrom.addEventListener('submit', (event) => {
        processingForm(catalogFrom)
        event.preventDefault()
    })
}

//Поиск по городу
if (searchTownInput) {
    searchingInput(searchTownInput, searchingBlock)
}

//Поиск по впечатлениям
if (searchEmojiInput) {
    searchingInput(searchEmojiInput, searchEmojiList)
}

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

                if (catalogAdult) {
                    catalogAdult.textContent = newValue.toString()
                    catalogAdult.nextSibling.textContent = ''
                    catalogAdult.nextSibling.textContent = ` ${wordForm}`
                }
            } else {
                if (newValue === 1) {
                    wordForm = 'ребёнок'
                } else {
                    wordForm = 'детей'
                }

                if (newValue === 0) {
                    childCount.classList.add('d-none')

                    if (childCountMobile) childCountMobile.classList.add('d-none')
                } else {
                    childCount.classList.remove('d-none')
                    if (childCountMobile) childCountMobile.classList.remove('d-none')
                }

                document.getElementById('mobile_child').textContent = newValue.toString()
                testChild.textContent = newValue.toString()
                testChild.nextSibling.textContent = ''
                testChild.nextSibling.textContent = ` ${wordForm}`

                if (catalogChild) {
                    catalogChild.textContent = newValue.toString()
                    catalogChild.nextSibling.textContent = ''
                    catalogChild.nextSibling.textContent = ` ${wordForm}`
                }
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
                        if (childCountMobile) childCountMobile.classList.add('d-none')
                    } else {
                        childCount.classList.remove('d-none')
                        if (childCountMobile) childCountMobile.classList.remove('d-none')
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

