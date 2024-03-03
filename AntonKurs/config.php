<?php
// Параметры подключения к базе данных
$db_host = '127.0.0.1';
$db_username = 'Root';
$db_password = 'local';
$db_database = 'antonKurs_db';

// Подключение к базе данных
$conn = new mysqli($db_host, $db_username, $db_password, $db_database);

// Проверка соединения
if ($conn->connect_error) {
    die("Ошибка подключения к базе данных: " . $conn->connect_error);
}
//else {
//    echo 'Подключение успешно';
//}
