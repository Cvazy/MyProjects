const smooth = document.getElementById('smooth')
const seeEvent = document.getElementById('seeEvent')
const editEvent = document.getElementById('editEvent')
const deleteEvent = document.getElementById('deleteEvent')

function modalSeeTravel (btn) {
    const btnParentBlock = btn.parentElement.parentElement.parentElement
    const travelNumber = seeEvent.querySelector('[data-span="travelNumber"]')
    const seeEventClose = seeEvent.querySelector('[data-action="closeModal"]')
    const travelName = seeEvent.querySelector('[data-span="travelName"]')
    const travelDate = seeEvent.querySelector('[data-span="travelDate"]')
    const travelCost = seeEvent.querySelector('[data-span="travelCost"]')

    travelNumber.textContent = btnParentBlock.querySelector('[data-row="travelNumber"]').textContent
    travelName.textContent = btnParentBlock.querySelector('[data-row="travelName"]').textContent
    travelDate.textContent = btnParentBlock.querySelector('[data-row="travelDate"]').textContent
    travelCost.textContent = btnParentBlock.querySelector('[data-row="travelCost"]').textContent

    smooth.classList.remove('d-none')
    smooth.classList.add('d-flex')

    seeEvent.classList.remove('d-none')
    seeEvent.classList.add('d-block')

    seeEventClose.addEventListener('click', () => {
        closeModal(seeEvent)
    })
}

function modalEditTravel (btn) {
    const btnParentBlock = btn.parentElement.parentElement.parentElement
    const editEventClose = editEvent.querySelectorAll('[data-action="closeModal"]')
    const travelDate = editEvent.querySelector('[name="editDateEvent"]')

    const components = btnParentBlock.querySelector('[data-row="travelDate"]').textContent.split(".")

    const originalDate = new Date(components[2], components[1] - 1, components[0])

    const year = originalDate.getFullYear()
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0')
    const day = originalDate.getDate().toString().padStart(2, '0')

    const formattedDate = `${year}-${month}-${day}`

    cost.textContent = btnParentBlock.querySelector('[data-row="travelCost"]').textContent
    travelDate.value = formattedDate

    smooth.classList.remove('d-none')
    smooth.classList.add('d-flex')

    editEvent.classList.remove('d-none')
    editEvent.classList.add('d-block')

    editEventClose.forEach((el) => {
        el.addEventListener('click', () => {
            closeModal(editEvent)
        })
    })
}

function modalDeleteTravel (btn) {
    const btnParentBlock = btn.parentElement.parentElement.parentElement
    const deleteEventClose = deleteEvent.querySelectorAll('[data-action="closeModal"]')
    const eventDelete = deleteEvent.querySelector('[data-action="deleteTravel"]')

    smooth.classList.remove('d-none')
    smooth.classList.add('d-flex')

    deleteEvent.classList.remove('d-none')
    deleteEvent.classList.add('d-block')

    eventDelete.addEventListener('click', () => {
        btnParentBlock.remove()
        closeModal(deleteEvent)
    })

    deleteEventClose.forEach((el) => {
        el.addEventListener('click', () => {
            closeModal(deleteEvent)
        })
    })
}

function closeModal(modalBlock) {
    modalBlock.classList.remove('d-block')
    modalBlock.classList.add('d-none')
    smooth.classList.add('d-none')
    document.body.classList.remove('overflow-hidden')
}