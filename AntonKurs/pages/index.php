<?php

//Открываем сессию
session_start();

//Получаем id пользователя из сессии
$user_id = $_SESSION['user_id'];

// Если в сессии нет id пользователя, перенаправляем его на страницу авторизации
if (!isset($user_id)) {
  header("Location: authorization.php");
  exit();
}

//Инициализируем глобальную переменную БД
global $conn;

//Подключаем файл с подключением к БД
include '../config.php';

//Подготовка SQL запроса на получение данных пользователя
$sql_user = "SELECT * FROM users WHERE id = ?";
$stmt_user = $conn->prepare($sql_user);
//В таких строчках 'i' означает, что переменная должна быть целым числом
$stmt_user->bind_param('i', $user_id);

//Выполнение подготовленного запроса
$stmt_user->execute();

// Получение результатов запроса пользователя
$user_data = $stmt_user->get_result()->fetch_assoc();

//Функция для добавления новой заметки
function addNote($title, $deadline, $category, $description, $link, $user_id, $note_type) {
  global $conn;
  // SQL запрос для добавления новой записи в таблицу "notes"
  $sql = "INSERT INTO notes (user_id, note_type, title, deadline, description, link, category) VALUES (?, ?, ?, ?, ?, ?, ?)";
  // Подготавливаем запрос к базе данных
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('issssss', $user_id, $note_type, $title, $deadline, $description, $link, $category);
  // Выполняем запрос
  if ($stmt->execute() === TRUE) {
    // Закрываем подготовленный запрос
    $stmt->close();
    return true;
  } else {
    return false;
  }
}

// Проверяем, была ли отправлена форма для добавления заметки
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit_add_note'])) {
  // Получаем данные из формы
  $note_title = $_POST['note_title'];
  $note_deadline = $_POST['note_deadline'];
  $note_category = $_POST['note_category'];
  $note_description = $_POST['note_description'];
  $note_link = $_POST['note_link'];
  $user_id = $_SESSION['user_id'];
  $note_type = "todo";

  addNote($note_title, $note_deadline, $note_category, $note_description, $note_link, $user_id, $note_type);
}

// Инициализируем переменные для каждого типа заметок
$todo_notes = array();
$doing_notes = array();
$done_notes = array();

//SQL запрос на получение заметок
$sql_notes = "SELECT * FROM notes WHERE user_id = ?";

//Подготовка SQL запроса на получение данных о заметках пользователя
$stmt = $conn->prepare($sql_notes);
$stmt->bind_param('i', $user_id);

//Выполнение подготовленного запроса
$stmt->execute();
$result = $stmt->get_result();

// Обходим результаты запроса заметок
while ($row = $result->fetch_assoc()) {
  // Проверяем значение столбца note_type
  switch ($row['note_type']) {
    case 'todo':
      $todo_notes[] = $row;
      break;
    case 'doing':
      $doing_notes[] = $row;
      break;
    case 'done':
      $done_notes[] = $row;
      break;
  }
}

// Закрытие соединения с базой данных
$conn->close();

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
  <link href="../assets/styles/css/dragula.css" rel="stylesheet">
  <link rel="icon" href="../assets/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
  <title>Todo Project - Tasks</title>
</head>
<body>

<div class="d-none-imp blackout add_new_note">
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__head">
        <p>
          Add new note
        </p>

        <img class="modalClose"
             src="../assets/images/icons/close_circle.svg"
             alt="Close"
             loading="lazy">
      </div>

      <form class="modal__form"
            method="post">
        <input type="text"
               id="noteTitle"
               name="note_title"
               class="form_input"
               placeholder="Note title">

        <div class="add_note_row">
          <input type="text"
                 name="note_deadline"
                 class="form_input"
                 placeholder="Deadline">

          <input type="text"
                 name="note_category"
                 class="form_input"
                 placeholder="Category">
        </div>

        <textarea class="form_input"
                  name="note_description"
                  placeholder="Description"></textarea>

        <input type="text"
               name="note_link"
               class="form_input"
               placeholder="Link">

        <button type="submit"
                class="submit_btn"
                name="submit_add_note">
          Add note
        </button>
      </form>
    </div>
  </div>
</div>

