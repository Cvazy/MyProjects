const newLangBnt = document.querySelector('.btn__new-lang')
const englishLang = document.querySelector('.english_lang')
const removeEnglish = document.getElementById('remove_english')

const searchTown = document.getElementById('search_town')
const selectTown = document.getElementById('select_town')

newLangBnt.addEventListener('click', () => {
    englishLang.classList.remove('d-none-imp')
    newLangBnt.classList.add('d-none-imp')
})

removeEnglish.addEventListener('click', () => {
    englishLang.classList.add('d-none-imp')
    newLangBnt.classList.remove('d-none-imp')
})

searchingInput(searchTown, selectTown)