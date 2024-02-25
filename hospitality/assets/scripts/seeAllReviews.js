const reviewBlock = document.querySelector('.reviews_list')
const seeAllReviewsBtn = document.querySelector('.see_all_reviews')

seeAllReviewsBtn.addEventListener('click', () => {
    const hiddenReviews = reviewBlock.querySelectorAll('.d-none-imp.reviews_list__item')
    let counter = hiddenReviews.length

    if (counter > 1) {
        for (let i = 0; i < 2; i++) {
            hiddenReviews[i].classList.remove('d-none-imp')
            counter--
        }
    } else {
        hiddenReviews[0].classList.remove('d-none-imp')
        counter--
    }

    if (!counter) {
        seeAllReviewsBtn.classList.add('d-none-imp')
    }
})