const couponBanner = document.querySelector('.blog-coupon')
const closeCouponBanner = document.querySelector('.coupon-close')

closeCouponBanner.addEventListener('click', () => {
    couponBanner.style.display = 'none'
})