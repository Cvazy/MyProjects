<?php
// Подключение файла, необходимого для работы с WooCommerce
require_once './header.php';

// Получение объекта корзины WooCommerce
$woocommerce = WC();

// Получение актуального значения итоговой стоимости корзины
$totalCost = $woocommerce->cart->get_cart_total();

// Отправка значения итоговой стоимости в ответ на AJAX запрос
echo $totalCost;
