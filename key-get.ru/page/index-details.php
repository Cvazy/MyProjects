<?php
headerFUN('description', 'keywords', 'Ваш продукт');
if (isset($_POST['code'])) {
    $code = $_POST['code'];
    $keys = htmlspecialchars($_POST['code']);

//получаем все коды
    $get_code_db = get_code();

//проверяем на существования код
    foreach ($get_code_db as $get_code_dbs) {

        if (trim($get_code_dbs['code']) == $keys) {
            //если есть такой код, сохраняем все данные
            $result_code = $get_code_dbs;

            //проверить на существование ключа, у этого кода.
            $id_product = $result_code['id_product'];

            $res = $db->query("SELECT * FROM `key` WHERE `history` != '1' AND  `id_product` = $id_product");
            $key = $res->fetch(PDO::FETCH_ASSOC);
            $getKeyId = getKeyId($id_product);
            $getKey = getKeyDetalStr($code);

            //Если ключ найден у продукта
            if ($result_code["activated"] == 0) {
                //отправить код в историю
                $success = $db->prepare("UPDATE `key` SET history=? WHERE `id` = '$key[id]'");
                $success->execute(['1']);

                //связать код с ключом, сохраняем код в таблицу с ключом
                $success = $db->prepare("UPDATE `key` SET keyproduct=? WHERE `id` = '$key[id]'");
                $success->execute([$keys]);

                $today = date('d-m-Y H:i:s');
                $success = $db->prepare("UPDATE `key` SET data=? WHERE `id` = '$key[id]'");
                $success->execute([$today]);

                $success = $db->prepare("UPDATE `code_key_get` SET activated=? WHERE `code` = '$result_code[code]'");
                $success->execute(['1']);
            }
        }
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
                        <span id="modal-instruction" class="modal-instruction">
                            Уникальный код указан на <br> наклейке. <br>Вы можете найти ее внутри<br> коробки
                        </span>
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

                <?php if (!isset($getKeyId['title'])) : ?>
                    <div class="help ml-62">
                        <span class="up-text">
                            Вы ввели неверный или несуществующий код.
                            Пожалуйста, проверьте написание и введите его повторно,
                            перейдя на <a class="black" href="index">главную страницу</a>
                        </span>
                    </div>
                <?php endif; ?>

                <div class="key-input">
                    <form id="form" action="<?php echo 'funcCode' ?>" method="post" class="block">
                        <img class="logo" src="../images/Microsoft_logo_(2012).svg" alt="Microsoft logo">

                        <label>
                            <input type="text" id="code" name="code" value="<?= $code ?>"
                                   placeholder="Пример...0913Y2D1345" REQUIRED>
                        </label>

                        <a class="question" href="#" data-modal-window="#ModalWindow">
                            Где найти уникальный код?
                        </a>

                        <button disabled id="next1" class="next" type="submit">
                            <span>Далее</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <div class="step2">
            <div class="second-window" id="SecondModalWindow" aria-hidden="true">
                <form action="../lib/mail.php" method="post">
                    <div class="second-modal-content" id="second-modal-content" role="dialog" aria-hidden="true">
                        <span id="send-email" class="send-email">Отправить ключ на электронную почту</span>

                        <label>
                            <input type="email" id="email" name="email" placeholder="Введите email" REQUIRED>
                        </label>
                    </div>

                    <div id="second-btn" class="second-btn">
                        <input name="code" type="hidden" value="<?= $code ?>">
                        <input name="key" type="hidden" value="<?= $key["key_product"] ?>">
                        <input name="product" type="hidden" value="<?= $getKeyId['id'] ?>">
                        <input name="title" type="hidden" value="<?= $getKeyId['title'] ?>">
                        <button class="send-btn" id="mail_es" type="submit" name="mail_es">
                            <span>Отправить</span>
                        </button>

                        <span data-modal-close id="second-close" class="second-close">
                            Не нужно отправлять на почту
                        </span>
                    </div>
                </form>
            </div>

            <div class="step">
                <img src="../images/second-step.png" alt="2">
                <span>Ваш ключ активации</span>
            </div>

            <?php if (isset($getKeyId['title'])) : ?>
                <div class="step-container">
                    <div id="step2" class="key-give-step2">
                        <div class="item">Ваш продукт:<?= $getKeyId['title'] ?></div>

                        <div class="key">
                            <span><?= $key["key_product"] ?></span>
                        </div>

                        <div class="send-key">
                            <a class="email" href="#" data-modal-window="#SecondModalWindow">
                                <span class="line fl-l">Отправить на почту</span>
                                <img class="fl-r ml-10" src="../images/email.png" alt="Email">
                            </a>
                        </div>

                        <button class="next" id="next2" type="button">
                            <span>Далее</span>
                        </button>
                    </div>
                </div>
            <?php endif; ?>
        </div>

        <div class="step3">
            <div class="step">
                <img src="../images/third-step.png" alt="3">
                <span>Инструкции</span>
            </div>

            <div id="step3" class="instruction-text">
                <?= isset($getKeyId['manual']) ? $getKeyId['manual'] : 'Вы не ввели ключ' ?>
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
                <img  class="logo" src="../images/Microsoft_logo_(2012).svg" alt="Microsoft logo">
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
<script src="//code.jivo.ru/widget/8mi3nVDESy" async></script>