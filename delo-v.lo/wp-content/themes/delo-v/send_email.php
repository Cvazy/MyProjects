<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Получение данных из POST-запроса
    $email = $_POST['email'];
    $orderTotal = $_POST['order_total'];

    // Отправка письма с данными заказа
    $to = 'delo-v@main.ru';
    $subject = 'Новый заказ';
    $message = 'Email: ' . $email . '\n';
    $message .= 'Сумма заказа: ' . $orderTotal . '\n';

    $headers = 'From: delo-v@main.ru' . '\r\n' .
        'Reply-To: delo-v@main.ru' . '\r\n' .
        'X-Mailer: PHP/' . phpversion();

    $success = mail($to, $subject, $message, $headers);

    // Формирование ответа
    $response = array('success' => $success);

    echo json_encode($response);
} else {
    // Ошибка: неверный метод запроса
    $response = array('success' => false, 'data' => 'Неверный метод запроса');
    echo json_encode($response);
}
