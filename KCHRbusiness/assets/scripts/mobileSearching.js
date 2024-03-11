const searchingBlockMobile = document.querySelector('.mobile-town-list')
const townInputMobile = document.querySelector('.input__item-mobile')

const mobileSearchEmojiInput = document.querySelector('[name="emoji_mobile"]')
const mobileEmojiList = document.querySelector('.mobile-emoji-list')

searchingInput(townInputMobile, searchingBlockMobile,'mobile', searchTownInput)
searchingInput(mobileSearchEmojiInput, mobileEmojiList, 'mobile', searchEmojiInput)