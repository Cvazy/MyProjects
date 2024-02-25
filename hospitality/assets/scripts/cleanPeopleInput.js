const cleanInputSearch = document.getElementById('cleanInputSearch')
const qntChild = document.querySelector('[name="qnt_child"]')
const qntAdults = document.querySelector('[name="qnt_adults"]')
const paragraphQntAdultsPC = document.getElementById('desktop_adults')
const paragraphQntChildPC = document.getElementById('desktop_child')
const paragraphQntAdultsMob = document.getElementById('mobile_adults')
const paragraphQntChildMob = document.getElementById('mobile_child')

function cleanPeopleInput() {
    qntAdults.previousElementSibling.textContent = '1'
    qntAdults.value = 1
    searchPeopleInput.value = '1 взрослый'
    testAdult.textContent = '1'
    testAdult.nextSibling.textContent = ' взрослый'
    paragraphQntAdultsPC.textContent = '1'
    paragraphQntAdultsMob.textContent = '1'

    qntChild.previousElementSibling.textContent = '0'
    qntChild.value = 0

    testChild.textContent = '0'
    testChild.nextSibling.textContent = ' детей'
    paragraphQntChildPC.textContent = '0'
    paragraphQntChildMob.textContent = '0'
    childCount.classList.add('d-none')
}

cleanInputSearch.addEventListener('click', () => {
    inputTownMobile.value = ''
})