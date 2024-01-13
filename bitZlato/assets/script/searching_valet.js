const btnCurrencies = document.getElementById('currenciesSearch')
const valetSearching = document.getElementById('valetSearching')
const valetUL = valetSearching.querySelector('.searching__ul')
const valet = document.getElementById('valet')
const searchingLiValet = valetUL.querySelectorAll('li')
const searchInputValet = document.querySelector('[name="valet"]');

btnCurrencies.addEventListener('click', () => {
    valetSearching.classList.toggle('hidden')
    btnCurrencies.querySelector('.sidebar__arrow').classList.toggle('rotate-180')

    searchingLiValet.forEach((li) => {
        li.addEventListener('click', () => {
            searchingLiValet.forEach((i) => i.classList.remove('searching__active'))

            valet.textContent = li.textContent
            li.classList.add('searching__active')
        })
    })
})

searchInputValet.addEventListener('input', function () {
    let searchTerm = searchInputValet.value.toUpperCase();

    searchingLiValet.forEach(function (item) {
        let itemText = item.textContent.toUpperCase();
        if (itemText.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});