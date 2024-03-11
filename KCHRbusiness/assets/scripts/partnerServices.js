const servicesBlock = document.querySelector('.partner__services-blocks')
const seeAllServices = document.querySelector('.see_more_services')
const seeServicesArrow = seeAllServices.querySelector('img')
const seeServicesText = seeAllServices.querySelector('p')

const allServicesTab = document.querySelectorAll('.service')

seeAllServices.addEventListener('click', () => {
    servicesBlock.classList.toggle('max-h-icons')
    seeServicesArrow.classList.toggle('rotate-180')

    const newText = seeAllServices.getAttribute('data-text')
    seeServicesText.textContent = `${newText}`

    if (newText === 'Скрыть') {
        seeAllServices.setAttribute('data-text', 'Показать больше')
    } else {
        seeAllServices.setAttribute('data-text', 'Скрыть')
    }
})

allServicesTab.forEach((tab) => {
    tab.addEventListener('click', () => {
        allServicesTab.forEach((el) => {
            el.classList.remove('service_active')
        })

        tab.classList.add('service_active')

        const newActiveBlock = tab.getAttribute('data-tab-active')

        const allSmallServiceBlock = document.querySelectorAll('.partner__blocks-small')

        allSmallServiceBlock.forEach((block) => {
            block.classList.add('d-none-imp')
        })

        const visibleBlock = document.querySelector(`[data-tab-block=${newActiveBlock}]`)
        visibleBlock.classList.remove('d-none-imp')
    })
})