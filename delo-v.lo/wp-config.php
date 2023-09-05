<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'delo-v' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', '' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'iL1P%~Mb(^]$^`DYBXU}+~@U0|sC+fUj34aXV(j>Q6Bd=}+_L<c$6e@Me _ gRgb' );
define( 'SECURE_AUTH_KEY',  'pDrKXIx~Q5phS,XRg*$Xqziqe2f3<s<C+R$hCjxLExr^9:v_2iJ`]&!7NR{8PPSS' );
define( 'LOGGED_IN_KEY',    'oW}1=.d=eE[/7A)UN6Ui%an2OWH.pR-ya{+_~a/Zv3X%}0Z0G$xnAD4q4@$`;`57' );
define( 'NONCE_KEY',        '5AK1Q:Q-w5=C%+Fl^ Y8YEE/dmYs6>OZotgy]jK!0KJt74n8M[`qwi+)&_]Q^{+*' );
define( 'AUTH_SALT',        'A%Pr7GkJnN>?gSWPA6I)6AtZm+]C~XRwx6Odm^?}n8$>2`S0uTN#]3It?65FK_[k' );
define( 'SECURE_AUTH_SALT', 'U]Kk{7*nlwcCw/s-1PlObf1?jK#I?/)G<:3uWH0-.cLCckHM{%;mR]a:|:Swj3O[' );
define( 'LOGGED_IN_SALT',   '#0%,:Hiq3}gE*Z@TB]~-`PaAUm$_tn6PNA1B7oglLFQFgnyI],/|X<kfK`gJe~er' );
define( 'NONCE_SALT',       '}Y7jG#c*)v,%Kbd6l!_qvV,Yh;oo5l[K%DY?IKflf59oilLL4m}U9WhFpS!{c(%l' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
