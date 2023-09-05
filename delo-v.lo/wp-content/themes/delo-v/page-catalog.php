<?php

global $wpdb;

get_header();

$catalog = $wpdb->get_results("SELECT object_id FROM `wp_term_relationships` where term_taxonomy_id = 25");
$catalog_id = array();
foreach ($catalog as $id){
    array_push($catalog_id, $id->object_id);
}

$popular = $wpdb->get_results("SELECT object_id FROM `wp_term_relationships` where term_taxonomy_id = 22");
$popular_id = array();
foreach ($popular as $id){
    array_push($popular_id, $id->object_id);
}

$services = $wpdb->get_results("SELECT object_id FROM `wp_term_relationships` where term_taxonomy_id = 23");
$services_id = array();
foreach ($services as $id){
    array_push($services_id, $id->object_id);
}

?>

<?php

/* Template Name: catalog */

?>

<div class="container">
    <div class="bread-cams">
        <p>
            Главная
        </p>
        <span></span>
        <strong>Каталог</strong>
    </div>
</div>

<section class="catalog-products">
    <div class="container">
        <div class="bit-title-page">
            Каталог товаров
        </div>
        <div class="catalog-products-container">
            <?php
            foreach (get_category_items($catalog_id) as $res) {
            $product = wc_get_product($res->ID);

            $image_id = $product->get_image_id();

            $image_url = wp_get_attachment_image_url($image_id, 'full');

            $product = wc_get_product($res->ID);

            $categories = get_the_terms($res->ID, 'product_cat');
            ?>
            <div class="cart-catalog-index">
                <div class="title-catalog-cart">
                    <div class="red-line-catalog__cart"></div>
                    <h2><?php echo $res->post_title?></h2>
                    <img src="<?php echo $image_url ?>" alt="">
                </div>
                <div class="catalog-links-cart-flex">
                    <?php
                    if ($categories && !is_wp_error($categories)) {
                        foreach ($categories as $category) {
                            // Выводим имя и идентификатор категории
                            if($category->term_id != 25){
                                echo '<a href="/subcatalog?cat_id=' . $category->term_id . '">' . $category->name . '</a>';
                            }
                        }
                    }
                    ?>
                </div>
            </div>
                <?php
            }
            ?>
        </div>
    </div>
</section>
<section class="contact-form-section contact-form-section__contacts-page">
    <div class="container">
        <div class="red-contact-form-wrapper">
            <div class="left-text-red-contact-form-wrapper">
                <h2>
                    Остались вопросы? <br>
                    Задайте их нам!
                </h2>
                <p>
                    Вы можете связаться с нашим менеджером <br>
                    по телефону или написать в мессенджеры.
                </p>
            </div>
            <div class="center-tel-and-text">
                <a href="tel:<?php echo carbon_get_theme_option('site_phone_head')?>">
                    <img src="<?php bloginfo('template_url')?>/assets/img/tel.svg" alt="">
                    <?php echo carbon_get_theme_option('site_phone_head')?>
                </a>
                <p>
                    либо воспользоваться формой ниже и <br>
                    отправить нам вопрос на электронную почту.
                </p>
            </div>
            <div class="right-red-contact-form-wrapper">
                <a href="/contacts/" class="social-form-link">
                    <div class="circle-red-form">
                        <img src="<?php bloginfo('template_url')?>/assets/img/wh-contact.svg" alt="">
                    </div>
                    <div class="text-social-form-link">
                        <p>
                            Написать в
                        </p>
                        <span>
                            WhatsApp
                        </span>
                    </div>
                </a>
                <a href="/contacts/" class="social-form-link">
                    <div class="circle-red-form">
                        <img src="<?php bloginfo('template_url')?>/assets/img/tg-contact.svg" alt="">
                    </div>
                    <div class="text-social-form-link">
                        <p>
                            Написать в
                        </p>
                        <span>
                            Telegram
                        </span>
                    </div>
                </a>
            </div>
            <img src="<?php bloginfo('template_url')?>/assets/img/circle-form-absolute.svg" alt="" class="circle-form-absolute">
        </div>
    </div>
    <div class="container">
        <form action="#!" method="post" class="form-contact">
            <div class="forms-wrapper-flex-big">
                <div class="forms-wrapper-flex">
                    <div class="left-form-contact">
                        <div class="group">
                            <input type="text" class="control" name="user_name" placeholder=" " required>
                            <label>Введите имя</label>
                        </div>
                        <div class="group">
                            <input type="text" class="control control-phone" name="user_phone" placeholder=" " required>
                            <label>Введите телефон</label>
                        </div>
                    </div>
                    <div class="group">
                        <textarea class="control" name="user_text" placeholder=" " required></textarea>
                        <label>Какой у вас вопрос?</label>
                    </div>
                </div>
                <div class="form-submit-contact">
                    <div class="checkbox">
                        <label class="custom-checkbox">
                            <input type="checkbox" name="cb_all" value="indigo" data-check id="parent2" class="parent" required>
                            <span>
                        </span>
                            <div class="span-a">
                                Я даю свое согласие на
                                обработку персональных данных,
                                соглашаюсь с политикой обработки оператора.
                            </div>
                        </label>
                    </div>
                    <button type="submit">ОТПРАВИТЬ ВОПРОС</button>
                </div>
            </div>
        </form>
    </div>
</section>
<section class="section-slider-old-products">
    <div class="container">
        <div class="flex-title">
            <h1 class="title-pages-blocks">Популярные товары</h1>
        </div>
        <div class="swiper-button-next swiper-button-next-old"></div>
        <div class="swiper-button-prev swiper-button-prev-old"></div>
    </div>
    <div class="swiper mySwiper mySwiperOldProducts">
        <div class="swiper-wrapper swiper-wrapperOldProducts">
            <?php
            foreach (get_category_items($popular_id) as $res) {
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
                <div class="services-example-container-block js-product" data-product-name="<?php echo $res->post_title ?>" data-product-price="<?php echo getPrice('full', $res->ID) ?>" data-product-src="<?php echo $image_url ?>">
                    <div class="services-example-container-block-img-part">
                        <img src="<?php echo $image_url ?>" alt="">
                    </div>
                    <div class="services-example-container-block-content">
                        <h3><?php echo $res->post_title ?></h3>
                        <p><?php echo $res->post_excerpt ?></p>
                        <?php if(getPrice('min', $res->ID) != 0) { ?>
                            <div class="span-cross-out-price">
                                     <span class="js-product-price-value">
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
                            <span class="js-product-price-value">
                                    от <?php echo getPrice('full', $res->ID) ?> ₽/тонна
                                </span>
                            <?php
                        }
                        ?>
                        <div class="services-example-container-block-content-buttons">
                            <button class="services-example-container-block-content-btn-basket js-btn-add-to-cart" data-product-id="<?php echo $res->ID ?>">
                                <img src="<?php bloginfo('template_url')?>/assets/img/basket-btn-cart.svg" alt="" class="basket-btn">
                                В КОРЗИНУ
                            </button>
                            <a href="/servicepage?service_id=<?php echo $res->ID ?>" class="services-example-container-block-content-btn-more">
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

<?php get_footer() ?>
