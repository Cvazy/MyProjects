<?php
// Подключение к конфигурационному файлу
include('../config.php');

//Подключение файла с функционалом
include('../lib/auth.php');

// Вызываем функцию при отправке формы
register_user();
?>

<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible"
        content="ie=edge">
  <link href="../assets/styles/css/style.css" rel="stylesheet">
  <link href="../assets/styles/css/base.css" rel="stylesheet">
  <link rel="icon" href="../assets/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
  <title>Todo Project - Registration</title>
</head>
<body>

<div class="container auth">
  <div class="auth__wrapper">
    <div class="auth_contain">
      <div class="auth_contain__wrapper">
        <div class="auth_contain__head">
          <p>
            Registration
          </p>
        </div>

        <form class="auth_contain__form"
              action="#"
              method="post"
              novalidate>
          <div class="auth_inputs">
            <input type="text"
                   name="username"
                   class="form_input"
                   placeholder="Username">
          </div>

          <div class="auth_inputs">
            <input type="email"
                   name="user_email"
                   class="form_input"
                   placeholder="Email">
            <div class="errorHold m-0-imp"></div>
          </div>

          <div class="password_input auth_inputs">
            <input type="password"
                   name="password"
                   class="form_input"
                   placeholder="Password">

            <img src="../assets/images/icons/eye.svg"
                 class="see_password"
                 alt="Icon"
                 loading="lazy">

            <img src="../assets/images/icons/eye_crossed.svg"
                 class="d-none-imp hidden_password"
                 alt="Icon">
          </div>

          <div class="password_input auth_inputs">
            <input type="password"
                   name="password_repeat"
                   class="form_input"
                   placeholder="Repeat Password">
            <div class="errorHold m-0-imp"></div>

            <img src="../assets/images/icons/eye.svg"
                 class="see_password"
                 alt="Icon"
                 loading="lazy">

            <img src="../assets/images/icons/eye_crossed.svg"
                 class="d-none-imp hidden_password"
                 alt="Icon">
          </div>

          <button type="submit" class="auth_btn">
            Registered
          </button>
        </form>

        <p class="small_text">
          Or
          <a href="authorization.php" class="register_link">
            log in
          </a>
          if you are already registered
        </p>
      </div>
    </div>
  </div>
</div>

<script src="../assets/scripts/auth/seePassword.js"></script>
<script src="../assets/scripts/auth/emailValidator.js"></script>
<script src="../assets/scripts/auth/passwordComparison.js"></script>
<script src="../assets/scripts/auth/authValidator.js"></script>
</body>
</html>