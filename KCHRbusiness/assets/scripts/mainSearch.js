const mainSearchBlock = document.getElementById('searching')
const mainSearchTownInput = mainSearchBlock.querySelector('.search_town')
const mainSearchTownList = mainSearchBlock.querySelector('.search_name')

const mainSearchEmoji = document.getElementById('emoji')
const mainSearchEmojiInput = mainSearchEmoji.querySelector('.search_emoji')
const mainSearchEmojiList = mainSearchEmoji.querySelector('.search_emoji_list')

const mainChoosePeople = document.getElementById('choose_people')

searchPeopleInput.addEventListener('click', () => {
    mainChoosePeople.classList.toggle('max-h-popup')
})

searchingInput(mainSearchTownInput, mainSearchTownList)
searchingInput(mainSearchEmojiInput, mainSearchEmojiList)