<div class="d-none-imp blackout delete_all_notes">
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__head">
        <p>
          Delete all tasks?
        </p>

        <img class="modalClose"
             src="../assets/images/icons/close_circle.svg"
             alt="Close"
             loading="lazy">
      </div>

      <div class="buttons_row">
        <button class="modalClose btn_cancel">
          Cancel
        </button>

        <button class="btn_delete_all"
                name="submit_delete_all_notes">
          Delete
        </button>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <div class="container__wrapper">
    <div class="menu_mobile">
      <button type="button" class="menu_mobile__item" id="burger">
        <img src="../assets/images/icons/burger.svg"
             alt="Icon"
             loading="lazy">
      </button>

      <button type="button" class="menu_mobile__item">
        <img src="../assets/images/icons/exit.svg"
             alt="Exit"
             loading="lazy">
      </button>
    </div>

    <div class="menu">
      <div class="menu__wrapper">
        <div class="menu_selector">
          <div class="menu_selector__user">
            <div class="user_logo"></div>

            <p class="menu_text menu_text_active">
              <?php echo $user_data["username"]?>
            </p>
          </div>

          <div class="menu_selector__image">
            <img id="arrow" src="../assets/images/icons/arrow.svg"
                 alt="Arrow"
                 loading="lazy">
            <img id="close" src="../assets/images/icons/close.svg"
                 alt="Close"
                 loading="lazy">
          </div>
        </div>

        <div class="menu_list">
          <div class="menu_list__top max-h-menu">
            <div class="menu__item menu__item-active">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6C4 4.89543 4.89543 4 6 4H8C9.10457 4 10 4.89543 10 6V8C10 9.10457 9.10457 10 8 10H6C4.89543 10 4 9.10457 4 8V6Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 6C14 4.89543 14.8954 4 16 4H18C19.1046 4 20 4.89543 20 6V8C20 9.10457 19.1046 10 18 10H16C14.8954 10 14 9.10457 14 8V6Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 16C4 14.8954 4.89543 14 6 14H8C9.10457 14 10 14.8954 10 16V18C10 19.1046 9.10457 20 8 20H6C4.89543 20 4 19.1046 4 18V16Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 16C14 14.8954 14.8954 14 16 14H18C19.1046 14 20 14.8954 20 16V18C20 19.1046 19.1046 20 18 20H16C14.8954 20 14 19.1046 14 18V16Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <p class="menu_text">
                Tasks
              </p>
            </div>

            <div class="menu__item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <p class="menu_text">
                Notifications
              </p>
            </div>

            <div class="menu__item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <p class="menu_text">
                Analytics
              </p>
            </div>

            <div class="menu__item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <p class="menu_text">
                Profile
              </p>
            </div>
          </div>

          <div class="menu_list__bottom">
            <div class="menu__item">
              <img src="../assets/images/icons/settings.svg"
                   alt="Settings"
                   loading="lazy">

              <p class="menu_text text-bold">
                Settings
              </p>
            </div>

            <a href="../lib/logOut.php" class="exit">
              <img src="../assets/images/icons/exit.svg"
                   alt="Exit"
                   loading="lazy">
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="todo">
      <div class="notes_action">
        <div class="notes_action__wrapper">
          <div class="notes_action__item" id="addNote">
            <p class="notes_action__text text_add">
              Add new note
            </p>

            <img src="../assets/images/icons/add.svg"
                 alt="Add"
                 loading="lazy">
          </div>

          <div class="notes_action__item" id="removeAll">
            <p class="notes_action__text text_remove">
              Delete all notes
            </p>

            <img src="../assets/images/icons/delete.svg"
                 alt="Delete"
                 loading="lazy">
          </div>
        </div>
      </div>

      <div class="todo__wrapper">
        <div class="todo_column">
          <p class="todo_column__title">
            TO DO
          </p>

          <div class="todo_column__list todo_list_1"
               data-list-type="todo">
            <?php foreach ($todo_notes as $note): ?>
              <div class="todo_item" data-note-id="<?php echo  $note['id']; ?>">
                <div class="todo_item__wrapper">
                  <div class="todo_item__block">
                    <p class="todo_item__title">
                      <?php echo $note['title']; ?>
                    </p>

                    <?php if (!empty($note['deadline'])): ?>
                      <p class="todo_item__deadline">
                        <?php echo $note['deadline']; ?>
                      </p>
                    <?php endif; ?>
                  </div>

                  <div class="todo_item__block">
                    <?php if (!empty($note['description'])): ?>
                      <p class="todo_item__description">
                        <?php echo $note['description']; ?>
                      </p>
                    <?php endif; ?>

                    <?php if (!empty($note['link'])): ?>
                      <div class="attached_links">
                        <a href="<?php echo $note['link']; ?>"
                           class="attached_links__item"
                           target="_blank">
                          <img src="../assets/images/icons/link.svg"
                               alt="Icon"
                               loading="lazy">

                          <p class="added_link">
                            <?php echo $note['link']; ?>
                          </p>
                        </a>
                      </div>
                    <?php endif; ?>
                  </div>

                  <div class="todo_item__bottom">
                    <?php if (!empty($note['category'])): ?>
                      <div class="todo_category">
                        <?php echo $note['category']; ?>
                      </div>
                    <?php endif; ?>

                    <button type="button"
                            class="todo_remove"
                            data-remove-id="<?php echo $note['id']; ?>">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            <?php endforeach; ?>
          </div>
        </div>

        <div class="todo_column">
          <p class="todo_column__title">
            DOING
          </p>

          <div class="todo_column__list todo_list_2"
               data-list-type="doing">
            <?php foreach ($doing_notes as $note): ?>
              <div class="todo_item" data-note-id="<?php echo $note['id']; ?>">
                <div class="todo_item__wrapper">
                  <div class="todo_item__block">
                    <p class="todo_item__title">
                      <?php echo $note['title']; ?>
                    </p>

                    <?php if (!empty($note['deadline'])): ?>
                      <p class="todo_item__deadline">
                        <?php echo $note['deadline']; ?>
                      </p>
                    <?php endif; ?>
                  </div>

                  <div class="todo_item__block">
                    <?php if (!empty($note['description'])): ?>
                      <p class="todo_item__description">
                        <?php echo $note['description']; ?>
                      </p>
                    <?php endif; ?>

                    <?php if (!empty($note['link'])): ?>
                      <div class="attached_links">
                        <a href="<?php echo $note['link']; ?>"
                           class="attached_links__item"
                           target="_blank">
                          <img src="../assets/images/icons/link.svg"
                               alt="Icon"
                               loading="lazy">

                          <p class="added_link">
                            <?php echo $note['link']; ?>
                          </p>
                        </a>
                      </div>
                    <?php endif; ?>
                  </div>

                  <div class="todo_item__bottom">
                    <?php if (!empty($note['category'])): ?>
                      <div class="todo_category">
                        <?php echo $note['category']; ?>
                      </div>
                    <?php endif; ?>

                    <button type="button"
                            class="todo_remove"
                            data-remove-id="<?php echo $note['id']; ?>">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            <?php endforeach; ?>
          </div>
        </div>

        <div class="todo_column">
          <p class="todo_column__title">
            DONE
          </p>

          <div class="todo_column__list todo_list_3"
               data-list-type="done">
            <?php foreach ($done_notes as $note): ?>
              <div class="todo_item" data-note-id="<?php echo $note['id']; ?>">
                <div class="todo_item__wrapper">
                  <div class="todo_item__block">
                    <p class="todo_item__title">
                      <?php echo $note['title']; ?>
                    </p>

                    <?php if (!empty($note['deadline'])): ?>
                      <p class="todo_item__deadline">
                        <?php echo $note['deadline']; ?>
                      </p>
                    <?php endif; ?>
                  </div>

                  <div class="todo_item__block">
                    <?php if (!empty($note['description'])): ?>
                      <p class="todo_item__description">
                        <?php echo $note['description']; ?>
                      </p>
                    <?php endif; ?>

                    <?php if (!empty($note['link'])): ?>
                      <div class="attached_links">
                        <a href="<?php echo $note['link']; ?>"
                           class="attached_links__item"
                           target="_blank">
                          <img src="../assets/images/icons/link.svg"
                               alt="Icon"
                               loading="lazy">

                          <p class="added_link">
                            <?php echo $note['link']; ?>
                          </p>
                        </a>
                      </div>
                    <?php endif; ?>
                  </div>

                  <div class="todo_item__bottom">
                    <?php if (!empty($note['category'])): ?>
                      <div class="todo_category">
                        <?php echo $note['category']; ?>
                      </div>
                    <?php endif; ?>

                    <button type="button"
                            class="todo_remove"
                            data-remove-id="<?php echo $note['id']; ?>">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script src="../assets/dragula-master/dist/dragula.min.js"></script>
<script src="../assets/scripts/menu.js"></script>
<script src="../assets/scripts/modalsClose.js"></script>
<script src="../assets/scripts/addNote.js"></script>
<script src="../assets/scripts/deleteNotes.js"></script>
<script src="../assets/scripts/dragItems.js"></script>
</body>
</html>