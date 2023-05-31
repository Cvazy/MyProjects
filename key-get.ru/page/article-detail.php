<?php
headerFUN('description', 'keywords', 'Инструкция');

$productId = $_GET['id'];
$instruction = get_instruction($productId);
foreach ($instruction as $inst) {
  $result = $inst;
}

$other_states = get_all_instructions();
?>

<body>
<div class="main-container">
  <header class="header-style">
    <div class="head-left">
      <a href="../">
        <img class="logo" src="../images/Microsoft_logo_(2012).svg" alt="Microsoft logo">
      </a>
      <img class="pl-5" src="../images/small-line.png" alt="">
      <div id="nav-btn" class="burger">
        <img id="nav-btn-img" src="../images/burg-menu.png" alt="">
      </div>
      <span class="pl-40">Получить ключ</span>
    </div>

    <div id="nav" class="js-nav">
      <div class="nav-title">Настроить</div>

      <div class="nav-content">
        <a class="states" href="../articles">Инструкции</a>
        <a class="states" href="javascript:jivo_api.open()">
          <span class="pl-60">Обратиться в службу поддержки</span>
        </a>
      </div>
    </div>

    <div class="head-right">
      <a class="states" href="../articles">Инструкции</a>
      <a class="states" href="javascript:jivo_api.open()">
        <span class="pl-60">Обратиться в службу поддержки</span>
      </a>
    </div>
  </header>

  <div class="articles-container">
    <div class="detail">
      <div class="name">
        <?= $result["title"] ?>
      </div>

      <div class="mb-30"><?php echo 'От '. $result["date"] ?></div>

      <?= $result["content"] ?>
    </div>

    <div class="other">
      <div class="title-other">Другие статьи</div>

      <div class="other-items-wrapper"> <!-- Добавлен оберточный блок для элементов .other-items -->
        <?php
        foreach ($other_states as $other) {
          $productLink = '../article-detail/?id=' . $other['id']. '&timestamp=' . time();; // Предполагая, что у вас есть поле 'id' для каждой записи
          $productName = $other['title']; // Предполагая, что у вас есть поле 'name' для каждой записи

          echo '<div class="other-items"><a href="' . $productLink . '" class="states">' . '<p>' .$productName.'</p>' . '</a><img src="../images/other.png" alt=""></div>';
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
      <a href="<?php echo 'index'?>">
        <img class="logo" src="../images/Microsoft_logo_(2012).svg" alt="Microsoft logo">
      </a>
      <img class="small-line pl-5" src="../images/small-line.png" alt="">

      <br/><a class="states pl-40" href="<?php echo 'articles'?>">Статьи</a>
      <br/><span class="pl-40">Обратиться в службу поддержки</span>
    </div>
  </footer>
</div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="../assets/js/main.js"></script>
<script src="../assets/js/burger.js"></script>
<script src="../assets/js/change-height.js"></script>
<script src="//code.jivo.ru/widget/8mi3nVDESy" async></script>
