const seeMapBtn = document.getElementById('seeMap')
const catalogMap = document.querySelector('.catalog__map')
const closeMapBtn = document.querySelector('.close_map')
const filterWrap = document.querySelector('.filters')
const cardsWrap = document.querySelector('.cards')

seeMapBtn.addEventListener('click', (event) => {
    event.preventDefault()
    catalogMap.classList.add('map_visible')
    filterWrap.classList.add('catalog_none')
    cardsWrap.classList.add('catalog_none')
})

closeMapBtn.addEventListener('click', () => {
    catalogMap.classList.remove('map_visible')
    filterWrap.classList.remove('catalog_none')
    cardsWrap.classList.remove('catalog_none')
})