const gitEditBtns = document.querySelectorAll('.gid_edit_btn')
const editGidPhoto = editGidBlock.querySelector('.edit_gid_photo')
const editGidName = editGidBlock.querySelector('.edit_gid_name')
const editGidRemove = editGidBlock.querySelector('.gid_remove_btn')

const allDeleteBtns = document.querySelectorAll('.gid_remove_btn')
const modalDeleteGid = document.querySelector('.gid_delete_blackout')
const deleteGidInput = modalDeleteGid.querySelector('input')
const deleteGidImg = modalDeleteGid.querySelector('.modal_gid_avatar')
const deleteGidName = modalDeleteGid.querySelector('.modal_gid_name')
const modalGidClose = document.querySelectorAll('.modal_gid__close')

const modalGidForm = document.querySelector('.modal_gid_form')

if (gitEditBtns) {
    gitEditBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const gidId = btn.getAttribute('data-edit-gid')
            const gidBlock = document.querySelector(`[data-gid-id="${gidId}"]`)
            const gidWrapper = gidBlock.querySelector('.gid_item')
            const gidPhoto = gidBlock.querySelector('.gid_avatar')
            const gidPhotoSrc = gidPhoto.getAttribute('src')
            const gidName = gidBlock.querySelector('.gid_name').textContent

            allGids.forEach((el) => {
                el.classList.remove('gid_item_active')
            })
            gidWrapper.classList.add('gid_item_active')
            editGidPhoto.setAttribute('src', `${gidPhotoSrc}`)
            editGidName.textContent = gidName
            editGidRemove.setAttribute('data-remove-gid', `${gidId}`)
            editGidRemove.setAttribute('data-gid-name', `${gidName}`)
            editGidRemove.setAttribute('data-gid-img', `${gidPhotoSrc}`)

            editGidBlock.classList.remove('d-none-imp')
            setTimeout(() => {
                editGidBlock.classList.add('max-h-three-screen-imp')
            }, 100)
        })
    })
}

allDeleteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const gidId = btn.getAttribute('data-remove-gid')
        const gidName = btn.getAttribute('data-gid-name')
        const gidImageSrc = btn.getAttribute('data-gid-img')

        deleteGidInput.value = `${gidId}`
        deleteGidName.textContent = gidName
        deleteGidImg.setAttribute('src', `${gidImageSrc}`)
        modalDeleteGid.classList.remove('d-none-imp')
    })
})

modalGidClose.forEach((btn) => {
    btn.addEventListener('click', () => {
        modalDeleteGid.classList.add('d-none-imp')
    })
})

modalGidForm.addEventListener('submit', (event) => {
    const deleteGidId = deleteGidInput.value
    const gidBlock = document.querySelector(`[data-gid-id="${deleteGidId}"]`)

    gidBlock.classList.add('d-none-imp')

    event.preventDefault()
    modalDeleteGid.classList.add('d-none-imp')
})