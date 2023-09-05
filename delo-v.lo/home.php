<?php

get_header();
global $wpdb;

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

$sales = $wpdb->get_results("SELECT object_id FROM `wp_term_relationships` where term_taxonomy_id = 24");
$sales_id = array();
foreach ($sales as $id){
    array_push($sales_id, $id->object_id);
}

$catalog = $wpdb->get_results("SELECT object_id FROM `wp_term_relationships` where term_taxonomy_id = 25");
$catalog_id = array();
foreach ($catalog as $id){
    array_push($catalog_id, $id->object_id);
}

$reviews = $wpdb->get_results("SELECT object_id FROM `wp_term_relationships` where term_taxonomy_id = 26");
$reviews_id = array();
foreach ($reviews as $id){
    array_push($reviews_id, $id->object_id);
}

$questions = $wpdb->get_results("SELECT object_id FROM `wp_term_relationships` where term_taxonomy_id = 27");
$questions_id = array();
foreach ($questions as $id){
    array_push($questions_id, $id->object_id);
}

$blog = $wpdb->get_results("SELECT object_id FROM `wp_term_relationships` where term_taxonomy_id = 28");
$blog_id = array();
foreach ($blog as $id){
    array_push($blog_id, $id->object_id);
}

$news = $wpdb->get_results("SELECT object_id FROM `wp_term_relationships` where term_taxonomy_id = 29");
$news_id = array();
foreach ($news as $id){
    array_push($news_id, $id->object_id);
}

$banner_title = $wpdb->get_results("SELECT meta_value FROM `wp_postmeta` WHERE meta_key = 'Заголовок'");
$banner_content = $wpdb->get_results("SELECT meta_value FROM `wp_postmeta` WHERE meta_key = 'Подзаголовок'");
$first_three = array_slice($banner_title, 0, 3);
$first_three_content = array_slice($banner_content, 0, 3);


?>

<?php

/* Template Name: home */

?>

<section class="banners-main">
    <div class="container">
        <div class="banners-content-scroll">
            <div class="banners-content">
                <div class="big-banner">
                    <div class="text-and-btn-big-banner">
                        <h1><?php echo $first_three[0]->meta_value ?></h1>
                        <p>
                            <?php echo $first_three_content[0]->meta_value ?>
                        </p>
                        <a href="/catalog/">
                            ПОДРОБНЕЕ
                        </a>
                    </div>
                    <img src="<?php bloginfo('template_url')?>/assets/img/banner-1.png" alt="" class="banner banner-1">
                </div>
                <div class="little-banners">
                    <div class="little-banner">
                        <div class="text-little-banner">
                            <h2>
                                <?php echo $first_three[1]->meta_value ?>
                            </h2>
                            <p>
                                <?php echo $first_three_content[0]->meta_value ?>
                            </p>
                            <a href="/catalog/">
                                Подробнее
                            </a>
                        </div>
                        <img src="<?php bloginfo('template_url')?>/assets/img/banner-2.png" alt="" class="banner banner-2">
                    </div>
                    <div class="little-banner">
                        <div class="text-little-banner">
                            <h2>
                                <?php echo $first_three[2]->meta_value ?>
                            </h2>
                            <p>
                                <?php echo $first_three_content[0]->meta_value ?>
                            </p>
                            <a href="/catalog/">
                                Подробнее
                            </a>
                        </div>
                        <img src="<?php bloginfo('template_url')?>/assets/img/banner-3.png" alt="" class="banner banner-3">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="stroke-index">
    <div class="marquee">
        <div class="item-marquee">
            <div class="dote-marquee"></div>
            <p>
                <?php echo carbon_get_theme_option('site_slog_first')?>
            </p>
        </div>
        <div class="item-marquee">
            <div class="dote-marquee"></div>
            <p>
                <?php echo carbon_get_theme_option('site_slog_second')?>
            </p>
        </div>
        <div class="item-marquee">
            <div class="dote-marquee"></div>
            <p>
                <?php echo carbon_get_theme_option('site_slog_third')?>
            </p>
        </div>
        <div class="item-marquee">
            <div class="dote-marquee"></div>
            <p>
                <?php echo carbon_get_theme_option('site_slog_fourth')?>
            </p>
        </div>
        <div class="item-marquee">
            <div class="dote-marquee"></div>
            <p>
                <?php echo carbon_get_theme_option('site_slog_fifth')?>
            </p>
        </div>
    </div>
</section>

