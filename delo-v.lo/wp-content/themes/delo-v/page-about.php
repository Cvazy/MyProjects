<?php
global $wpdb;
get_header();

$reviews = $wpdb->get_results("SELECT object_id FROM `wp_term_relationships` where term_taxonomy_id = 26");
$reviews_id = array();
foreach ($reviews as $id){
    array_push($reviews_id, $id->object_id);
}
?>

<?php

/* Template Name: about */

?>

<div class="container">
    <div class="bread-cams">
        <p>
            Главная
        </p>
        <span></span>
        <strong>О компании</strong>
    </div>
</div>
<section class="section-about-us-page">
    <div class="container">
        <div class="bit-title-page">
            Компания <span>«Дело в прицепе»</span>
        </div>
        <img src="<?php bloginfo('template_url')?>/assets/img/about-us-main.png" alt="" class="about-us-big-banner">
        <div class="section-about-us-page-content">
            <div class="section-about-us-page-content-left">
                <img src="<?php bloginfo('template_url')?>/assets/img/about-group.png" alt="" class="about-group-img">
            </div>
            <div class="section-about-us-page-content-middle">
                <p>
                    Идейные соображения высшего порядка, а также социально-экономическое развитие однозначно определяет каждого участника как способного принимать собственные решения касаемо экспериментов, поражающих по своей масштабности и грандиозности. Наше дело не так однозначно, как может показаться: базовый вектор развития влечет за собой процесс внедрения и модернизации форм воздействия. Банальные, но неопровержимые выводы, а также явные признаки победы институционализации объединены в целые кластеры себе подобных.
                    <br><br>
                    Принимая во внимание показатели успешности, базовый вектор развития однозначно фиксирует необходимость укрепления моральных ценностей. Предварительные выводы неутешительны: укрепление и развитие внутренней структуры прекрасно подходит для реализации вывода текущих активов. В своём стремлении улучшить пользовательский опыт мы упускаем, что диаграммы связей, вне зависимости от их уровня, должны быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.
                </p>
            </div>
            <div class="section-about-us-page-content-right">
                <div class="section-about-us-page-content-right-block">
                    <div class="rekvezits-line"></div>
                    <h3>Реквезиты</h3>
                    <div class="section-about-us-page-content-right-block-text">
                        <span>ООО <?php echo carbon_get_theme_option('site_ooo')?></span>
                        <p>
                            <span>ОГРН:</span>
                            <?php echo carbon_get_theme_option('site_ogrn')?>
                        </p>
                        <div class="section-about-us-page-content-right-block-text-into">
                            <p>
                                <span>ИНН:</span>
                                <?php echo carbon_get_theme_option('site_inn')?>
                            </p>
                            <p>
                                <span>КПП:</span>
                                <?php echo carbon_get_theme_option('site_kpp')?>
                            </p>
                            <p>
                                <span>ОКПО:</span>
                                <?php echo carbon_get_theme_option('site_okpo')?>
                            </p>
                            <p>
                                <span>ОКАТО:</span>
                                <?php echo carbon_get_theme_option('site_okato')?>
                            </p>
                        </div>
                        <p>
                            <span>Р/С:</span>
                            <?php echo carbon_get_theme_option('site_r-s')?>
                        </p>
                        <p>
                            <span>К/С:</span>
                            <?php echo carbon_get_theme_option('site_k-s')?>
                        </p>
                        <p>
                            <span>БИК:</span>
                            <?php echo carbon_get_theme_option('site_bik')?>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="pluses">
    <div class="container">
        <div class="flex-title">
            <h1 class="title-pages-blocks">Что вы получаете, выбрав нас?</h1>
        </div>
        <div class="content-pluses content-pluses-about-us">
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

<?php get_footer() ?>
