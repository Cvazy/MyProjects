<?php

$generator_id = $_GET['generator'];
$code = $_GET['code'];
$key = $_GET['key'];
$prezent_key = $_GET['prezentKey'];

    if($generator_id){
        $query = "DELETE FROM `code_number_key_get` WHERE `id`='$generator_id'";
        $result = $db->exec($query);
        $_SESSION['message'] = 'Ключ удален.';
        header('Location: '.$_SERVER['HTTP_REFERER']);
    }
    if($code){
        $query = "DELETE FROM `code_key_get` WHERE `id`='$code'";
        $result = $db->exec($query);
        $_SESSION['message'] = 'Код удален.';
        header('Location: '.$_SERVER['HTTP_REFERER']);
    }
    if($key){
        $query = "DELETE FROM `key` WHERE `id`='$key'";
        $result = $db->exec($query);
        $_SESSION['message'] = 'Ключ удален.';
        header('Location: '.$_SERVER['HTTP_REFERER']);
    }
    if($prezent_key){
        $query = "DELETE FROM `prezent_key` WHERE `id`='$prezent_key'";
        $result = $db->exec($query);
        $_SESSION['message'] = 'Ключ удален.';
        header('Location: '.$_SERVER['HTTP_REFERER']);
    }

