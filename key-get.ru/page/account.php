<?php
if(empty($_SESSION['name'])){
    $_SESSION['error'] = 'У Вас нет доступа!';
    header("Location: auth");
    exit;
}
headerFUN('description', 'keywords', 'Личный кабинет');
$name = $_SESSION['name'];
//получить личные данные аккаунта
$user = getName($name);
$product_count = [];
//получить все продукты
$getProduct = getProduct();
?>
<body class="admin">
<script src="//cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.4.0/clipboard.min.js"></script>
<script src="/tinymce/tinymce.min.js"></script>
<script src="/tinymce/tinymce_init.js"></script>
<div class="container_account">
    <div class="market_block_title">
        <h1 class="market_title">Личный кабинет </h1>
    </div>

    <?php include_once 'lib/message.php'; ?>

    <div class="account_form">
        <form action="updateAccount" method="post">
            <div class="account_block ">
                <label class="name">Имя: </label>
                <div class="input_block">
                    <input class="input_item admin" type="text"  name="name"  value="<?= $user['name']?>">
                    <input  type="hidden"  name="nameAdmin"  value="<?= $user['name']?>">
                </div>
            </div>
            <div class="account_block ">
                <label class="name">Пароль: </label>
                <div class="input_block">
                    <input class="input_item admin" type="text" name="password" value="<?= $user['password']?>">
                </div>
            </div>

            <div class="input_block">
                <input class="input_item admin update"  type="submit" value="изменить">
            </div>

        </form>

    </div>

    <div class="account_wrap">
        <div class="account_title">Кодов активировано: </div>

            <div class="account_addproduct">
                <form action="addProduct" method="post">
                    <input class="input_item input_item update"  type="submit" name="add_product" value="добавить товар">
                </form>
                <form action="addProduct" method="post">
                    <input class="input_item input_item update"  type="submit" name="add_product" value="генератор">
                </form>
            </div>




        <?php foreach ($getProduct as $item):?>
            <?php
            if(!$product_count) $product_count .= $item['id'];
            else $product_count .= ",$item[id]";
            ?>
        <div class="account_product">
            <div class="account_product_block">
                <div class="account_product_block_title">Название:</div>
                <div class="green"><?= $item['title']?></div>
            </div>
            <div class="account_product_block">
                <div class="account_product_block_title">Ключ:</div>
                <div class="green"><?= $item['key_id']?></div>
            </div>
            <div class="account_product_block">
                <div class="account_product_block_title">Код:</div>
                <div class="green"><?= $item['code_product']?></div>
            </div>
            <div class="account_product_block">
                <div class="account_product_block_title">Инструкция:</div>
                <div class="green"><?= $item['manual']?></div>
            </div>
             <div class="account_product_block">
                <div class="account_product_block_title">Использован:</div>
                <div class="green">
                    <?php
                    if($item['used'] == 1) echo 'Ключ активирован';
                    else echo 'Ключ не активирован';
                    ?>


                </div>
            </div>
            <div class="account_product_block">
                <div class="account_product_block_title">Комментарий:</div>
                <div class="green"><?= $item['comment']?></div>
            </div>
            <div class="account_product_block">
                <div class="account_product_block_title">Дата:</div>
                <div class="green">
                    <?php
                    $time = $item['date'];
                    echo date('d.m.Y ', $time);

                    ?>
                </div>
            </div>
            <div class="account_delete">
                <a href="deleteProduct?id=<?= $item['id'] ?>">Удалить</a>
            </div>
            <div class="account_edit">
                <a href="updateProduct?id=<?= $item['id'] ?>">Редактировать</a>
            </div>
            <br>
            <hr>
        </div>
        <?php endforeach; ?>
        <p class="ref_count">
            <?php if($product_count) echo  $product_count = count(explode(",",$product_count));
            else echo 0;  ?> продукта.
        </p>
    </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</body>
</html>

