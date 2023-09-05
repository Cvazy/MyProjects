ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.674591638018384,37.943235965606654],
            zoom: 15,
            controls: []
        }, {
            searchControlProvider: 'yandex#search',

        }),
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Дело в прицепе',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'http://delo-v.lo/wp-content/themes/delo-v/assets/img/loc-map.svg',
            // Размеры метки.
            iconImageSize: [170, 100],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});



ymaps.ready(function () {
    var myMap = new ymaps.Map('map2', {
            center: [55.674591638018384,37.943235965606654],
            zoom: 15,
            controls: []
        }, {
            searchControlProvider: 'yandex#search',

        }),
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Дело в прицепе',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/loc-map.svg',
            // Размеры метки.
            iconImageSize: [170, 100],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});

// Функция для форматирования цены
function formatPrice(price) {
    return price.toLocaleString('ru-RU');
}

// Функция для установки данных в куки
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
}

// Функция для получения данных из куки
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Функция для обновления итоговой стоимости и количества товаров
function updateCart() {
    let totalCost = 0;
    let totalQuantity = 0;

    $('.cart__item').each(function() {
        const $container = $(this);
        const $input = $container.find('.quantity');
        const $priceElement = $container.find('.product-price');
        const initialPrice = parseFloat($priceElement.data('initial-price'));

        const count = parseInt($input.val());
        const itemCost = initialPrice * count;
        const itemQuantity = count;

        totalCost += itemCost;
        totalQuantity += itemQuantity;

        $priceElement.text('от ' + formatPrice(itemCost) + ' ₽ / тонна');
    });

    $('.basket-section-content-right-block p').text('~ ' + formatPrice(totalCost) + ' ₽');
    $('.header-sum-basket').text(formatPrice(totalCost) + ' ₽');
    $('.cart-quantity').text(totalQuantity);

    setCookie('totalCost', totalCost.toString(), 7); // Сохраняем итоговую стоимость в куки на 7 дней
    setCookie('totalQuantity', totalQuantity.toString(), 7); // Сохраняем количество товаров в куки на 7 дней
}

// Обработчик клика на кнопку уменьшения количества товара
$(document).on('click', '.bt_minus', function() {
    const $container = $(this).closest('.cart__item');
    const $input = $container.find('.quantity');

    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);

    updateCart(); // Обновляем корзину после изменения количества товаров
});

// Обработчик клика на кнопку увеличения количества товара
$(document).on('click', '.bt_plus', function() {
    const $container = $(this).closest('.cart__item');
    const $input = $container.find('.quantity');

    let count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(count);

    updateCart(); // Обновляем корзину после изменения количества товаров
});

// Обработчик изменения количества товара вручную
$(document).on('change', '.quantity', function() {
    updateCart(); // Обновляем корзину после изменения количества товаров
});

// Функция для установки значений из куки при загрузке страницы
function restoreFromCookie() {
    const savedTotalCost = getCookie('totalCost');
    const savedTotalQuantity = getCookie('totalQuantity');

    if (savedTotalCost !== null && savedTotalQuantity !== null) {
        const totalCost = parseInt(savedTotalCost);
        const totalQuantity = parseInt(savedTotalQuantity);

        $('.basket-section-content-right-block p').text('~ ' + formatPrice(totalCost) + ' ₽');
        $('.header-sum-basket').text(formatPrice(totalCost) + ' ₽');
        $('.cart-quantity').text(totalQuantity);

        // Установка сохраненных значений в поля количества товаров
        $('.quantity').val(totalQuantity);
    }
}

// Функция для восстановления количества товаров из куки
function restoreItemCountFromCookie() {
    $('.cart__item').each(function() {
        const $container = $(this);
        const itemId = $container.attr('data-item-id');
        const savedItemCount = getCookie(itemId + '_count');

        if (savedItemCount !== null) {
            const count = parseInt(savedItemCount);
            $container.find('.quantity').val(count);
        }
    });
}

// При загрузке страницы
$(document).ready(function() {
    // Восстановление данных из куки, если они доступны
    restoreFromCookie();

    // Восстановление количества товаров из куки
    restoreItemCountFromCookie();

    // Обновление данных корзины при загрузке страницы
    updateCart();

    // Обновление куки при изменении данных корзины
    $(window).on('beforeunload', function() {
        const totalCost = parseInt(getCookie('totalCost'));
        const totalQuantity = parseInt(getCookie('totalQuantity'));

        $('.cart__item').each(function() {
            const $container = $(this);
            const $input = $container.find('.quantity');
            const count = parseInt($input.val());

            const itemId = $container.attr('data-item-id');
            setCookie(itemId + '_count', count.toString(), 7); // Сохраняем количество товара в куки на 7 дней
        });
    });
});



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.control-phone'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    });

});

const btnNum = document.querySelectorAll('.cart-description-tab');
const tab = document.querySelectorAll('.cart-description-tab-content')

