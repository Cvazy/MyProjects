<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset');?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"/>
    <title>Дело в прицепе</title>
    <?php wp_head(); ?>
    <link rel="icon" href="<?php bloginfo('template_url')?>/assets/img/icon.png" type="image/x-icon">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"/>
    <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=12813675-b836-483b-9db7-5c71d2075e70" type="text/javascript"></script>
</head>
<body>
<header>
    <div class="content-red-header">
        <div class="container">
            <div class="red-header">
                <ul class="left-list-red">
                    <li>
                        <a href="/catalog/">
                            Каталог
                        </a>
                    </li>
                    <li>
                        <div class="dote-list-red"></div>
                    </li>
                    <li>
                        <a href="/about/">
                            О компании
                        </a>
                    </li>
                    <li>
                        <div class="dote-list-red"></div>
                    </li>
                    <li>
                        <a href="/catalog/">
                            Акции
                        </a>
                    </li>
                    <li>
                        <div class="dote-list-red"></div>
                    </li>
                    <li>
                        <a href="/services/">
                            Услуги
                        </a>
                    </li>
                    <li>
                        <div class="dote-list-red"></div>
                    </li>
                    <li>
                        <a href="/blog/">
                            Блог
                        </a>
                    </li>
                    <li>
                        <div class="dote-list-red"></div>
                    </li>
                    <li>
                        <a href="#!">
                            Отзывы
                        </a>
                    </li>
                    <li>
                        <div class="dote-list-red"></div>
                    </li>
                    <li>
                        <a href="/contacts/">
                            Контакты
                        </a>
                    </li>

                </ul>
                <div class="tight-info-city">
                    <p class="text-info-town">Ваш город:</p>
                    <a href="#!" class="city-link">
                        <img src="<?php bloginfo('template_url')?>/assets/img/location.svg" alt="">
                        Москва
                    </a>
                </div>
                <div class="social-icons-mob-header">
                    <img src="<?php bloginfo('template_url')?>/assets/img/header-icon-mob1.svg" alt="">
                    <img src="<?php bloginfo('template_url')?>/assets/img/header-icon-mob2.svg" alt="">
                    <img src="<?php bloginfo('template_url')?>/assets/img/header-icon-mob3.svg" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="content-second-header">
        <div class="container">
            <div class="second-header">
                <a href="/" class="logo-header">
                    <img src="<?php bloginfo('template_url')?>/assets/img/logo-header.svg" alt="">
                </a>
                <form action="#!" method="post" class="search-form">
                    <input type="text" name="search-text" placeholder="Поиск по сайту">
                    <button type="submit">
                        <img src="<?php bloginfo('template_url')?>/assets/img/search-btn.svg" alt="">
                    </button>
                </form>
                <div class="info-contact-header">
                    <div class="social-content-header">
                        <a href="#!" class="social-block-header">
                            <img src="<?php bloginfo('template_url')?>/assets/img/wh-header.svg" alt="">
                        </a>
                        <a href="#!" class="social-block-header">
                            <img src="<?php bloginfo('template_url')?>/assets/img/tg-header.svg" alt="">
                        </a>
                    </div>
                    <a href="tel:<?php echo carbon_get_theme_option('site_phone_head')?>" class="tel-header"><?php echo carbon_get_theme_option('site_phone_head')?></a>
                </div>
                <div class="basket-info">
                    <a href="/basket/" class="btn-basket-header">
                        <img src="<?php bloginfo('template_url')?>/assets/img/basket-header.png" alt="">
                        <span class="dote-red-basket"></span>
                        <span class="dote-red-basket dote-red-basket-mob">5</span>
                    </a>
                    <div class="hamburger-menu">
                        <input id="menu__toggle" type="checkbox" />
                        <label class="menu__btn" for="menu__toggle">
                            <span></span>
                        </label>
                        <div class="bg"></div>
                        <ul class="menu__box">
                            <li class="links-burger">
                                <ul>
                                    <li>
                                        <a href="/">Главная</a>
                                    </li>
                                    <li>
                                        <a href="/about/">Почему мы?</a>
                                    </li>
                                    <li>
                                        <a href="/about/">О нас</a>
                                    </li>
                                    <li>
                                        <a href="/catalog/">Каталог</a>
                                    </li>
                                    <li>
                                        <a style="margin-top: 30px;" href="tel:" class="tle-header">Позвонить</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="info-about-basket-header">
                        <p class="title-basket-header">Корзина</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="content-third-header">
        <div class="container">
            <div class="third-header">
                <ul class="list-third-header">
                    <?php
                    $args = array(
                        'taxonomy'     => 'product_cat',
                        'orderby'      => 'name',
                        'show_count'   => 0,
                        'pad_counts'   => 0,
                        'hierarchical' => 1,
                        'hide_empty'   => 0
                    );

                    $categories = get_categories($args);

                    foreach ($categories as $category) {
                        $subcategory_args = array(
                            'taxonomy'     => 'product_cat',
                            'child_of'     => $category->term_id,
                            'orderby'      => 'name',
                            'show_count'   => 0,
                            'pad_counts'   => 0,
                            'hierarchical' => 1,
                            'hide_empty'   => 0
                        );

                        $subcategories = get_categories($subcategory_args);

                        if (!empty($subcategories)) {
                            echo '<li>';
                            echo '<div class="dropdown">';
                            echo '<button class="dropbtn">';
                            echo $category->name;
                            echo '<img src="http://delo-v.lo/wp-content/themes/delo-v/assets/img/arrow-header-link.png" alt="">';
                            echo '</button>';
                            echo '<div class="dropdown-content">';
                            echo '<ul>';

                            foreach ($subcategories as $subcategory) {
                                echo '<li class="list-drop-a">';
                                echo '<a href="/catalog/' . $subcategory->term_id . '/">';
                                echo '<span class="dote-list-drop-a"></span>';
                                echo $subcategory->name;
                                echo '</a>';
                                echo '</li>';
                            }

                            echo '</ul>';
                            echo '</div>';
                            echo '</div>';
                            echo '</li>';
                        }
                    }
                    ?>
                </ul>
            </div>
        </div>
    </div>
</header>

