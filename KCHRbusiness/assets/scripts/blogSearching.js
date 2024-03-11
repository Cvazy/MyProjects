const searchBlogInput = document.getElementById('blog_search')
const blogList = document.getElementById('select_blog')

searchBlogInput.addEventListener('input', (event) => {
    if (event.target.value) {
        blogList.classList.add('max-h-popup')
        blogList.classList.add('br-main-color')
    } else {
        blogList.classList.remove('max-h-popup')
        blogList.classList.remove('br-main-color')
    }

    const nothingSearchItem = blogList.querySelector('.nothing_search')

    const searchItems = blogList.querySelectorAll('.finding_item')

    searchItems.forEach((item) => {
        if (!item.textContent.trim().toLowerCase().includes(event.target.value.trim().toLowerCase())) {
            item.classList.add('d-none')
        } else {
            item.classList.remove('d-none')
        }

        item.addEventListener('click', () => {
            if (!item.classList.contains('nothing_search')) {
                searchBlogInput.value = item.textContent.trim()
                blogList.classList.remove('max-h-popup')
                blogList.classList.remove('br-main-color')
            }
        })
    })

    const checkNothing = Array.from(searchItems).filter((item) => !item.classList.contains('d-none'))

    if (checkNothing.length === 0) {
        nothingSearchItem.classList.remove('d-none')
    } else {
        nothingSearchItem.classList.add('d-none')
    }
})