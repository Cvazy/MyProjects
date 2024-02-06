
function closeOutsideClickBlock(inputID, popupID) {
    document.addEventListener('click', function(event) {
        const inputItem = document.getElementById(`${inputID}`)
        const isClickInsideInputItem = inputItem.contains(event.target)
        const popupBlock = document.getElementById(`${popupID}`)
        const isClickInsidePopup = popupBlock.contains(event.target)

        if (!isClickInsideInputItem && !isClickInsidePopup) {
            popupBlock.classList.remove('max-h-popup')
        }

        if (!dropMenu.classList.contains('max-h-popup')) {
            dropMenuArrow.classList.remove('rotate-180')
        }
    })
}


closeOutsideClickBlock('search_town', 'select_town')
closeOutsideClickBlock('search_people', 'choose_people')
closeOutsideClickBlock('hotel', 'dropMenu')