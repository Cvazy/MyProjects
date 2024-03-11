const allDeletePhotoBtns = document.querySelectorAll('.object_image')

function deleteImageBlocks() {
    const allInputObjImg = document.querySelectorAll('.object_image_add')

    allInputObjImg.forEach((block) => {
        const deleteObjImage = block.querySelector('.custom_delete')

        block.addEventListener('click', (event) => {
            if (deleteObjImage) {
                if (!deleteObjImage.contains(event.target)) {
                    block.querySelector('input').click()
                }
            } else {
                block.querySelector('input').click()
            }
        })
    })
}

deleteImageBlocks()

allDeletePhotoBtns.forEach((block) => {
    const deleteBtn = block.querySelector('button')

    deleteBtn.addEventListener('click', () => {
        block.remove()
    })
})