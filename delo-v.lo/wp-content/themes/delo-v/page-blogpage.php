<?php get_header() ?>

<?php

/* Template Name: blogpage */

?>

<div class="container">
    <div class="bread-cams">
        <p>
            Главная
        </p>
        <span></span>
        <strong>Блог</strong>
    </div>
</div>

<?php
// Получаем ID статьи из параметра URL
$article_id = isset($_GET['article_id']) ? $_GET['article_id'] : 0;

// Проверяем, что ID статьи является числом и больше 0
if (is_numeric($article_id) && $article_id > 0) {
// Получаем объект статьи по ID
    $article = get_post($article_id);

    $title = $article->post_title;
    $small_content = $article->post_excerpt;
    $main_content = $article->post_content;
    $featured_image = get_the_post_thumbnail_url($article_id, 'full');
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
                <img src="<?php echo $featured_image ?>" alt="">
                <p>
                    <?php echo $main_content ?>
                </p>
            </div>
            <div class="services-page-section-container-right">
                <form action="#!" method="post" class="form-contact form-contact2">
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
                                <a href="#!" class="circle-red-form circle-red-form2">
                                    <img src="<?php bloginfo('template_url')?>/assets/img/wh-contact.svg" alt="">
                                </a>
                                <a href="#!" class="circle-red-form circle-red-form2">
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

<?php
    }
?>

<?php get_footer() ?>
