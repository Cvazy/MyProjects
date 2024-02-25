const blogWrapper = document.querySelector('.blog_details')
const blogNavItem = document.querySelectorAll('.blog_nav__item')

blogNavItem.forEach((el) => {
    el.addEventListener('click', () => {
        blogNavItem.forEach((nav) => {
            nav.classList.remove('blog_nav__active')
        })

        const activeBlogTitle = document.getElementById(`${el.getAttribute('data-nav-block')}`)

        if (activeBlogTitle) {
            el.classList.add('blog_nav__active')
            activeBlogTitle.scrollIntoView()
        }
    })
})