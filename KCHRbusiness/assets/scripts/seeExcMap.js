const modalMapBlock = document.querySelector('.obj_location')
const openModalMap = document.querySelector('.btn__see_on_map')
const closeModalMap = document.querySelector('.close_modal_map')

openModalMap.addEventListener('click', () => {
    modalMapBlock.classList.remove('d-none-imp')
})

closeModalMap.addEventListener('click', () => {
    modalMapBlock.classList.add('d-none-imp')
})
