<?php
session_start();
include_once 'lib/config.php';
include_once 'lib/functions.php';

$url = $_SERVER['REQUEST_URI'];

if($_SERVER['REQUEST_URI'] == '/'){ //если пустой
    $page = 'index';
    $module = 'index';
} else{
    $url_path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH); // разбиваем адрес на части
    $url_parts = explode('/', trim($url_path, '/'));// разбиваем на массив
    $page = array_shift($url_parts); // определяем имя
    $module = array_shift($url_parts); // определяем модуль

    if(!empty($module)){
        $param = array();
        for($i = 0; $i < count($url_parts); $i++){
            $param[$url_parts[$i]] = $url_parts[++$i];
        }
    }
}

    if ($page == 'index' || empty($page)) include 'page/index.php';

    elseif ($page == 'code') include 'page/code.php';
    elseif ($page == 'index-details') include 'page/index-details.php';
    elseif ($page == 'index-pass') include 'page/index-pass.php';
    elseif ($page == 'articles') include 'page/articles.php';
    elseif ($page == 'article-detail') include 'page/article-detail.php';
    elseif ($page == 'ProgDetails') include 'page/progdetails.php';
    elseif ($page == 'auth') include 'page/auth.php';
    elseif ($page == 'test') include 'page/test.php';

    elseif ($page == 'account') include 'page/account.php';
    elseif ($page == 'account-user') include 'page/account-user.php';
    elseif ($page == 'account_new') include 'page/account-product.php';
    elseif ($page == 'account-product') include 'page/account-product.php';
    elseif ($page == 'account-edit') include 'page/account-edit.php';
    elseif ($page == 'account-generator') include 'page/account-generator.php';
    elseif ($page == 'edit-key') include 'page/edit-key.php';
    elseif ($page == 'prezent') include 'page/prezent.php';
    elseif ($page == 'edit-prezentFunc') include 'page/edit-prezentFunc.php';
    elseif ($page == 'delete') include 'page/delete.php';
    elseif ($page == 'oldBase') include 'page/oldBase.php';

    elseif ($page == 'leftPanel') include 'page/leftPanel.php';

    elseif ($page == 'addProduct') include 'page/addProduct.php';
    elseif ($page == 'addInstruction') include 'page/addInstruction.php';

    elseif ($page == 'archive') include 'page/archive.php';
    elseif ($page == 'notActive') include 'page/notActive.php';

    elseif ($page == 'updateProduct') include 'page/updateProduct.php';
    elseif ($page == 'client') include 'page/client-email.php';
    elseif ($page == 'CodeEmail') include 'page/CodeEmail.php';

    elseif ($page == 'funcCode') include 'lib/funcCode.php';
    elseif ($page == 'funcCodeEmail') include 'lib/funcCodeEmail.php';
    elseif ($page == 'authFunc') include 'lib/authFunc.php';
    elseif ($page == 'addProductFunc') include 'lib/addProductFunc.php';
    elseif ($page == 'addInstructionFunc') include 'lib/addInstructionFunc.php';
    elseif ($page == 'downloadKey') include 'lib/downloadKey.php';
    elseif ($page == 'remains') include 'lib/remains.php';
    elseif ($page == 'deleteProduct') include 'lib/deleteProduct.php';
    elseif ($page == 'updateAccount') include 'lib/updateAccount.php';
    elseif ($page == 'func') include 'lib/func.php';

    elseif ($page == 'updateProductFunc') include 'lib/updateProductFunc.php';
    elseif ($page == 'account-addkeyFunc') include 'lib/account-addkeyFunc.php';
    elseif ($page == 'account-addCodeFunc') include 'lib/account-addCodeFunc.php';

    elseif ($page == 'account-generatorFunc2') include 'lib/account-generatorFunc2.php';
    elseif ($page == 'edit-keyFunc') include 'lib/edit-keyFunc.php';
    elseif ($page == 'edit-codeFunc') include 'lib/edit-codeFunc.php';

    elseif ($page == 'key-prezentFunc') include 'lib/key-prezentFunc.php';
    elseif ($page == 'logout') include 'lib/logout.php';
    elseif ($page == 'testfunc') include 'lib/testfunc.php';
    elseif ($page == 'mail') include 'lib/mail.php';
    elseif ($page == 'search') include 'lib/search.php';