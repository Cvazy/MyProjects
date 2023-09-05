<?php

get_header();

?>

<?php
global $woocommerce;
$items = $woocommerce->cart->get_cart();
?>

<?php

/* Template Name: basket */

?>

<section class="basket-section">
    <div class="container">
        <div class="basket-section-top">
            <div class="bit-title-page">
                Корзина
            </div>
        </div>
        <div class="basket-section-content js-cart">
            <div class="basket-section-content-left">
                <?php foreach ($items as $cart_item_key => $cart_item) :
                    $_product = apply_filters('woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key);

                    $image_id = $_product->get_image_id();
                    $image_url = wp_get_attachment_image_url($image_id, 'full');
                    ?>

                    <div class="basket-section-content-left-block cart__item" data-item-id="<?php echo esc_attr($cart_item_key); ?>">
                        <div class="basket-section-content-left-block-img-right">
                            <div class="basket-section-content-left-block-img-parent">
                                <div class="basket-section-content-left-block-img">
                                    <img src="<?php echo $image_url ?>" alt="">
                                </div>
                            </div>
                            <div class="basket-section-content-left-block-info">
                                <h5><?php echo $_product->get_name(); ?></h5>
                                <div class="basket-section-content-left-block-text-info-text">
                                    <?php
                                    $data = search_data($cart_item['product_id']);
                                    $attributes = unserialize($data);

                                    if (!empty($attributes)) {
                                        $counter = 0; // счетчик атрибутов
                                        foreach ($attributes as $attribute) {
                                            $names = $attribute['name'];
                                            $lines_names = explode("\n", $names);
                                            $values = $attribute['value'];
                                            $lines_values = explode("\n", $values);

                                            foreach ($lines_names as $name) {
                                                $name = trim($name);
                                                $name = preg_replace('/^string\(\d+\)\s/', '', $name);

                                                foreach ($lines_values as $value) {
                                                    $value = trim($value);
                                                    $value = preg_replace('/^string\(\d+\)\s/', '', $value);
                                                    ?>
                                                    <p><?php echo $name ?>: <?php echo $value ?></p>
                                                    <?php
                                                    $counter++; // увеличиваем счетчик

                                                    if ($counter >= 3) {
                                                        break 3; // прерываем все три вложенных цикла
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    ?>
                                </div>
                            </div>
                        </div>

                        <div class="basket-section-content-left-content-centre">
                            <div class="basket-section-content-left-block-basket-price">
                                <h5 class="product-price" data-initial-price="<?php echo $_product->get_price(); ?>">от <?php echo number_format($_product->get_price(), 0, '', ' '); ?> ₽ / тонна</h5>
                            </div>
                            <div class="quantity_inner" style="margin-left: 65px;">
                                <button class="bt_minus">
                                    <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </button>
                                <input type="text" value="<?php echo $cart_item['quantity']; ?>" size="2" class="quantity cart-quantity" data-max-count="20">
                                <button class="bt_plus">
                                    <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </button>
                            </div>
                        </div>
                        <div class="close-btn-basket" data-product-id="<?php echo $cart_item['product_id'] ?>">
                            <img class="remove-item-btn" src="<?php bloginfo('template_url')?>/assets/img/close-btn-basket.svg" alt="">
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

            <div class="basket-section-content-right">
                <div class="basket-section-content-right-block">
                    <h5>Общая сумма заказа:</h5>
                    <p id="total-cost">
                        ~ <?php echo WC()->cart->get_cart_total(); ?>
                    </p>
                    <ul>
                        <li>Все цены с учетом НДС</li>
                        <li>Окончательную стоимость заказа вам сообщит менеджер.</li>
                    </ul>
                    <div class="make-order-button-container">
                        <button class="btn-make-order" type="button">Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="section-order-pay">
    <div class="container">
        <div class="section-order-pay-container">
            <div class="section-order-pay-title">
                Оформление заказа
            </div>
            <div class="section-order-pay-container-blocks">
                <div class="section-order-pay-container-block section-order-pay-container-block-active">
                    <p>Физическое лицо</p>
                    <button type="button" class="btn-usual-order" onclick="selectPersonType('physical')">Выбрать</button>
                    <button type="button" class="btn-active-order">
                        <img src="<?php bloginfo('template_url')?>/assets/img/tick.svg" alt="">
                        Выбрано
                    </button>
                </div>
                <div class="section-order-pay-container-block">
                    <p>Юридическое лицо</p>
                    <button type="button" class="btn-usual-order" onclick="selectPersonType('legal')">Выбрать</button>
                    <button type="button" class="btn-active-order">
                        <img src="<?php bloginfo('template_url')?>/assets/img/tick.svg" alt="">
                        Выбрано
                    </button>
                </div>
            </div>
        </div>
        <div class="basket-form">
            <div class="section-order-pay-title">Контактные данные</div>
            <form action="send_email.php" method="post">
                <div id="physical-person" class="left-form-contact">
                    <div class="group group3">
                        <input type="text" class="control" name="user_name" placeholder=" " required>
                        <label>Введите имя</label>
                    </div>
                    <div class="group group3">
                        <input type="text" class="control control-phone" name="user_phone" placeholder=" " required>
                        <label>Введите телефон</label>
                    </div>
                    <div class="group group3">
                        <input type="email" id="email" class="control" name="email" placeholder=" " required>
                        <label>Ваш Email</label>
                    </div>
                </div>

                <div id="legal-person" class="left-form-contact" style="display: none;">
                    <div class="group group3">
                        <input type="text" class="control" name="user_name" placeholder=" " required>
                        <label>Введите имя</label>
                    </div>
                    <div class="group group3">
                        <input type="text" class="control control-phone" name="user_phone" placeholder=" " required>
                        <label>Введите телефон</label>
                    </div>
                    <div class="group group3">
                        <input type="email" id="email" class="control" name="email" placeholder=" " required>
                        <label>Ваш Email</label>
                    </div>
                    <div class="group group3">
                        <input type="text" class="control" name="user_company" placeholder=" " required>
                        <label>Название компании</label>
                    </div>
                    <div class="group group3">
                        <input type="text" class="control" name="user_inn" placeholder=" " required>
                        <label>Введите ИНН</label>
                    </div>
                </div>
                <div class="checkbox">
                    <label class="custom-checkbox">
                        <input type="checkbox" name="cb_all" value="indigo" data-check="" id="parent2" class="parent" required>
                        <span></span>
                        <div class="span-a">
                            Я даю свое согласие на
                            обработку персональных данных,
                            соглашаюсь с политикой обработки оператора.
                        </div>
                    </label>
                </div>
                <div class="section-order-pay-container">
                    <div class="section-order-pay-title">
                        Способы получения заказа
                    </div>
                    <div class="section-order-pay-container-blocks">
                        <div class="section-order-pay-container-block2 section-order-pay-container-block-active2">
                            <p>Доставка</p>
                            <button type="button" class="btn-usual-order">
                                Выбрать
                            </button>
                            <button type="button" class="btn-active-order">
                                <img src="<?php bloginfo('template_url')?>/assets/img/tick.svg" alt="">
                                Выбрано
                            </button>
                        </div>
                        <div class="section-order-pay-container-block2">
                            <p>Самовывоз</p>
                            <button type="button" class="btn-usual-order">
                                Выбрать
                            </button>
                            <button type="button" class="btn-active-order">
                                <img src="<?php bloginfo('template_url')?>/assets/img/tick.svg" alt="">
                                Выбрано
                            </button>
                        </div>
                    </div>
                </div>
                <div class="section-order-pay-container">
                    <div class="section-order-pay-title">
                        Способы оплаты
                    </div>
                    <div class="section-order-pay-container-blocks">
                        <div class="section-order-pay-container-block3 section-order-pay-container-block-active3">
                            <p>Наличные</p>
                            <button type="button" class="btn-usual-order">
                                Выбрать
                            </button>
                            <button type="button" class="btn-active-order">
                                <img src="<?php bloginfo('template_url')?>/assets/img/tick.svg" alt="">
                                Выбрано
                            </button>
                        </div>
                        <div class="section-order-pay-container-block3">
                            <p>Картой</p>
                            <button type="button" class="btn-usual-order">
                                Выбрать
                            </button>
                            <button type="button" class="btn-active-order">
                                <img src="<?php bloginfo('template_url')?>/assets/img/tick.svg" alt="">
                                Выбрано
                            </button>
                        </div>
                    </div>
                </div>
                <div style="display: none">
                    <input type="hidden" name="order_total" value="<?php echo WC()->cart->get_cart_total(); ?>">
                </div>
            </form>
        </div>
</section>

<?php get_footer() ?>
