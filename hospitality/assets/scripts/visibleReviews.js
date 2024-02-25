const allReviews = document.querySelectorAll('.user_review')

allReviews.forEach((review) => {
    const visibleReview = review.querySelector('.visible_review')
    const hiddenReview = review.querySelector('.hidden_review')
    const reviewBlock = review.querySelector('.reviews_rating__bottom')

    visibleReview.addEventListener('click', () => {
        visibleReview.classList.add('d-none-imp')
        hiddenReview.classList.remove('d-none-imp')
        reviewBlock.classList.remove('max-h-0-imp')
    })

    hiddenReview.addEventListener('click', () => {
        hiddenReview.classList.add('d-none-imp')
        visibleReview.classList.remove('d-none-imp')
        reviewBlock.classList.add('max-h-0-imp')
    })
})