const topicPlaces = document.querySelector('.topic_place')
const topicDescriptionInputs = document.querySelectorAll('.topic_input')
const appendTopicImage = document.querySelector('.btn__append')

topicDescriptionInputs.forEach((block) => {
    const blockInput = block.querySelector('input')
    const blockInputClean = block.querySelector('img')

    blockInput.addEventListener('input', () => {
        blockInput.classList.remove('error')
    })

    blockInputClean.addEventListener('click', () => {
        blockInput.value = ''
    })
})

function createTopicPlaceItem(name, photo_desc) {
    const topicPlaceItem = document.createElement('div')
    topicPlaceItem.classList.add('topic_place__item')

    const objectImageAdd = document.createElement('div')
    objectImageAdd.classList.add('object_image_add')

    const inputFile = document.createElement('input')
    inputFile.setAttribute('type', 'file')
    inputFile.classList.add('d-none-imp')
    inputFile.setAttribute('name', name)

    const deleteImageBlock = document.createElement('button')
    deleteImageBlock.setAttribute('type', 'button')
    deleteImageBlock.classList.add('btn', 'exc_image_delete', 'custom_delete')
    const deleteImg = document.createElement('img')
    deleteImg.setAttribute('src', 'assets/images/account/trash.svg')
    deleteImg.setAttribute('alt', 'Delete')
    deleteImg.setAttribute('loading', 'lazy')

    deleteImageBlock.appendChild(deleteImg)

    const objectImageAddWrapper = document.createElement('div')
    objectImageAddWrapper.classList.add('object_image_add__wrapper')

    const img = document.createElement('img')
    img.classList.add('d-block')
    img.setAttribute('src', 'assets/images/icons/gallery-add.svg')
    img.setAttribute('alt', 'Icon')
    img.setAttribute('loading', 'lazy')

    const p = document.createElement('p')
    p.classList.add('m-0', 'lg-text', 'text-dark', 'text-medium', 'text-center')
    p.textContent = 'Загрузить фото'

    objectImageAddWrapper.appendChild(img)
    objectImageAddWrapper.appendChild(p)
    objectImageAdd.appendChild(inputFile)
    objectImageAdd.appendChild(deleteImageBlock)
    objectImageAdd.appendChild(objectImageAddWrapper)

    const topicInput = document.createElement('div')
    topicInput.classList.add('topic_input')

    const inputText = document.createElement('input')
    inputText.setAttribute('type', 'text')
    inputText.setAttribute('placeholder', 'Место')
    inputText.setAttribute('data-input-required', 'required')
    inputText.setAttribute('oninput', 'validateTextInput(event)')
    inputText.setAttribute('name', photo_desc)

    const closeIcon = document.createElement('img')
    closeIcon.classList.add('topic_input__icon')
    closeIcon.setAttribute('src', 'assets/images/icons/close-square.svg')
    closeIcon.setAttribute('alt', 'Clean')

    topicInput.appendChild(inputText)
    topicInput.appendChild(closeIcon)

    topicPlaceItem.appendChild(objectImageAdd)
    topicPlaceItem.appendChild(topicInput)

    return topicPlaceItem
}

appendTopicImage.addEventListener('click', () => {
    const newDesc = document.querySelectorAll('.topic_input input')
    const lastEl = newDesc[newDesc.length - 1]
    const lastElName = lastEl.getAttribute('name')
    const lastElCount = parseInt(lastElName.replace(/\D/g, ''), 10)

    const newPlace = createTopicPlaceItem(`photo${lastElCount}`, `photo_desc${lastElCount}`)
    topicPlaces.appendChild(newPlace)

    removeImageDesc()
    deleteImageBlocks()
})