<section class="pluses">
    <div class="container">
        <div class="content-pluses">
            <div class="block-plus">
                <img src="<?php bloginfo('template_url')?>/assets/img/plus-1.svg" alt="">
                <p>
                    Постоянное наличие на складе
                </p>
                <span>*</span>
            </div>
            <div class="block-plus">
                <img src="<?php bloginfo('template_url')?>/assets/img/plus-2.svg" alt="">
                <p>
                    Специальные условия корпоративным клиентам
                </p>
                <span>*</span>
            </div>
            <div class="block-plus">
                <img src="<?php bloginfo('template_url')?>/assets/img/plus-3.svg" alt="">
                <p>
                    Режем в нужный <br> размер
                </p>
                <span>*</span>
            </div>
            <div class="block-plus">
                <img src="<?php bloginfo('template_url')?>/assets/img/plus-4.svg" alt="">
                <p>
                    Работаем на долгосрочные отношения
                </p>
                <span>*</span>
            </div>
        </div>
    </div>
</section>

<section class="catalog-index">
    <div class="container">
        <div class="flex-title">
            <h1 class="title-pages-blocks">Разделы каталога</h1>
        </div>
        <div class="swiper-button-next swiper-button-next-catalog"></div>
        <div class="swiper-button-prev swiper-button-prev-catalog"></div>
    </div>
    <div class="swiper mySwiperCatalog">
        <div class="swiper-wrapper swiper-wrapper-catalog">
            <?php
                foreach (get_category_items($catalog_id) as $res) {
                    $product = wc_get_product($res->ID);

                    $image_id = $product->get_image_id();

                    $image_url = wp_get_attachment_image_url($image_id, 'full');
                ?>
                <div class="swiper-slide swiper-slide-catalog">
                    <div class="cart-catalog-index">
                        <div class="title-catalog-cart">
                            <div class="red-line-catalog__cart"></div>
                            <h2><?php echo $res->post_title?></h2>
                            <img src="<?php echo $image_url ?>" alt="">
                        </div>
                        <div class="catalog-links-cart-flex">
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
                                            <a href="<?php echo $value ?>"><?php echo $name ?></a>
                                            <?php
                                        }
                                    }
                                }
                            }
                            ?>
                        </div>
                    </div>
                </div>
                    <?php
                }
            ?>
        </div>
    </div>
</section>

<section class="sales">
    <div class="container">
        <div class="flex-title">
            <h1 class="title-pages-blocks">Акционные товары</h1>
            <a href="/sale/" target="_blank" class="more-blogs">
                Посмотреть все акционные товары
            </a>
        </div>
        <div class="sale-products">
            <?php
            foreach (get_category_items($sales_id) as $res) {
                $product = wc_get_product($res->ID);

                $image_id = $product->get_image_id();

                $image_url = wp_get_attachment_image_url($image_id, 'full');
                ?>
                <div class="sale-cart-product js-product" data-product-name="<?php echo $res->post_title ?>" data-product-price="<?php echo getPrice('min', $res->ID) ?>" data-product-src="<?php echo $image_url ?>">
                    <div class="mySwiperOldProducts-block">
                        <div class="mySwiperOldProducts-block-img">
                            <a href="/cartpage?product_id=<?php echo $res->ID ?>">
                                <img src="<?php echo $image_url ?>" alt="">
                            </a>
                            <div class="sale-red-span">
                                АКЦИЯ
                            </div>
                        </div>
                        <div class="mySwiperOldProducts-block-content">
                            <a href="/cartpage?product_id=<?php echo $res->ID ?>">
                                <h4><?php echo $res->post_title?></h4>
                            </a>
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
                            <div class="span-cross-out-price">
                             <span class="js-product-price-value">
                                от <?php echo getPrice('min', $res->ID) ?> ₽/тонна
                            </span>
                                <p>
                                    от <?php echo getPrice('full', $res->ID) ?> ₽
                                </p>
                            </div>
                            <div class="mySwiperOldProducts-block-content-buttons">
                                <button class="services-example-container-block-content-btn-basket js-btn-add-to-cart" data-product-id="<?php echo $res->ID ?>">
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
                <?php
            }
            ?>
        </div>
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
                        <div class="mySwiperOldProducts-block js-product" data-product-name="<?php echo $res->post_title ?>" data-product-price="<?php echo getPrice('full', $res->ID) ?>" data-product-src="<?php echo $image_url ?>">
                            <div class="mySwiperOldProducts-block-img">
                                <img src="<?php echo $image_url ?>" alt="">
                            </div>
                            <div class="mySwiperOldProducts-block-content">
                                <h4><?php echo $res->post_title ?></h4>
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
                                                    <tr>
                                                        <td><?php echo $name ?>:</td>
                                                        <td class="right-td"><?php echo $value ?></td>
                                                    </tr>
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
                                    <div class="mySwiperOldProducts-block-content-buttons">
                                        <button class="services-example-container-block-content-btn-basket js-btn-add-to-cart" data-product-id="<?php echo $res->ID ?>">
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

