<?php
global $wpdb;

get_header();

$services = $wpdb->get_results("SELECT object_id FROM `wp_term_relationships` where term_taxonomy_id = 23");
$services_id = array();
foreach ($services as $id){
    array_push($services_id, $id->object_id);
}

?>

<?php

/* Template Name: cartpage */

?>

<?php
global $wpdb;

// Получаем ID продукта из параметра URL
$product_id = isset($_GET['product_id']) ? $_GET['product_id'] : 0;
$user_id = get_current_user_id();
saveProductView($user_id, $product_id);

$look_product = $wpdb->get_results("SELECT product_id FROM look_user_product WHERE user_id = '$user_id'");
$look_product_id = array();
foreach ($look_product as $id){
    array_push($look_product_id, $id->product_id);
}

// Проверяем, что ID продукта является числом и больше 0
if (is_numeric($product_id) && $product_id > 0) {
// Получаем объект продукта по ID
$product = get_post($product_id);

$dostavka = $wpdb->get_results("SELECT comment_content FROM wp_comments WHERE comment_post_ID = '$product_id'");

$title = $product->post_title;
$small_content = $product->post_excerpt;
$main_content = $product->post_content;
$featured_image = get_the_post_thumbnail_url($product_id, 'full');
$product_gallery = get_post_meta($product_id, '_product_image_gallery', true);

?>
<section class="catalog-cart-section">
    <div class="container">
        <div class="bit-title-page">
            <?php echo $title ?>
        </div>
        <div class="catalog-cart-section-content">
            <div class="catalog-cart-section-container">
                <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2">
                    <div class="swiper-wrapper">
                        <?php
                        if ($product_gallery) {
                            $gallery_images = explode(',', $product_gallery);
                            foreach ($gallery_images as $image_id) {
                                $image_url = wp_get_attachment_image_url($image_id, 'full');
                                ?>
                                <div class="swiper-slide">
                                    <div class="slide-catalog-cart">
                                        <img src="<?php echo $image_url; ?>" alt="">
                                    </div>
                                </div>
                                <?php
                            }
                        }
                        ?>
                    </div>
                </div>
                <div class="cart-slider-navigation">
                    <div thumbsSlider="" class="swiper mySwiper mySwiperCart">
                        <div class="swiper-wrapper">
                            <?php
                            if ($product_gallery) {
                                $gallery_images = explode(',', $product_gallery);
                                foreach ($gallery_images as $image_id) {
                                    $image_url = wp_get_attachment_image_url($image_id, 'thumbnail');
                                    ?>
                                    <div class="swiper-slide">
                                        <div class="slide-catalog-cart-small">
                                            <img src="<?php echo $image_url; ?>" alt="">
                                        </div>
                                    </div>
                                    <?php
                                }
                            }
                            ?>
                        </div>
                    </div>
                    <div class="swiper-button-next swiper-button-next-cart"></div>
                    <div class="swiper-button-prev swiper-button-prev-cart"></div>
                </div>
            </div>
            <div class="catalog-cart-section-content-text">
                <p>
                    <?php echo $small_content ?>
                </p>
                <h5>Характеристики:</h5>
                <div class="catalog-cart-section-content-text-gray">
                    <?php
                    $data = search_data($product_id);

                    $attributes = unserialize($data);

                    if (!empty($attributes)) {
                        foreach ($attributes as $attribute) {
                            $names = $attribute['name']; //атрибуты
                            $lines_names = explode("\n", $names);
                            $values = $attribute['value']; //значения атрибутов
                            $lines_values = explode("\n", $values);

                            foreach ($lines_names as $name) {
                                // Удаление пробелов в начале и конце строки
                                $name = trim($name);

                                // Удаление "string(xx) "
                                $name = preg_replace('/^string\(\d+\)\s/', '', $name);

                                foreach ($lines_values as $value) {
                                    $value = trim($value);

                                    $value = preg_replace('/^string\(\d+\)\s/', '', $value)
                                    ?>
                                    <h6><?php echo $name ?>: <span><?php echo $value ?></span></h6>
                                    <?php
                                }
                            }
                        }
                    }
                    ?>
                </div>
                <h5>Возникли вопросы? Задайте их нам!</h5>
                <p>Вы можете связаться с нашим менеджером по телефону или написать в мессенджеры.</p>
                <div class="catalog-cart-section-content-social">
                    <a href="/contacts/" class="block-map-social">
                        <div class="circle-social-map">
                            <img src="<?php bloginfo('template_url')?>/assets/img/wh-contact.svg" alt="">
                        </div>
                    </a>
                    <a href="/contacts/" class="block-map-social">
                        <div class="circle-social-map">
                            <img src="<?php bloginfo('template_url')?>/assets/img/wh-contact.svg" alt="">
                        </div>
                    </a>
                    <a href="/contacts/" class="catalog-cart-section-content-social-tel"><?php echo carbon_get_theme_option('site_phone_head')?></a>
                </div>
            </div>
            <div class="catalog-cart-section-content-block-pay">
                <?php if(getPrice('min', $product_id) != 0) { ?>
                    <p>от <?php echo getPrice('min', $product_id) ?> ₽/тонна</p>
                    <strike>от <?php echo getPrice('full', $product_id) ?> ₽/тонна</strike>
                <?php } ?>
                <?php if(getPrice('min', $product_id) == 0) { ?>
                    <p>от <?php echo getPrice('full', $product_id) ?> ₽/тонна</p>
                <?php } ?>

                <div class="quantity_inner">
                    <button class="bt_minus">
                        <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                    <input type="text" value="1" size="2" class="quantity" data-max-count="20">
                    <button class="bt_plus">
                        <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                </div>

                <h5>Запросить индивидуальные условия</h5>

                <div class="cart-itog">
                    <h4>Итого:</h4>
                    <?php if(getPrice('min', $product_id) != 0) { ?>
                        <h3 class="product-price" id="total-price" data-initial-price="<?php echo getPrice('min', $product_id) ?>"> ~ <?php echo getPrice('min', $product_id) ?> ₽</h3>
                    <?php } ?>
                    <?php if(getPrice('min', $product_id) == 0) { ?>
                        <h3 class="product-price" id="total-price" data-initial-price="<?php echo getPrice('full', $product_id) ?>"> ~ <?php echo getPrice('full', $product_id) ?> ₽</h3>
                    <?php } ?>
                </div>

                <button class="btn-cart-add-basket js-btn-add-to-cart" data-product-id="<?php echo $product_id ?>">
                    <img src="<?php bloginfo('template_url')?>/assets/img/basket-btn.svg" alt="" class="basket-btn">
                    В КОРЗИНУ
                </button>
                <button type="button" class="btn-order-one-click">ЗАКАЗАТЬ В 1 КЛИК</button>
            </div>
        </div>
    </div>
</section>

<section class="cart-description-tabs-section">
    <div class="container">
        <div class="cart-description-tabs">
            <div class="cart-description-tab cart-description-tab-active" data-tab="#tab1">
                <img src="<?php bloginfo('template_url')?>/assets/img/tab-img1.svg" alt="">
                <p>Условия доставки</p>
            </div>
            <div class="cart-description-tab" data-tab="#tab2">
                <img src="<?php bloginfo('template_url')?>/assets/img/tab-img2.svg" alt="">
                <p>Условия оплаты</p>
            </div>
            <div class="cart-description-tab" data-tab="#tab3">
                <img src="<?php bloginfo('template_url')?>/assets/img/tab-img3.svg" alt="">
                <p>Описание товара</p>
            </div>
        </div>
        <div class="cart-description-tabs-content">
            <div id="tab1" class="cart-description-tab-content cart-description-tab-content-active">
                <h2>Условия по доставке <?php echo $title ?></h2>
                <p>
                    <?php echo $dostavka[0]->comment_content ?>
                </p>
            </div>
            <div id="tab2" class="cart-description-tab-content">
                <h2>Условия по доставке товаров.</h2>
                <p>
                    <?php echo carbon_get_theme_option('site_product_pay')?>
                </p>
            </div>
            <div id="tab3" class="cart-description-tab-content">
                <h2>Полное описание товара <?php echo $title ?></h2>
                <p>
                    <?php echo $main_content ?>
                </p>
            </div>
        </div>
    </div>
</section>
<section class="services-example">
    <div class="container">
        <div class="flex-title">
            <h1 class="title-pages-blocks">Наши услуги</h1>
            <a href="/services/" target="_blank" class="more-blogs">
                Посмотреть все УСлуги
            </a>
        </div>
        <div class="services-example-container">
            <?php
            foreach (get_category_items($services_id) as $res) {
                $product = wc_get_product($res->ID);

                $image_id = $product->get_image_id();

                $image_url = wp_get_attachment_image_url($image_id, 'full');
                ?>
                <div class="services-example-container-block">
                    <div class="services-example-container-block-img-part">
                        <img src="<?php echo $image_url ?>" alt="">
                    </div>
                    <div class="services-example-container-block-content">
                        <h3><?php echo $res->post_title ?></h3>
                        <p><?php echo $res->post_excerpt ?></p>
                        <?php if(getPrice('min', $res->ID) != 0) { ?>
                            <div class="span-cross-out-price">
                                             <span>
                                                от <?php echo getPrice('min', $res->ID) ?> ₽/тонна
                                            </span>
                                <p>
                                    от <?php echo getPrice('full', $res->ID) ?> ₽
                                </p>
                            </div>
                            <?php
                        }
                        ?>
                        <?php if(getPrice('min', $res->ID) == 0) { ?>
                            <span>
                                            от <?php echo getPrice('full', $res->ID) ?> ₽/тонна
                                        </span>
                            <?php
                        }
                        ?>
                        <div class="services-example-container-block-content-buttons">
                            <button class="services-example-container-block-content-btn-basket">
                                <img src="<?php bloginfo('template_url')?>/assets/img/basket-btn-cart.svg" alt="" class="basket-btn">
                                В КОРЗИНУ
                            </button>
                            <a href="/cartpage?product_id=<?php echo $res->ID ?>" class="services-example-container-block-content-btn-more">
                                ПОДРОБНЕЕ
                            </a>
                        </div>
                    </div>
                </div>
                <?php
            }
            ?>
        </div>
    </div>
</section>
<section class="section-slider-old-products">
    <div class="container">
        <div class="section-slider-old-products-title">
            Вы смотрели эти товары
        </div>
        <div class="swiper-button-next swiper-button-next-old"></div>
        <div class="swiper-button-prev swiper-button-prev-old"></div>
    </div>
    <div class="swiper mySwiper mySwiperOldProducts">
        <div class="swiper-wrapper swiper-wrapperOldProducts">
            <?php
            foreach (get_category_items($look_product_id) as $res) {
                $product = wc_get_product($res->ID);

                $image_id = $product->get_image_id();

                $image_url = wp_get_attachment_image_url($image_id, 'full');
                ?>
                <div class="swiper-slide">
                    <div class="mySwiperOldProducts-block">
                        <div class="mySwiperOldProducts-block-img">
                            <img src="<?php echo $image_url ?>" alt="">
                        </div>
                        <div class="mySwiperOldProducts-block-content">
                            <h4><?php echo $res->post_title?></h4>
                            <table class="mySwiperOldProducts-block-content-table">
                                <?php
                                $data = search_data($res->ID);

                                $attributes = unserialize($data);

                                if (!empty($attributes)) {
                                    foreach ($attributes as $attribute) {
                                        $names = $attribute['name']; //атрибуты
                                        $lines_names = explode("\n", $names);
                                        $values = $attribute['value']; //значения атрибутов
                                        $lines_values = explode("\n", $values);

                                        foreach ($lines_names as $name) {
                                            // Удаление пробелов в начале и конце строки
                                            $name = trim($name);

                                            // Удаление "string(xx) "
                                            $name = preg_replace('/^string\(\d+\)\s/', '', $name);

                                            foreach ($lines_values as $value) {
                                                $value = trim($value);

                                                $value = preg_replace('/^string\(\d+\)\s/', '', $value)
                                                ?>
                                                <tr><td><?php echo $name ?>:</td><td class="right-td"><?php echo $value ?></td></tr>
                                                <?php
                                            }
                                        }
                                    }
                                }
                                ?>

                            </table>
                            <div>
                                <?php if(getPrice('min', $res->ID) != 0) { ?>
                                    <div class="span-cross-out-price">
                                             <span>
                                                от <?php echo getPrice('min', $res->ID) ?> ₽/тонна
                                            </span>
                                        <p>
                                            от <?php echo getPrice('full', $res->ID) ?> ₽
                                        </p>
                                    </div>
                                    <?php
                                }
                                ?>
                                <?php if(getPrice('min', $res->ID) == 0) { ?>
                                    <span>
                                            от <?php echo getPrice('full', $res->ID) ?> ₽/тонна
                                        </span>
                                    <?php
                                }
                                ?>
                                <div class="mySwiperOldProducts-block-content-buttons">
                                    <button class="smySwiperOldProducts-block-content-btn-basket">
                                        <img src="<?php bloginfo('template_url')?>/assets/img/basket-btn-cart.svg" alt="" class="basket-btn">
                                        В КОРЗИНУ
                                    </button>
                                    <div class="quantity_inner">
                                        <button class="bt_minus">
                                            <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                        </button>
                                        <input type="text" value="1" size="2" class="quantity" data-max-count="20" />
                                        <button class="bt_plus">
                                            <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <?php
            }
            ?>
        </div>
    </div>
</section>
    <?php
}
?>

<?php get_footer() ?>
