<?php
headerFUN('description', 'keywords', 'Список всех инструкций');
$windows = get_windows_instruction();
$office = get_office_instruction();
?>

<body>
<div class="main-container">
    <header class="header-style">
        <div class="head-left">
            <a href="<?php echo 'index' ?>">
                <img class="logo" src="../images/Microsoft_logo_(2012).svg" alt="Microsoft logo">
            </a>
            <img class="pl-5" src="../images/small-line.png" alt="">
            <img class="burger" src="../images/burg-menu.png" alt="">
            <span class="pl-40">Получить ключ</span>
        </div>

        <div class="head-right">
            <a class="states" href="<?php echo 'articles' ?>">Статьи</a>
            <a class="states" href="javascript:jivo_api.open()">
                <span class="pl-60">Обратиться в службу поддержки</span>
            </a>
        </div>
    </header>

    <div class="articles-container">
        <div class="article-states">
            <div class="article-title">Инструкции и руководства</div>

            <div class="small-container">
                <div class="article-small">Windows</div>

                <?php
                foreach ($windows as $window) {
                    $productLink = 'article-detail/?id=' . $window['id'];
                    $productName = $window['title'];

                    echo '<a href="' . $productLink . '" class="article-href">' . $productName . '</a>';
                }
                ?>
            </div>

            <div class="small-container">
                <div class="article-small">Office</div>

                <?php
                foreach ($office as $office_p) {
                    $productLink = 'article-detail/?id=' . $office_p['id']; // Предполагая, что у вас есть поле 'id' для каждой записи
                    $productName = $office_p['title']; // Предполагая, что у вас есть поле 'name' для каждой записи

                    echo '<a href="' . $productLink . '" class="article-href">' . $productName . '</a>';
                }
                ?>
            </div>
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
<script src="//code.jivo.ru/widget/8mi3nVDESy" async></script>