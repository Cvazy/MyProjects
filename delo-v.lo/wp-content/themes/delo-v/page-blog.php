<?php

global $wpdb;

get_header();

$blog = $wpdb->get_results("SELECT object_id FROM `wp_term_relationships` where term_taxonomy_id = 28");
$blog_id = array();
foreach ($blog as $id){
    array_push($blog_id, $id->object_id);
}

?>

<?php

/* Template Name: blog */

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

<section class="services-page-section">
    <div class="container">
        <div class="bit-title-page">
            Статьи и новости
        </div>
        <div class="services-page-section-container services-page-section-container2">
            <div class="blog-page-section-container-left">
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
                            <a href="/blogpage?article_id=<?php echo $res->ID ?>" target="_blank" class="read-more-blog">Читать полностью</a>
                        </div>
                    </div>
                    <?php
                }
                ?>
            </div>
            <div class="services-page-section-container-right">
                <form action="#!" method="post" class="form-contact form-contact2 form-contact3">
                    <div class="rekvezits-line"></div>
                    <h3 class="form-contact3-title">
                        Свежие статьи
                    </h3>
                    <div class="form-contact3-block-container">
                        <?php
                        foreach (get_category_items($blog_id) as $res) {
                        $product = wc_get_product($res->ID);
                        ?>
                            <div class="form-contact3-block">
                                <p><?php echo $res->post_title ?></p>
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
                            </div>
                            <?php
                        }
                        ?>
                    </div>

                </form>
            </div>
        </div>
    </div>
</section>

<?php get_footer() ?>
