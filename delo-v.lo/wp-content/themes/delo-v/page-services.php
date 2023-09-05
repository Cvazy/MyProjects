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

/* Template Name: service */

?>

<div class="container">
    <div class="bread-cams">
        <p>
            Главная
        </p>
        <span></span>
        <strong>Услуги</strong>
    </div>
</div>


<section class="services-example">
    <div class="container">
        <div class="bit-title-page">
            Наши услуги
        </div>
        <div class="services-example-container services-example-container2">
            <?php
            foreach (get_category_items($services_id) as $res) {
                $product = wc_get_product($res->ID);

                $image_id = $product->get_image_id();

                $image_url = wp_get_attachment_image_url($image_id, 'full');
                ?>
                <div class="services-example-container-block">
                    <div class="services-example-container-block-img-part">
                        <img src="<?php echo $image_url ?>" alt="">
                    </div>
                    <div class="services-example-container-block-content">
                        <h3><?php echo $res->post_title ?></h3>
                        <p><?php echo $res->post_excerpt ?></p>
                        <?php if(getPrice('min', $res->ID) != 0) { ?>
                            <div class="span-cross-out-price">
                                             <span>
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
                            <span>
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

<?php get_footer() ?>
