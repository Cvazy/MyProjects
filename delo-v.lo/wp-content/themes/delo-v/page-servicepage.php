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

/* Template Name: servicepage */

?>

<div class="container">
    <div class="bread-cams">
        <p>
            Главная
        </p>
        <span></span>
        <p>Услуги</p>
        <span></span>
        <strong>Услуга 1</strong>
    </div>
</div>

<?php
// Получаем ID статьи из параметра URL
$service_id = isset($_GET['service_id']) ? $_GET['service_id'] : 0;
$service_gallery = get_post_meta($service_id, '_product_image_gallery', true);

// Проверяем, что ID статьи является числом и больше 0
if (is_numeric($service_id) && $service_id > 0) {
// Получаем объект статьи по ID
$service = get_post($service_id);

$title = $service->post_title;
$small_content = $service->post_excerpt;
$main_content = $service->post_content;
$featured_image = get_the_post_thumbnail_url($service_id, 'full');
?>

<section class="services-page-section">
    <div class="container">

        <div class="services-page-section-container">
            <div class="services-page-section-container-left">
                <div class="bit-title-page">
                    <?php echo $title ?>
                </div>
                <div class="bit-subtitle-page">
                    <?php echo $small_content ?>
                </div>
                <?php
                if ($service_gallery) {
                    $gallery_images = explode(',', $service_gallery);
                    foreach ($gallery_images as $image_id) {
                        $image_url = wp_get_attachment_image_url($image_id, 'full');
                        ?>
                        <img src="<?php echo $image_url; ?>" alt="">
                        <?php
                    }
                }
                ?>
                <p>
                    <?php echo $main_content ?>
                </p>
            </div>
            <div class="services-page-section-container-right">
                <form action="/contacts/" method="post" class="form-contact form-contact2">
                    <div class="rekvezits-line"></div>
                    <h3 class="form-contact2-title">
                        Закажите услугу или получите консультацию специалиста
                    </h3>
                    <div class="forms-wrapper-flex-big">
                        <div class="forms-wrapper-flex forms-wrapper-flex2">
                            <div class="left-form-contact left-form-contact2">
                                <div class="group group2">
                                    <input type="text" class="control" name="user_name" placeholder=" " required>
                                    <label>Введите имя</label>
                                </div>
                                <div class="group group2">
                                    <input type="text" class="control control-phone" name="user_phone" placeholder=" " required>
                                    <label>Введите телефон</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-submit-contact form-submit-contact2">
                            <div class="checkbox">
                                <label class="custom-checkbox">
                                    <input type="checkbox" name="cb_all" value="indigo" data-check id="parent2" class="parent" required>
                                    <span>
                        </span>
                                    <div class="span-a span-a2">
                                        Я даю свое согласие на
                                        обработку персональных данных,
                                        соглашаюсь с политикой обработки оператора.
                                    </div>
                                </label>
                            </div>
                            <button type="submit">ОТПРАВИТЬ ВОПРОС</button>
                        </div>
                        <p class="forms-wrapper-flex-big-p">
                            Также вы можете связаться с нашим менеджером по телефону или написать в WhatsApp или Telegram.
                        </p>
                        <div class="services-page-section-container-right-social">
                            <div class="services-page-section-container-right-social-left">
                                <a href="/contacts/" class="circle-red-form circle-red-form2">
                                    <img src="<?php bloginfo('template_url')?>/assets/img/wh-contact.svg" alt="">
                                </a>
                                <a href="/contacts/" class="circle-red-form circle-red-form2">
                                    <img src="<?php bloginfo('template_url')?>/assets/img/tg-contact.svg" alt="">
                                </a>
                            </div>
                            <a href="/contacts/"><?php echo carbon_get_theme_option('site_phone_head')?></a>
                        </div>
                    </div>
                </form>
            </div>
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

    <?php
}
?>


<?php get_footer() ?>
