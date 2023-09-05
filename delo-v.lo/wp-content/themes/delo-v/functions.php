<?php

global $wpdb;
function delo_assets() {

    wp_enqueue_style( 'headcss', get_template_directory_uri() . '/assets/style/head-style.css' );

    wp_enqueue_style( 'fontscss', get_template_directory_uri() . '/assets/fonts/Geometria/stylesheet.css' );

    wp_enqueue_style( 'maincss', get_template_directory_uri() . '/assets/style/style.css' );

    wp_enqueue_style( 'adaptivecss', get_template_directory_uri() . '/assets/style/adaptive.css' );

    wp_enqueue_script( 'foot1', get_template_directory_uri() . '/assets/script/foot-scr1.js', array(), '20151215', true );

    wp_enqueue_script( 'foot2', get_template_directory_uri() . '/assets/script/foot-scr2.js', array(), '20151215', true );

    wp_enqueue_script( 'foot3', get_template_directory_uri() . '/assets/script/foot-scr3.js', array(), '20151215', true );

    wp_enqueue_script( 'app', get_template_directory_uri() . '/assets/script/app.js', array(), '20151215', true );

    wp_enqueue_script( 'add-to-cart', get_template_directory_uri() . '/assets/script/add-to-cart.js', array(), '20151215', true );
}

add_action( 'wp_enqueue_scripts', 'delo_assets' );
add_theme_support('post-thumbnails');

show_admin_bar(false);

add_action( 'after_setup_theme', 'crb_load' );

function crb_load() {
    require_once( 'includes/carbon-fields/vendor/autoload.php' );
    \Carbon_Fields\Carbon_Fields::boot();
}

add_action('carbon_fields_register_fields', 'register_carbon_fields');
function register_carbon_fields() {
    require_once( 'includes/carbon-fields-options/theme-options.php' );
}

function get_category_items($array) {
    global $wpdb;
    $array_id = implode(',', $array);

    $query = "SELECT * FROM wp_posts WHERE post_type = 'product' AND ID IN ($array_id)";
    $result_array = $wpdb->get_results($query);
    return $result_array;
}

function search_data($product_id) {
    global $wpdb;
    $result_data = $wpdb->get_results( "SELECT meta_value FROM wp_postmeta WHERE post_id = '$product_id' and meta_key = '_product_attributes'");
    return $result_data[0]->meta_value;
}

function getPrice($type, $product_id) {
    global $wpdb;
    if ($type == 'min') {
        $responce = $wpdb->get_results("SELECT meta_value FROM wp_postmeta WHERE post_id = '$product_id' and meta_key = '_sale_price'");
    }
    elseif ($type == 'full'){
        $responce = $wpdb->get_results("SELECT meta_value FROM wp_postmeta WHERE post_id = '$product_id' and meta_key = '_regular_price'");
    }

    $price = number_format(floatval($responce[0]->meta_value), 0, '.', ' ');

    return $price;
}

function saveProductView($user_id, $product_id)
{
    global $wpdb;

    $existing_record = $wpdb->get_results("SELECT * FROM look_user_product WHERE user_id = '$user_id' AND product_id = '$product_id'");

    // Если запись не найдена, выполняем вставку новых данных
    if (count($existing_record) == 0) {
        // Подготавливаем данные для вставки
        $data = array(
            'user_id' => $user_id,
            'product_id' => $product_id
        );

        // Вставляем данные в таблицу
        $wpdb->insert('look_user_product', $data);
    }
}

function enqueue_scripts() {
    wp_enqueue_script('jquery');
}
add_action('wp_enqueue_scripts', 'enqueue_scripts');

// Обработчик AJAX-запроса на добавление товара в корзину
function add_to_cart_ajax_handler() {
    if (isset($_POST['product_id'])) {
        $product_id = intval($_POST['product_id']);
        $quantity = 1; // Количество товара, которое будет добавлено в корзину

        WC()->cart->add_to_cart($product_id, $quantity); // Добавляем товар в корзину

        // Возвращаем сообщение об успешном добавлении товара в корзину
        $response = array(
            'success' => true,
            'data' => 'Товар успешно добавлен в корзину.'
        );
    } else {
        // Возвращаем сообщение об ошибке
        $response = array(
            'success' => false,
            'data' => 'Ошибка: не указан идентификатор товара.'
        );
    }

    wp_send_json($response);
}
add_action('wp_ajax_add_to_cart', 'add_to_cart_ajax_handler');
add_action('wp_ajax_nopriv_add_to_cart', 'add_to_cart_ajax_handler');

// Обработчик AJAX-запроса на удаление товара из корзины
add_action('wp_ajax_remove_from_cart', 'remove_from_cart');
add_action('wp_ajax_nopriv_remove_from_cart', 'remove_from_cart');
function remove_from_cart() {
    if (isset($_POST['product_id'])) {
        $product_id = intval($_POST['product_id']);
        $cart_item_key = WC()->cart->generate_cart_id($product_id);

        if ($cart_item_key) {
            WC()->cart->remove_cart_item($cart_item_key);

            // Возвращаем сообщение об успешном удалении товара из корзины
            $response = array(
                'success' => true,
                'data' => 'Товар успешно удалён из корзины.'
            );
        } else {
            // Возвращаем сообщение об ошибке, если товар не найден в корзине
            $response = array(
                'success' => false,
                'data' => 'Ошибка: товар не найден в корзине.'
            );
        }
    } else {
        // Возвращаем сообщение об ошибке, если не указан идентификатор товара
        $response = array(
            'success' => false,
            'data' => 'Ошибка: не указан идентификатор товара.'
        );
    }

    wp_send_json($response);
}


