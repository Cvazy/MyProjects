<?php
headerFUN('description', 'keywords', 'ProgDetails');
$key_id = $_GET['id'];
$id_product = $_GET['product'];
$getKeyId = getKeyId($id_product);
//$geCodeId = geCodeId($key_id);
$getKey = getKeyDetalStr($key_id);

if ($getKeyId['prezent'] == 'on') {

    /*  ПОДАРОК! 061874605
     *  Проверить есть ли код продукта, если есть то показать.
     *  Если нет кода
     *  Сохранить код продукта
     *  Добавляем в историю
     *  И Выводим подарок и код
     *
     * */

    $keyproduct = $getKey['keyproduct'];
    //Проверить есть ли код продукта
    $res = $db->query("SELECT * FROM `prezent_key` WHERE `code` = '$keyproduct'");
    $result = $res->fetch(PDO::FETCH_ASSOC);

    //если нет
    if (!$result) {
        $date = time();
        //отправить ключ подарка в историю и сохраняем код
        $success = $db->prepare("UPDATE `prezent_key` SET  history=?, code=?, counter=?, date=? WHERE `history` = '0'  LIMIT 1;");
        $success->execute(['1', $keyproduct, '1', $date]);

        $res = $db->query("SELECT * FROM `prezent_key` WHERE `code` = '$keyproduct'");
        $result = $res->fetch(PDO::FETCH_ASSOC);

        $prezent_text = prezentText();
    } else {
        //получить данные о подарке
        $prezent_text = prezentText();
    }

}
?>
<body>
<div class="container">
    <div class="market_block_title">
        <div class="market_title_main">
            <h1 class="market_title">
                <span class="bold">
                   <a href="/">
                        <img class="img_logo" src="Untitled.png" alt="">
                        <span class="market_title_link">KEY-GET.RU </span><br>
                        <div class="market_title_mag">Магазин Лицензионного ПО</div>
                    </a>
                </span>
            </h1>
        </div>
    </div>
    <?php include_once 'lib/message.php'; ?>
    <div class="strip"></div>
    <div class="market_block_title prog">
        <div class="market_product_tovar_block">
            <div class="market_product_block detailes">
                <div class="market_help market prog">Ваш продукт: <?= $getKeyId['title'] ?></div>
            </div>
            <div class="market_product_tovar detailes">
                <div class="product detailes">
                    <?php
                    if($getKey['key_product']) {
                        echo $getKey['key_product'];
                    }
                    else {
                        $getKey = getKeyDetal($key_id);
                        echo $getKey['key_product'];
                    }
                    ?>
                </div>
                <div class="market_product_download_block">
                    <div class="market_product_download">
                        <div  class="click_link">
                            Отправить на почту

                        </div>
                    </div>
                    <div class="market_product_download hover_btn ">

                        <a href="downloadKey?key=<?= $getKey['key_product'] ?>">
                            Скачать в txt

                        </a>

                    </div>
                </div>
            </div>
        </div>
        <div class="strip mar"></div>
        <p class="manual_title">Инструкция по установке и активации</p>

    <div class="market_block_title prog hide content_manual">

        <p class="manual_title click">Показать Инструкцию</p>
    </div>
    <div class="market_block_title prog hidex content_manual back">
        <?= $getKeyId['manual'] ?>
    </div>