<section class="review">
    <div class="container">
        <div class="flex-title">
            <h1 class="title-pages-blocks">Отзывы</h1>
        </div>
        <div class="swiper-button-next swiper-button-next-rev"></div>
        <div class="swiper-button-prev swiper-button-prev-rev"></div>
    </div>
    <div class="container">
        <div class="swiper mySwiper mySwiperReview">
            <div class="swiper-wrapper swiper-wrapper-review">
                <?php
                foreach (get_category_items($reviews_id) as $res) {
                    $product = wc_get_product($res->ID);

                    $image_id = $product->get_image_id();

                    $image_url = wp_get_attachment_image_url($image_id, 'full');
                    ?>
                        <div class="swiper-slide">
                            <img src="<?php echo $image_url ?>" alt="">
                        </div>
                    <?php
                }
                ?>
            </div>
        </div>
    </div>
</section>

<section class="services-example">
    <div class="container">
        <div class="flex-title">
            <h1 class="title-pages-blocks">Наши услуги</h1>
            <a href="/services/" target="_blank" class="more-blogs">
                Посмотреть все Уcлуги
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

<section class="faq">
    <div class="container">
        <div class="flex-content-faq">
            <div class="flex-title-faq">
                <p class="text-title-faq">
                    FAQ
                </p>
                <h1 class="title-pages-blocks">Часто задаваемые <br> вопросы</h1>
            </div>
            <div class="right-faq">
                <?php
                foreach (get_category_items($questions_id) as $res) {
                    $product = wc_get_product($res->ID);
                    ?>
                        <div class="accordion-block">
                            <button class="accordion"><?php echo $res->post_title ?></button>
                            <div class="panel">
                                <p><?php echo $res->post_content ?></p>
                            </div>
                        </div>
                    <?php
                }
                ?>
            </div>
        </div>
    </div>
</section>

<section class="contact-form-section">
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
                <a href="tel:+7 (383) 202-85-10">
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

<section class="blog">
    <div class="container">
        <div class="flex-title">
            <h1 class="title-pages-blocks">Популярные статьи из блога</h1>
            <a href="/blog/" target="_blank" class="more-blogs">
                ПОСМОТРЕТЬ ВСЕ СТАТЬИ
            </a>
        </div>
        <div class="content-blog-carts-parent">
            <div class="content-blog-carts">
                <?php
                    foreach (get_category_items($blog_id) as $res) {
                        $product = wc_get_product($res->ID);

                        $image_id = $product->get_image_id();

                        $image_url = wp_get_attachment_image_url($image_id, 'full');
                    ?>
                    <div class="blog-cart">
                        <img src="<?php echo $image_url ?>" alt="" class="photo-cart-blog">
                        <div class="text-content-blog-cart">
                            <div class="date-news-blocks">
                                <img src="<?php bloginfo('template_url')?>/assets/img/date.svg" alt="">
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
                                                <p><?php echo $value ?></p>
                                                <?php
                                            }
                                        }
                                    }
                                }
                                ?>
                            </div>
                            <p class="title-blog-blocks">
                                <?php echo $res->post_title ?>
                            </p>
                            <p class="text-blog-blocks">
                                <?php echo  $res->post_excerpt ?>
                            </p>
                            <a href="/blog/<?php echo $res->ID ?>" target="_blank" class="read-more-blog">Читать полностью</a>
                        </div>
                    </div>
                        <?php
                    }
                    ?>
            </div>
        </div>
    </div>
</section>

<section class="news">
    <div class="container">
        <h1 class="title-pages-blocks">Главные новости компании</h1>
        <div class="flex-news-blocks-parent">
            <div class="flex-news-blocks">
                <?php
                    foreach (get_category_items($news_id) as $res) {
                        $product = wc_get_product($res->ID);
                    ?>
                    <div class="block-flex-news-blocks">
                        <div class="date-news-blocks">
                            <img src="<?php bloginfo('template_url')?>/assets/img/date.svg" alt="">
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
                                            <p><?php echo $value ?></p>
                                            <?php
                                        }
                                    }
                                }
                            }
                            ?>
                        </div>
                        <p class="title-news-blocks">
                            <?php echo $res->post_title ?>
                        </p>
                        <p class="text-news-blocks">
                            <?php echo $res->post_content ?>
                        </p>
                    </div>
                        <?php
                    }
                    ?>
            </div>
        </div>

    </div>
</section>

<?php get_footer(); ?>