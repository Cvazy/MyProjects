<?php
headerFUN_admin('description', 'keywords', 'Авторизация');


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
    <div class="market_block_title">
        <h2 class="market_help market">Авторизация</h2>
    </div>
    <form action="authFunc" method="post">
        <div class="market_social windows">
            <input  class="input_key" name="name" type="text" placeholder="Логин">
        </div>
        <div class="market_social windows">
            <input  class="input_key" name="password" type="text" placeholder="Пароль">
        </div>

        <div class="market_social windows">
            <input class="input_key"  type="submit" value="отправить">
        </div>
    </form>
</div>

<br>
<br>
<br>
<br>
<br>
<br>
</body>
</html>
























