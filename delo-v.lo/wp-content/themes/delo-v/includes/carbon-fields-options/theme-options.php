<?php

if (!defined('ABSPATH')) {
    exit;
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make( 'theme_options', 'Настройки сайта' )
    ->add_tab( 'Общие настройки сайта', [
        Field::make( 'text', 'site_phone_head', 'Телефон в шапке' ),
        Field::make( 'text', 'site_phone_foot', 'Телефон в футере' ),
        Field::make( 'text', 'site_email', 'Email' ),
        Field::make( 'text', 'site_address', 'Адрес' ),
        Field::make( 'text', 'site_graffic', 'График работы' ),
    ])
    ->add_tab( 'О компании', [
            Field::make( 'text', 'site_ooo', 'ООО' ),
            Field::make( 'text', 'site_ogrn', 'ОГРН' ),
            Field::make( 'text', 'site_inn', 'ИНН' ),
            Field::make( 'text', 'site_kpp', 'КПП' ),
            Field::make( 'text', 'site_okpo', 'ОКПО' ),
            Field::make( 'text', 'site_okato', 'ОКАТО' ),
            Field::make( 'text', 'site_r-s', 'Р/С' ),
            Field::make( 'text', 'site_k-s', 'К/С' ),
            Field::make( 'text', 'site_bik', 'БИК' ),
        ]
    )
    ->add_tab( 'Плавающая строка на главной', [
            Field::make( 'text', 'site_slog_first', 'Первый слоган' ),
            Field::make( 'text', 'site_slog_second', 'Второй слоган' ),
            Field::make( 'text', 'site_slog_third', 'Третий слоган' ),
            Field::make( 'text', 'site_slog_fourth', 'Четвёртый слоган' ),
            Field::make( 'text', 'site_slog_fifth', 'Пятый слоган' ),
        ]
    )
    ->add_tab( 'Условия оплаты', [
            Field::make( 'text', 'site_product_pay', 'Напишите свои условия оплаты' ),
        ]
    );