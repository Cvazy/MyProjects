<?php
headerFUN('description', 'keywords', 'Введите код');

?>
<body>
<div class="container">
    <div class="market_block_title">
        <div class="market_title_main">
            <h1 class="market_title">
                <span class="bold">
                    <a href="/">
                        <img class="img_logo" src="Untitled.png" alt="">
                        <span class="market_title_link">Enter Code </span><br>
                        Магазин Лицензионного ПО
                    </a>
                </span>
            </h1>
        </div>
    </div>
    <?php include_once 'lib/message.php'; ?>
    <p class="market_help">Введите уникальный код в окно</p>
    <div class="code_block">
        <form action="" method="post" >
            <div class="error_code""></div>
            <div class="market_social_email windows">
                <input class="input_key" id="code" name="code" type="hidden" value="<?= $_GET['code']?>">
            </div>

            <input name="surname"> <!-- input -->
            <div class="market_social_email windows">
                <input class="input_key submit" type="submit" value="Отправить">
            </div>
        </form>
    <form action="funcCodeEmail" method="post" >
        <div id="popup3 " class="popup3 open">
        <a href="#header" class="popup__area3"></a>
        <div class="popup__body3">
            <div class="popup__content3">

                <div class="popup__title3">Введите электронную почту, для отправки ключа</div>
                <div class="popup__text3">
                    <div class="error_codeemail"></div>
                    <input class="popup_mg3" id="email" type="text" name="email"
                           placeholder="Пример...youremail@mail.ru">
                    <input  name="code" type="hidden" value="<?= $_GET['code']?>">
                    <input class="popup_submit3" id="mail_es" type="submit" name="mail_es" value="Отправить">
                    <div class="before_block">
                    <input class="popup_submit3 mail_no" type="submit" name="mail_no"
                           value="Не нужно отправлять на почту">
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>

    <div class="mapket_title_ins"> *Вводите код большими буквами и на английском языке</div>
</div>

<div class="market_block_contact_wrap">
    <div class="market_block_contact contactnew">
        <p class="market_title_contact">Контакты</p>
        <p class="market_will_help"> Если у вас проблемы с активацией ключа, пожалуйста, обратитесь к нам.</p>
        <p class="market_will_help"> Мы обязательно поможем!.</p>
        <p class="market_will_help"> Позвоните или напишите в удобный мессенджер.</p>
        <p class="market_will_help">
            <img src="../img/icon/phone.png" alt="" style="width: 30px;">
            +7 916 803 87 35
        </p>


    </div>
    <div class="market_block_social contactnew right">
        <div class="market_social email contactnew">
            <a target="blank" href="" class="btn-link contact">
                <img class="market_icon_img contactnew" src="/img/icon/email.png" alt="">
                <p><span class="block_text"></span> support@progbazar.com</p>

            </a>
        </div>
        <div class="market_social contactnew">
            <a target="blank" href="https://api.whatsapp.com/send?phone=79168038735" class="btn-link contact">
                <img class="market_icon_img contactnew" src="/img/icon/whatsapp.png" alt="">
                <p>Написать в Whats App</p>

            </a>
        </div>
        <div class="market_social telegram contactnew">
            <a href="https://taplink.cc/progmarket" class="btn-link contact">
                <img class="market_icon_img contactnew" src="/img/icon/telegram.png" alt="">
                <p>Написать в Telegram</p>

            </a>
        </div>
        <div class="market_social viber contactnew">
            <a href="viber://chat?number=%2B79168038735" class="btn-link contact">
                <img class="market_icon_img contactnew" src="/img/icon/viber.png" alt="">
                <p>Написать в Viber</p>

            </a>
        </div>
    </div>

</div>
</div>
<div id="popup_error" class="popup_error">
    <a href="#header" class="popup__area_error"></a>
    <div class="popup__body_error">
        <div class="popup__content_error">
            <a href="#" class="popup__close_error">X</a>
            <div class="popup__title_error">

                Ошибка!Такого кода не существует!
            </div>

        </div>
    </div>
</div>


<br>
<br>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
    $(document).ready(function () {
        $('.market_questions_title').click(function (event) {
            $(this).toggleClass('active').next().slideToggle(300);
        })


        //закрыть popup
        $('.popup__close3').click(function (event) {

            document.location.href = '/';
        })
        $('.popup__close_error').click(function (event) {
            $('.popup_error').toggleClass('open');
        })


    });

</script>

</body>
</html>