<!--
        <?php if ($getKeyId['prezent']) : ?>
            <div class="market_block_title prog hide content_manual">

                <p class="manual_title click">Подарок: VPN</p>
            </div>
            <div class="market_block_title prog hidex content_manual back">
                <?php if ($getKeyId['prezent'] == 'on') : ?>
                    <?= $prezent_text['text'] ?>

                    <?php if ($result['key_n']) ?>
                        <b><?= $result['key_n'] ?> </b>

                <?php endif; ?>
            </div>
        <?php endif; ?>
        <?php if ($getKeyId['office'] == 'on') : ?>
            <div class="card_block">
                <p class="market_title_contact content_manual">Возможно, вам понадобится: </p>
                <div class="card_wrapper content_manual">
                    <div class="card_item">
                        <div class="card_img"><img src="../img/office2019-1.jpg" alt="фото товара"></div>

                        <div class="card_link">
                            <a target="_blank" href="https://www.wildberries.ru/catalog/85367135/detail.aspx?targetUrl=XS&utm_source=code">Купить</a>
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_img"><img src="../img/office2019-2.jpg" alt="фото товара"></div>

                        <div class="card_link">
                            <a target="_blank" href="https://www.wildberries.ru/catalog/76771898/detail.aspx?targetUrl=EX&utm_source=code">Купить</a>
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_img"><img src="../img/office2019-3.jpg" alt="фото товара"></div>

                        <div class="card_link">
                            <a target="_blank" href="">Купить</a>
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_img"><img src="../img/office2019-4.jpg" alt="фото товара"></div>

                        <div class="card_link">
                            <a target="_blank" href="https://www.wildberries.ru/catalog/112729041/detail.aspx?targetUrl=EX&utm_source=code">Купить</a>
                        </div>
                    </div>
                </div>
                <div class="card_wrapper content_manual">
                    <div class="card_item">
                        <div class="card_img"><img src="../img/office2019-5.jpg" alt="фото товара"></div>

                        <div class="card_link">
                            <a target="_blank" href="https://www.wildberries.ru/catalog/85805272/detail.aspx?targetUrl=EX&utm_source=code">Купить</a>
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_img"><img src="../img/office2019-6.jpg" alt="фото товара"></div>

                        <div class="card_link">
                            <a target="_blank" href="https://www.wildberries.ru/catalog/85806699/detail.aspx?targetUrl=EX&utm_source=code">Купить</a>
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_img"><img src="../img/office2019-7.jpg" alt="фото товара"></div>

                        <div class="card_link">
                            <a target="_blank" href="https://www.wildberries.ru/catalog/72403049/detail.aspx?targetUrl=EX&utm_source=code">Купить</a>
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_img"><img src="../img/office2019-8.jpg" alt="фото товара"></div>

                        <div class="card_link">
                            <a target="_blank" href="https://www.wildberries.ru/catalog/85369042/detail.aspx?targetUrl=EX&utm_source=code">Купить</a>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif; ?>
        <?php if ($getKeyId['windows'] == 'on') : ?>
            <div class="card_block">
                <p class="market_title_contact content_manual">Возможно, вам понадобится: </p>
                <div class="card_wrapper">

                    <div class="card_item">
                        <div class="card_img"><img src="../img/windows/office20191.jpg" alt="фото товара"></div>

                        <div class="card_link">
                            <a target="_blank" href="https://www.wildberries.ru/catalog/71897582/detail.aspx?targetUrl=EX&utm_source=code">Купить</a>
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_img"><img src="../img/windows/office20192.jpg" alt="фото товара"></div>

                        <div class="card_link">
                            <a target="_blank" href="https://www.wildberries.ru/catalog/72383458/detail.aspx?targetUrl=EX&utm_source=code">Купить</a>
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_img"><img src="../img/windows/office20193.jpg" alt="фото товара"></div>

                        <div class="card_link">
                            <a  target="_blank" href="https://www.wildberries.ru/catalog/72386833/detail.aspx?targetUrl=EX&utm_source=code">Купить</a>
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_img"><img src="../img/windows/office20194.jpg" alt="фото товара"></div>

                        <div class="card_link">
                            <a target="_blank" href="https://www.wildberries.ru/catalog/85806699/detail.aspx?targetUrl=EX&utm_source=code">Купить</a>
                        </div>
                    </div>
                </div>
                <div class="card_wrapper">
                    <div class="card_item">
                        <div class="card_img"><img src="../img/windows/office20195.jpg" alt="фото товара"></div>

                        <div class="card_link">
                            <a target="_blank" href="https://www.wildberries.ru/catalog/110645579/detail.aspx?targetUrl=EX&utm_source=code">Купить</a>
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_img"><img src="../img/windows/office20196.jpg" alt="фото товара"></div>

                        <div class="card_link">
                            <a target="_blank" href="https://www.wildberries.ru/catalog/110995347/detail.aspx?targetUrl=EX&utm_source=code">Купить</a>
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_img"><img src="../img/windows/office20197.jpg" alt="фото товара"></div>

                        <div class="card_link">
                            <a target="_blank" href="https://www.wildberries.ru/catalog/110995054/detail.aspx?targetUrl=EX&utm_source=code">Купить</a>
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_img"><img src="../img/windows/office20198.jpg" alt="фото товара"></div>

                        <div class="card_link">
                            <a target="_blank" href="https://www.wildberries.ru/catalog/85805272/detail.aspx?targetUrl=EX&utm_source=code">Купить</a>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif; ?>
