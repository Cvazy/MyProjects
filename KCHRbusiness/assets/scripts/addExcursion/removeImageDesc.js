function removeImageDesc() {
    const topicImages = document.querySelectorAll('.topic_place__item')

    topicImages.forEach((block) => {
        const blockDelete = block.querySelector('.exc_image_delete')

        if (blockDelete) {
            blockDelete.addEventListener('click', () => {
                block.remove()
            })
        }
    })
}

removeImageDesc()