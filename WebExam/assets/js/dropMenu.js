const navMenu = document.getElementById('navMenu')
const navButton = document.getElementById('navButton')

function dropMenu(item) {
    if (window.innerWidth <= 767) {
        item.addEventListener('click', () => {
            navMenu.classList.toggle('mh-0')
            navMenu.classList.toggle('mh-max-200px')
        })
    } else {
        item.addEventListener('mouseover', () => {
            navMenu.classList.remove('mh-0')
            navMenu.classList.add('mh-max-200px')
        })

        item.addEventListener('mouseout', () => {
            navMenu.classList.remove('mh-max-200px')
            navMenu.classList.add('mh-0')
        })
    }
}

dropMenu(navMenu)
dropMenu(navButton)