btnNum.forEach(function (item){
    item.addEventListener('click', function (){
        btnNum.forEach(function (i){
            i.classList.remove('cart-description-tab-active')
        })

        item.classList.add('cart-description-tab-active')

        let tubID = item.getAttribute('data-tab');
        let tabActive = document.querySelector(tubID);

        tab.forEach(function (item){
            item.classList.remove('cart-description-tab-content-active')
        })
        tabActive.classList.add('cart-description-tab-content-active')

    })
})



const btnNum2 = document.querySelectorAll('.section-order-pay-container-block');

btnNum2.forEach(function (item){
    item.addEventListener('click', function (){
        btnNum2.forEach(function (i){
            i.classList.remove('section-order-pay-container-block-active')
        })

        item.classList.add('section-order-pay-container-block-active')


    })
})



const btnNum3 = document.querySelectorAll('.section-order-pay-container-block2');

btnNum3.forEach(function (item){
    item.addEventListener('click', function (){
        btnNum3.forEach(function (i){
            i.classList.remove('section-order-pay-container-block-active2')
        })

        item.classList.add('section-order-pay-container-block-active2')


    })
})



const btnNum4 = document.querySelectorAll('.section-order-pay-container-block3');

btnNum4.forEach(function (item){
    item.addEventListener('click', function (){
        btnNum4.forEach(function (i){
            i.classList.remove('section-order-pay-container-block-active3')
        })

        item.classList.add('section-order-pay-container-block-active3')


    })
})

// Обработка нажатия на кнопку "В КОРЗИНУ"
$('.services-example-container-block-content-btn-basket').on('click', function(e) {
    e.preventDefault();

    // Получение значения идентификатора товара
    var productId = $(this).data('product-id');

    // AJAX-запрос на добавление товара в корзину
    $.ajax({
        url: '/wp-admin/admin-ajax.php',
        type: 'POST',
        data: {
            action: 'add_to_cart',
            product_id: productId
        },
        success: function (response) {
            if (response.success) {
                alert(response.data);
                // Здесь можно выполнить дополнительные действия после успешного добавления товара в корзину
            } else {
                alert(response.data);
            }
        },
        error: function () {
            alert('Произошла ошибка при выполнении AJAX-запроса.');
        }
    });
});

$('.btn-cart-add-basket').on('click', function(e) {
    e.preventDefault();

    // Получение значения идентификатора товара
    var productId = $(this).data('product-id');

    // AJAX-запрос на добавление товара в корзину
    $.ajax({
        url: '/wp-admin/admin-ajax.php',
        type: 'POST',
        data: {
            action: 'add_to_cart',
            product_id: productId
        },
        success: function (response) {
            if (response.success) {
                alert(response.data);
                // Здесь можно выполнить дополнительные действия после успешного добавления товара в корзину
            } else {
                alert(response.data);
            }
        },
        error: function () {
            alert('Произошла ошибка при выполнении AJAX-запроса.');
        }
    });
});

$('.close-btn-basket').on('click', function(e) {
    e.preventDefault();

    // Получение значения идентификатора товара
    var productId = $(this).data('product-id');

    // AJAX-запрос на добавление товара в корзину
    $.ajax({
        url: '/wp-admin/admin-ajax.php',
        type: 'POST',
        data: {
            action: 'remove_from_cart',
            product_id: productId
        },
        success: function (response) {
            if (response.success) {
                alert(response.data);
                // Здесь можно выполнить дополнительные действия после успешного добавления товара в корзину
            } else {
                alert(response.data);
            }
        },
        error: function () {
            alert('Произошла ошибка при выполнении AJAX-запроса.');
        }
    });
});

function selectPersonType(personType) {
    var physicalPerson = document.getElementById('physical-person');
    var legalPerson = document.getElementById('legal-person');

    if (personType === 'physical') {
        physicalPerson.style.display = 'flex';
        legalPerson.style.display = 'none';
    } else if (personType === 'legal') {
        physicalPerson.style.display = 'none';
        legalPerson.style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var makeOrderButton = document.querySelector('.btn-make-order');
    makeOrderButton.addEventListener('click', function() {
        // Получение данных из формы
        var userName = document.querySelector('input[name="user_name"]').value;
        var userPhone = document.querySelector('input[name="user_phone"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var orderTotal = document.querySelector('input[name="order_total"]').value;

        // Создание объекта FormData и добавление данных формы
        var formData = new FormData();
        formData.append('user_name', userName);
        formData.append('user_phone', userPhone);
        formData.append('email', email);
        formData.append('order_total', orderTotal);

        // Отправка AJAX-запроса на обработчик заказа
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://delo-v.lo/wp-content/themes/delo-v/send_email.php', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                // Проверка ответа сервера
                if (response.success) {
                    alert('Заказ успешно оформлен. Информация отправлена на указанный email.');
                } else {
                    alert('Ошибка при оформлении заказа: ' + response.data);
                }
            } else {
                alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
            }
        };
        xhr.send(formData);
    });
});
