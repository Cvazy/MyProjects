const favoriteBtns = document.querySelectorAll('.favourites')

favoriteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const listImages = btn.querySelectorAll('img')

        if (listImages[0].style.display !== 'none') {
            listImages[0].style.display = 'none'
            listImages[1].style.display = 'block'
        } else {
            listImages[1].style.display = 'none'
            listImages[0].style.display = 'block'
        }
    })
})