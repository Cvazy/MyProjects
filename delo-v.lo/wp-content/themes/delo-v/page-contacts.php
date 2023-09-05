<?php get_header() ?>

<?php

/* Template Name: contacts */

?>

<div class="container">
    <div class="bread-cams">
        <p>
            Главная
        </p>
        <span></span>
        <strong>Контакты</strong>
    </div>
</div>

<section class="contacts-section-page">
    <div class="container">
        <div class="bit-title-page">
            Контакты
        </div>
        <div class="contacts-section-page">
            <div class="map-content map-content2">
                <div id="map2" class="map"></div>
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
<section class="contacts-address-section-page">
    <div class="container">
        <div class="contacts-address-section-page-container">
            <div class="contacts-address-section-page-container-block">
                <div class="contacts-address-section-page-container-img-part">
                    <div class="contacts-address-section-page-container-img">
                        <img src="<?php bloginfo('template_url')?>/assets/img/metka.svg" alt="">
                    </div>
                </div>
                <div class="contacts-address-section-page-container-text">
                    <h3>На Калинина</h3>
                    <p>
                        660061, г. Красноярск, ул. Калинина 51Г
                    </p>
                </div>
            </div>
            <div class="contacts-address-section-page-container-block">
                <div class="contacts-address-section-page-container-img-part">
                    <div class="contacts-address-section-page-container-img">
                        <img src="<?php bloginfo('template_url')?>/assets/img/metka.svg" alt="">
                    </div>
                </div>
                <div class="contacts-address-section-page-container-text">
                    <h3>На Северном</h3>
                    <p>
                        660061, г. Красноярск, Северное шоссе, 17д
                    </p>
                </div>
            </div>
            <div class="contacts-address-section-page-container-block">
                <div class="contacts-address-section-page-container-img-part">
                    <div class="contacts-address-section-page-container-img">
                        <img src="<?php bloginfo('template_url')?>/assets/img/metka.svg" alt="">
                    </div>
                </div>
                <div class="contacts-address-section-page-container-text">
                    <h3>На Калинина</h3>
                    <p>
                        660061, г. Красноярск, Сплавучасток, 3
                    </p>
                </div>
            </div>
            <div class="contacts-address-section-page-container-block">
                <div class="contacts-address-section-page-container-img-part">
                    <div class="contacts-address-section-page-container-img">
                        <img src="<?php bloginfo('template_url')?>/assets/img/metka.svg" alt="">
                    </div>
                </div>
                <div class="contacts-address-section-page-container-text">
                    <h3>На Рабочем</h3>
                    <p>
                        660061, г. Красноярск, проспект им. газеты Красноярский Рабочий, 27
                    </p>
                </div>
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

<?php get_footer() ?>