-->



    <div class="market_block_contact_wrap">

        <div class="market_block_contact contactnew">

            <p class="market_title_progdetal">Контакты</p>
            <p class="market_will_help"> Если у вас проблемы с активацией ключа, пожалуйста, обратитесь к нам.</p>
            <p class="market_will_help"> Мы обязательно поможем!</p>
            <p class="market_will_help phon">
                <img src="../img/icon/phone.png" alt="" style="width: 30px;">
                <span class="phon">+7 927 465 16 43</span>
            </p>


        </div>
        <div class="market_block_social  ">

            <div  class="market_block_social_wrap  ">
                <div class="market_social  ">
                    <a target="blank" href="" class="btn-link contact">
                        <img class="market_icon_img contactnew" src="/img/icon/email.png" alt="">
                        <p><span class="block_text"></span> Написать на почту</p>

                    </a>
                </div>

                <div class="market_social  ">
                    <a href="https://web.telegram.org/z/#5322269267" class="btn-link contact">
                        <img class="market_icon_img contactnew" src="/img/icon/telegram.png" alt="">
                        <p>Написать в Telegram</p>

                    </a>
                </div>
            </div>

            <div class="market_block_social_wrap  ">
                <div class="market_social  ">
                    <a target="blank" href="https://api.whatsapp.com/send?phone=79274651643" class="btn-link contact">
                        <img class="market_icon_img contactnew" src="/img/icon/whatsapp.png" alt="">
                        <p>Написать в Whats App</p>

                    </a>
                </div>
                <div class="market_social  ">
                    <a href="viber://chat?number=%2B79168038735" class="btn-link contact">
                        <img class="market_icon_img contactnew" src="/img/icon/viber.png" alt="">
                        <p>Написать в Viber</p>

                    </a>
                </div>
            </div>

        </div>

    </div>
        <form action="mail" method="post" >
            <div id="popup3 " class="popup3 ">
                <a href="#header" class="popup__area3"></a>
                <div class="popup__body3">
                    <div class="popup__content3">
                        <a href="#" class="popup__close3">X</a>
                        <div class="popup__title3">Введите электронную почту, для отправки ключа</div>
                        <div class="popup__text3">
                            <div class="error_codeemail"></div>
                            <input class="popup_mg3" id="email" type="text" name="email"
                                   placeholder="Пример...youremail@mail.ru">
                            <input  name="code" type="hidden" value="<?= $key_id ?>">
                            <input  name="key" type="hidden" value="<?= $getKey['key_product'] ?>">
                            <input  name="product" type="hidden" value="<?= $getKeyId['id'] ?>">
                            <input  name="title" type="hidden" value="<?= $getKeyId['title']  ?>">
                            <input class="popup_submit3" id="mail_es" type="submit" name="mail_es" value="Отправить">
                            <input class="popup_submit3 mail_no" type="submit" name="mail_no"
                                   value="Не нужно отправлять на почту">
                        </div>
                    </div>
                </div>
            </div>
        </form>
</div>
<br>
<br>
<br>
<br>
<br>
<br>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
    $(document).ready(function () {
        $('.hide').click(function (event) {
            $(this).toggleClass('active').next().slideToggle(300);
        })


    $('.click_link').click(function (event) {

        $('.popup3').toggleClass('open');
    });


     //закрыть popup
     $('.popup__close3').click(function (event) {
         $('.popup3').toggleClass('open');
     })



 });


</script>
</body>
</html>