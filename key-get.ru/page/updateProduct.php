<?php
if(empty($_SESSION['name'])){
    $_SESSION['error'] = 'У Вас нет доступа!';
    header("Location: auth");
    exit;
}
$add_product = $_POST['add_product'];

headerFUN('description', 'keywords', 'Редактирование');
    //получит gj GET
    if($_GET['id']){
        $id = $_GET['id'];
        $getProductID = getProductID($id);
    }
    if($_GET['title']){
        $title = $_GET['title'];
        $getProductID = getProductIdTitle($title);
    }
?>
<body class="admin">
<script src="//cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.4.0/clipboard.min.js"></script>
<script src="/tinymce/tinymce.min.js"></script>
<script src="/tinymce/tinymce_init.js"></script>
<div class="container_account">
    <div class="market_block_title">
        <h1 class="market_title">Редактирование продукта </h1>
    </div>

    <div class="account_title">
        <div class="account_product_link">
            <a href="account" class="<?php if($page === 'account' ) echo 'account_bold' ?> " >Все</a> /
            <a href="archive" class="<?php if($page === 'archive' ) echo 'account_bold';?> " >Архив</a> /
            <a href="notActive" class="<?php if($page === 'notActive' ) echo 'account_bold';?> " >Не активированные</a>
        </div>
    </div>
    <?php include_once 'lib/message.php'; ?>


    <div class="account_wrap">

        <div class="account_product">
            <form method="post" action="updateProductFunc"  enctype="multipart/form-data">
                <div class="account_product_block">
                    <div class="account_product_block_title add">Название:</div>
                    <input type="text" class="add_input" name="title" value="<?= $getProductID['title']?>">
                    <input type="hidden" class="add_input" name="id" value="<?= $id ?>">
                </div>
                <div class="account_product_block">
                    <div class="account_product_block_title add">Ключ для входа:</div>
                    <input type="text" class="add_input"  name="key_id" id="input-password" value="<?= $getProductID['key_id']?>" >

                </div>
                <div class="account_product_block">
                    <div class="account_product_block_title add">Код:</div>
                    <input type="text" class="add_input"  name="code_product" value="<?= $getProductID['code_product']?>">
                </div>
                <div class="mytextarea_width">
                    <div class="account_product_block_title add">Инструкция:</div>
                    <textarea class="mytextarea"  name="tmp_name">
                        <?= $getProductID['manual']?>
                    </textarea>
                </div>
                <div class="account_product_block">
                    <div class="account_product_block_title add">Комментарий:</div>
                    <textarea class="mytextarea"  name="comment">
                        <?= $getProductID['comment']?>
                    </textarea>
                </div>

                <div class="account_product_block">
                    <input class="input_item update"  type="submit" name="add_product" value="сохранить">
                </div>

            </form>
            <br>
            <hr>
        </div>

    </div>
</div>

<br>
<br>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</body>
</html>


