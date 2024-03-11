const radioBillet = document.querySelectorAll('.exc_price_row')

const onePriceBlock = document.querySelector('.one_price')
const manyPriceBlock = document.querySelector('.many_price')

const billetContainer = document.querySelector('.billet_types')
const appendBillet = document.querySelector('.btn__type_append')

const cleanSaleDate = document.querySelector('.sales_calendar__clean')

const saleBlock = document.querySelector('.sale_block')
const deleteSaleBlock = document.querySelector('.btn__delete_sale')
const salesVisible = document.querySelector('.btn__see_sales')

radioBillet.forEach((block) => {
    const blockInputs = block.querySelectorAll('input')
    const blockLabels = block.querySelectorAll('label')

    blockInputs.forEach((input) => {
        input.addEventListener('change', () => {
            blockInputs.forEach((el) => {
                el.checked = false
            })

            blockLabels.forEach((label) => {
                label.classList.remove('radio_active')
            })

            input.checked = true
            input.nextElementSibling.classList.add('radio_active')

            if (input.id === 'one_price') {
                onePriceBlock.classList.remove('d-none-imp')
                manyPriceBlock.classList.add('d-none-imp')
            } else if (input.id === 'price_by_type') {
                manyPriceBlock.classList.remove('d-none-imp')
                onePriceBlock.classList.add('d-none-imp')
            }
        })
    })
})

function createBilletTypeBlock() {
    const billetTypesItem = document.createElement('div')
    billetTypesItem.classList.add('billet_types__item')

    const billetTypesItemWrap = document.createElement('div')
    billetTypesItemWrap.classList.add('billet_types__item-wrap')

    const topicInput1 = document.createElement('div')
    topicInput1.classList.add('topic_input')
    topicInput1.setAttribute('onclick', 'newSelectors(this)')

    const selector = document.createElement('div')
    selector.classList.add('selector')

    const inputText = document.createElement('input')
    inputText.setAttribute('type', 'text')
    inputText.setAttribute('placeholder', 'Группа посетителей')
    inputText.setAttribute('name', 'billet_type')
    inputText.setAttribute('readonly', 'readonly')

    const imgSelectorArrow = document.createElement('img')
    imgSelectorArrow.classList.add('topic_input__icon', 'selector_arrow')
    imgSelectorArrow.setAttribute('src', 'assets/images/icons/arrow_down_dark.svg')
    imgSelectorArrow.setAttribute('alt', 'Arrow')

    const selectorBlock = document.createElement('div')
    selectorBlock.classList.add('selector_block', 'topic_select')

    const selectorBlockList = document.createElement('ul')
    selectorBlockList.classList.add('selector_block__list')

    const listItem1 = document.createElement('li')
    listItem1.classList.add('selector_block__item')
    listItem1.textContent = 'Пенсионеры'

    const listItem2 = document.createElement('li')
    listItem2.classList.add('selector_block__item')
    listItem2.textContent = 'Дети до 5 лет'

    const listItem3 = document.createElement('li')
    listItem3.classList.add('selector_block__item')
    listItem3.textContent = 'Дети до 18 лет'

    const topicInput2 = document.createElement('div')
    topicInput2.classList.add('topic_input')

    const inputNumber = document.createElement('input')
    inputNumber.setAttribute('type', 'number')
    inputNumber.setAttribute('name', 'var_price')
    inputNumber.setAttribute('placeholder', 'Цена')

    const imgRub = document.createElement('img')
    imgRub.classList.add('topic_input__icon')
    imgRub.setAttribute('src', 'assets/images/icons/rub.svg')
    imgRub.setAttribute('alt', 'Rub')
    imgRub.setAttribute('loading', 'lazy')

    const removeButton = document.createElement('button')
    removeButton.setAttribute('type', 'button')
    removeButton.classList.add('btn', 'btn__schedule', 'remove_billet')
    removeButton.setAttribute('onclick', 'removeBilletType(this)')

    const imgTrash = document.createElement('img')
    imgTrash.setAttribute('src', 'assets/images/account/trash.svg')
    imgTrash.setAttribute('alt', 'Remove')
    imgTrash.setAttribute('loading', 'lazy')

    billetTypesItem.appendChild(billetTypesItemWrap)
    billetTypesItem.appendChild(removeButton)

    billetTypesItemWrap.appendChild(topicInput1)
    billetTypesItemWrap.appendChild(topicInput2)

    topicInput1.appendChild(selector)

    selector.appendChild(inputText)
    selector.appendChild(imgSelectorArrow)
    selector.appendChild(selectorBlock)

    selectorBlock.appendChild(selectorBlockList)

    selectorBlockList.appendChild(listItem1)
    selectorBlockList.appendChild(listItem2)
    selectorBlockList.appendChild(listItem3)

    topicInput2.appendChild(inputNumber)
    topicInput2.appendChild(imgRub)
    removeButton.appendChild(imgTrash)

    return billetTypesItem
}

function newSelectors(el) {
    const selectorInput = el.querySelector('input')
    const selectorBlock = el.querySelector('.selector_block')
    const selectorArrow = el.querySelector('.selector_arrow')
    const selectItems = selectorBlock.querySelectorAll('.selector_block__item')

    el.addEventListener('click', () => {
        selectorInput.classList.remove('error')
        selectorArrow.classList.toggle('rotate-180')
        selectorBlock.classList.toggle('max-h-popup')
    })

    selectItems.forEach((item) => {
        item.addEventListener('click', () => {
            selectorInput.value = item.textContent.trim()
            selectorArrow.classList.remove('rotate-180')
            selectorBlock.classList.remove('max-h-popup')
        })
    })
}

function removeBilletType(btn) {
    const btnParent = btn.parentNode
    btnParent.remove()
}

appendBillet.addEventListener('click', () => {
    billetContainer.appendChild(createBilletTypeBlock())
})

cleanSaleDate.addEventListener('click', () => {
    const appendBlock = cleanSaleDate.parentNode
    const dateInput = appendBlock.querySelector('input')
    dateInput.value = ''
})

deleteSaleBlock.addEventListener('click', () => {
    saleBlock.classList.add('d-none-imp')
    salesVisible.classList.remove('d-none-imp')
})

salesVisible.addEventListener('click', () => {
    salesVisible.classList.add('d-none-imp')
    saleBlock.classList.remove('d-none-imp')
})

