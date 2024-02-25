const allInputObjImg = document.querySelectorAll('.object_image_add')
const allDeletePhotoBtns = document.querySelectorAll('.object_image')

allInputObjImg.forEach((block) => {
    block.addEventListener('click', () => {
        block.querySelector('input').click()
    })
})

allDeletePhotoBtns.forEach((block) => {
    const deleteBtn = block.querySelector('button')

    deleteBtn.addEventListener('click', () => {
        block.remove()
    })
})