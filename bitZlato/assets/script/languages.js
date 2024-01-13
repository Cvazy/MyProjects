const languageBtn = document.querySelector('.language__btn')
const languageList = document.querySelector('.languages__list')
const languageListLi = languageList.querySelectorAll('li')

languageBtn.addEventListener('click', () => {
    languageList.classList.toggle('hidden')
})

languageListLi.forEach((language) => {
    language.addEventListener('click', () => {
        languageListLi.forEach((el) => {
            el.classList.remove('lg__active')
        })

        language.classList.add('lg__active')
        languageBtn.textContent = language.textContent
    })
})