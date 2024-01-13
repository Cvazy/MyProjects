const btnPayments = document.getElementById('paymentSearch')
const payMent = document.getElementById('payMent')
const paymentUL = payMent.querySelector('.searching__ul')
const searchingLiPayment = paymentUL.querySelectorAll('li')
const searchInputPayment = document.querySelector('[name="payment"]');
const choosingItems = document.querySelectorAll('.choosing__item')
const deletingItems = document.querySelectorAll('.delete-payment')
const paymentsInput = document.getElementById('payments')

btnPayments.addEventListener('click', () => {
    payMent.classList.toggle('hidden')
    btnPayments.querySelector('.sidebar__arrow').classList.toggle('rotate-180')

    searchingLiPayment.forEach((li) => {
        li.addEventListener('click', () => {
            searchingLiPayment.forEach((i) => i.classList.remove('searching__active'))
            
            choosingItems.forEach((choose) => {
                if (choose.querySelector('span').textContent === li.textContent) {
                    if (paymentsInput.value.length > 0) {
                        paymentsInput.value += `,${li.textContent.replace(/\s/g, "")}`
                    } else {
                        paymentsInput.value = li.textContent.replace(/\s/g, "")
                    }
                    choose.classList.remove('hidden')
                }
            })
        })
    })
})

searchInputPayment.addEventListener('input', function () {
    let searchTerm = searchInputPayment.value.toUpperCase();

    searchingLiPayment.forEach(function (item) {
        let itemText = item.textContent.toUpperCase();
        if (itemText.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

deletingItems.forEach((pay) => {
    pay.addEventListener('click', () => {
        pay.closest('div.choosing__item').classList.add('hidden')
    })
})