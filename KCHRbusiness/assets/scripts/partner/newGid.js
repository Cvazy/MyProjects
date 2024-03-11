const allGids = document.querySelectorAll('.gid_item')

const addGidBtns = document.querySelectorAll('.btn__new-gid')
const addGidBlock = document.querySelector('.add_gid')
const editGidBlock = document.querySelector('.edit_gid')

const hiddenForm = document.querySelectorAll('.cancel_gid')

addGidBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.add('d-none-imp')
        addGidBlock.classList.remove('d-none-imp')
        setTimeout(() => {
            addGidBlock.classList.add('max-h-three-screen-imp')
        }, 100)
    })
})

hiddenForm.forEach((block) => {
    block.addEventListener('click', () => {
        addGidBtns.forEach((btn) => {
            btn.classList.remove('d-none-imp')
            addGidBlock.classList.remove('max-h-three-screen-imp')
            editGidBlock.classList.remove('max-h-three-screen-imp')
            setTimeout(() => {
                addGidBlock.classList.add('d-none-imp')
                editGidBlock.classList.add('d-none-imp')
            }, 300)
        })

        allGids.forEach((el) => {
            el.classList.remove('gid_item_active')
        })
    })
})
