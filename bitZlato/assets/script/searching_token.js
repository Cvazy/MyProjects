const btnSearch = document.getElementById('moneySearch')
const moneySearch = document.getElementById('buying')
const searchingUl = moneySearch.querySelector('.searching__ul')
const money = document.getElementById('money')
const searchingLi = searchingUl.querySelectorAll('li')
const searchInputToken = document.querySelector('[name="token"]');
const cryptoInput = document.getElementById('crypto')

btnSearch.addEventListener('click', () => {
    moneySearch.classList.toggle('hidden')
    btnSearch.querySelector('.sidebar__arrow').classList.toggle('rotate-180')

    searchingLi.forEach((li) => {
        li.addEventListener('click', () => {
            searchingLi.forEach((i) => i.classList.remove('searching__active'))

            money.textContent = li.textContent
            cryptoInput.value = money.textContent.toLowerCase()
            li.classList.add('searching__active')
        })
    })
})

searchInputToken.addEventListener('input', function () {
    let searchTerm = searchInputToken.value.toUpperCase();

    searchingLi.forEach(function (item) {
        let itemText = item.textContent.toUpperCase();
        if (itemText.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});