<section class="map-and-footer">
    <div class="content-map-and-footer">
        <div class="map-content">
            <div id="map" class="map"></div>
        </div>
        <div class="red-map"></div>
        <div class="content-info-contact">
            <div class="red-square-map"></div>
            <div class="wrapper-content-info-contact">
                <p class="title-content-contact">
                    Свяжитесь с нами
                </p>
                <div class="contact-info-blocks">
                    <div class="block-contact-info">
                        <p class="title-block-contact-info">
                            Адрес
                        </p>
                        <p class="text-block-contact-info">
                            <?php echo carbon_get_theme_option('site_address')?>
                        </p>
                    </div>
                    <div class="block-contact-info">
                        <p class="title-block-contact-info">
                            Телефон
                        </p>
                        <a href="tel:<?php echo carbon_get_theme_option('site_phone_foot')?>" class="text-block-contact-info">
                            <?php echo carbon_get_theme_option('site_phone_foot')?>
                        </a>
                    </div>
                </div>
                <div class="contact-info-blocks-2">
                    <div class="block-contact-info">
                        <p class="title-block-contact-info">
                            E-mail
                        </p>
                        <a href="mailto:<?php echo carbon_get_theme_option('site_email')?>" class="text-block-contact-info">
                            <?php echo carbon_get_theme_option('site_email')?>
                        </a>
                    </div>
                    <div class="block-contact-info">
                        <p class="title-block-contact-info">
                            График работы
                        </p>
                        <p class="text-block-contact-info">
                            <?php echo carbon_get_theme_option('site_graffic')?>
                        </p>
                    </div>
                </div>
                <div class="flex-contact-social">
                    <a href="#!" class="block-map-social">
                        <div class="circle-social-map">
                            <img src="<?php bloginfo('template_url')?>/assets/img/wh-contact.svg" alt="">
                        </div>
                        <div class="text-block-map-social">
                            <p>
                                Написать в
                            </p>
                            <span>
                            WhatsApp
                        </span>
                        </div>
                    </a>
                    <a href="#!" class="block-map-social">
                        <div class="circle-social-map">
                            <img src="<?php bloginfo('template_url')?>/assets/img/tg-contact.svg" alt="">
                        </div>
                        <div class="text-block-map-social">
                            <p>
                                Написать в
                            </p>
                            <span>
                            Telegram
                        </span>
                        </div>
                    </a>
                </div>
                <div class="last-links-contact">
                    <a href="#!">
                        Политика конфиденциальности
                    </a>
                    <a href="/catalog/">
                        Каталог сайта
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <p class="last-text-footer">
            © 2023 “Дело в прицепе” - База металлопроката в Москве. Все права защищены, любое копирование материалов запрещено. Вся представленная информация на сайте носит информационный характер и ни при каких условиях не является публичной офертой.
        </p>
    </div>
</section>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
<?php wp_footer(); ?>
</body>
</html>