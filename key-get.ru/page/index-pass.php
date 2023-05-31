<?php

headerFUN('description', 'keywords', 'Введите код');
$key_id = $_GET['id'];
$id_product = $_GET['product'];
$code = $_POST['code'];
$getKeyId = getKeyId($id_product);
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
<div class="main-container">
    <header class="header-style">
        <div class="head-left">
            <a href="<?php echo 'index' ?>">
                <img class="logo" src="../images/Microsoft_logo_(2012).svg" alt="Microsoft logo">
            </a>
            <img class="pl-5" src="../images/small-line.png" alt="">
            <div id="nav-btn" class="burger">
                <img id="nav-btn-img" src="../images/burg-menu.png" alt="">
            </div>
            <span class="pl-40">Получить ключ</span>
        </div>

        <div id="nav" class="js-nav">
            <div class="nav-title">Настроить</div>

            <div class="nav-content">
                <a class="states" href="<?php echo 'articles' ?>">Статьи</a>
                <a class="states" href="javascript:jivo_api.open()">
                    <span class="pl-60">Обратиться в службу поддержки</span>
                </a>
            </div>
        </div>

        <div class="head-right">
            <a class="states" href="<?php echo 'articles' ?>">Статьи</a>
            <a class="states" href="javascript:jivo_api.open()">
                <span class="pl-60">Обратиться в службу поддержки</span>
            </a>
        </div>
    </header>

    <div class="help mt-70">
        <div class="help-content">
            <span class="up-text">Трудности при активации или установке?</span>

            <a class="jivo-btn" href="javascript:jivo_api.open()">
                <button class="button-help" type="button">
                    <span>ОБРАТИТЬСЯ В СЛУЖБУ ПОДДЕРЖКИ</span>
                </button>
            </a>
        </div>
    </div>

    <span class="title">Здравствуйте, спасибо за покупку</span>
    <span class="add-text">Пройдите этапы ниже, для получения<br> ключа активации продукта</span>

    <?php include_once 'lib/message.php'; ?>

    <div class="main-content">
        <div class="step1">
            <div class="window" id="ModalWindow" aria-hidden="true">
                <div class="first-modal-content" id="first-modal-content" role="dialog" aria-hidden="true">
                    <div class="modal-text">
                        <span id="modal-title" class="modal-title">Где найти уникальный код?</span>
                        <span id="modal-instruction"
                              class="modal-instruction">Уникальный код указан на <br> наклейке. <br>Вы можете найти ее внутри<br> коробки</span>
                    </div>

                    <div id="hint" class="hint">
                        <img src="../images/mini-logo.png" alt="">

                        <div id="illustration" class="illustration">
                            <div id="small-instr" class="small-instr">XXXXXX</div>
                        </div>
                    </div>
                </div>

                <button data-modal-close class="modal-close" id="modal-close">
                    <span>ЗАКРЫТЬ</span>
                </button>
            </div>

            <div class="step mt-70">
                <img src="../images/first-step.png" alt="1">
                <span>Введите уникальный код</span>
            </div>

            <div class="step-container">
                <p class="small-text">*Вводите код большими буквами и на английском языке</p>

                <div class="key-input">
                    <form id="form" action="funcCode" method="post" class="block">
                        <img class="logo" src="../images/Microsoft_logo_(2012).svg" alt="Microsoft logo">

                        <label>
                            <input type="text" id="code" name="code" value="<?= isset($key_id) ? $key_id : '' ?>"
                                   placeholder="Пример...0913Y2D1345" REQUIRED>
                        </label>

                        <a class="question" href="#" data-modal-window="#ModalWindow">
                            Где найти уникальный код?
                        </a>

                        <span>Вы ввели неверный или несуществующий код. Пожалуйста, проверьте написание и введите его повторно.</span>

                        <button class="next" id="next1" type="submit">
                            <span>Далее</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <div class="step2">
            <div class="step">
                <img src="../images/second-step.png" alt="2">
                <span>Ваш ключ активации</span>
            </div>
        </div>

        <div class="step3">
            <div class="step">
                <img src="../images/third-step.png" alt="3">
                <span>Инструкции</span>
            </div>
        </div>
    </div>

    <div class="help mt-50">
        <div class="help-content">
            <span class="up-text">Трудности при активации или установке?</span>

            <a class="jivo-btn" href="javascript:jivo_api.open()">
                <button class="button-help" type="button">
                    <span>ОБРАТИТЬСЯ В СЛУЖБУ ПОДДЕРЖКИ</span>
                </button>
            </a>
        </div>
    </div>

    <footer>
        <div class="ta-c">
            <img class="mt-57" src="../images/big-line.png" alt="Start Footer">
        </div>

        <div class="footer">
            <a href="<?php echo 'index' ?>">
                <img class="logo" src="../images/Microsoft_logo_(2012).svg" alt="Microsoft logo">
            </a>
            <img class="small-line pl-5" src="../images/small-line.png" alt="">

            <br/><a class="states pl-40" href="<?php echo 'articles' ?>">Статьи</a>
            <br/><a class="states" href="javascript:jivo_api.open()">
                <span class="pl-60">Обратиться в службу поддержки</span>
            </a>
        </div>
    </footer>
</div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="../assets/js/main.js"></script>
<script src="../assets/js/burger.js"></script>
<script src="../assets/js/modal.js"></script>
<script src="../assets/js/discoloration.js"></script>
<script src="//code.jivo.ru/widget/8mi3nVDESy" async></script>