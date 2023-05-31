<?php

if (empty($_SESSION['name'])) {
    $_SESSION['error'] = 'У Вас нет доступа!';
    header("Location: auth");
    exit;
}

$getPrezent = getPrezent();

$key = getKeyPrezent();
$keyActive = getKeyPrezentActive();

headerFUN('description', 'keywords', 'Подарок');
?>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css">
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css">
<link rel="stylesheet" href="/assets/css/cs-skin-elastic.css">
<link rel="stylesheet" href="/assets/css/lib/datatable/dataTables.bootstrap.min.css">
<link rel="stylesheet" href="/assets/css/style.css">

<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>

<!-- <script type="text/javascript" src="https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js"></script> -->
<script src="//cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.4.0/clipboard.min.js"></script>
<script src="/tinymce/tinymce.min.js"></script>
<script src="/tinymce/tinymce_init.js"></script>
</head>
<body>
<!-- Left Panel -->

<?php include_once 'page/leftPanel.php'; ?><!-- /#left-panel -->

<!-- Left Panel -->
<div class="right-panel">
    <!-- Header-->
    <header id="header" class="header">
        <div class="top-left">
            <div class="navbar-header">
                <a class="navbar-brand" href="./"><img src="Untitled.png" alt="Logo" style="width: 25px;"> Enter
                    Code</a>
                <a id="menuToggle" class="menutoggle"><i class="fa fa-bars"></i></a>
            </div>
        </div>
        <div class="top-right">
            <div class="header-menu">
                <div class="header-left">
                    <button class="search-trigger"><i class="fa fa-search"></i></button>
                    <div class="form-inline">
                        <form class="search-form">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search ..."
                                   aria-label="Search">
                            <button class="search-close" type="submit"><i class="fa fa-close"></i></button>
                        </form>
                    </div>
                </div>
                <div class="user-area dropdown float-right">
                    <a href="#" class="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true"
                       aria-expanded="false">
                        <img class="user-avatar rounded-circle" src="images/admin.jpg" alt="User Avatar">
                    </a>

                    <div class="user-menu dropdown-menu">
                        <a class="nav-link" href="account-user"><i class="fa fa-user"></i>My Profile</a>
                    </div>
                </div>
            </div>
        </div>
    </header><!-- /header -->
    <!-- Header-->
    <br>
    <div class="col-sm-12">
        <?php include_once 'lib/message.php'; ?>
    </div>
    <div class="breadcrumbs">
        <div class="breadcrumbs-inner">
            <div class="row m-0">
                <div class="col-sm-4">
                    <div class="page-header float-left">
                        <div class="page-title">
                            <h1>Продукт: <?php echo $getProductID['title'] ?></h1>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="page-header float-right">
                        <div class="page-title">
                            <ol class="breadcrumb text-right">
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="row">

            <div class="col-lg-6 ">
                <section class="card">
                    <p class="card_code" ><span class="badge badge-secondary">Ключи </span></p>
                    <?php foreach ($keyActive as $keys): ?>
                    <div class="delete_block">
                        <a href="edit-prezentFunc?id=<?= $keys['id'] ?>&key=<?= $keys['key_n']?>"

                           class="card_code" title="Редактировать" >
                            <?= $keys['key_n']?>
                        </a>
                        <a href="delete?prezentKey=<?= $keys['id'] ?>" class="delete_code" title="удалить">
                            <p class=""><i class="menu-icon fa fa-times-circle"></i></p>

                        </a>
                    </div>
                    <?php endforeach; ?>
                </section>
                <!-- Button trigger modal -->
                <a href="#popup" class="btn btn-primary">
                    добавить
                </a>
                <!-- Modal -->
                <form class="form_popup" action="key-prezentFunc" method="post">
                    <div id="popup" class="popup">
                        <a href="#header" class="popup__area"></a>
                        <div class="popup__body">
                            <div class="popup__content">
                                <a href="#" class="popup__close">X</a>
                                <div class="popup__title">Добавить ключ</div>
                                <div class="popup__text">
                                    <textarea rows="10" cols="45" class="popup_mg" type="text" name="key" placeholder="Ключ"></textarea>
                                    <input class="popup_submit" type="submit" name="popup_submit" value="добавить">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <!-- Modal -->

            </div>

        </div>
        <br>
        <div class="row">
            <div class="col-lg-12">
                <section class="card">
                    <div class="card-body text-secondary">
                        <form method="post" action="updateProductFunc" enctype="multipart/form-data">
                            <div class="form-group has-success">

                            </div>

                            <textarea class="mytextarea" name="prezent_text">
                                    <?= $getPrezent['text'] ?>
                            </textarea>
                            <div class="form-actions form-group">
                                <br>
                                <input type="submit" class="btn btn-primary btn-sm" name="add_product"
                                       value="редактирование">
                            </div>

                        </form>

                    </div>

                </section>
                <div class="col-lg-6 ">
                    <section class="card">
                        <p class="card_code" ><span class="badge badge-secondary">История</span></p>
                        <?php foreach ($key as $keys): ?>

                            <a href="edit-prezentFunc?id=<?= $keys['id'] ?>&key=<?= $keys['key_n']?>"

                               class="card_code" title="Редактировать" >
                                <?= $keys['key_n']?>
                            </a>
                        <?php endforeach; ?>
                    </section>
                </div>
            </div>


        </div>

    </div>
</div>


<!-- Right Panel -->

<!-- Scripts -->
<script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.4/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-match-height@0.7.2/dist/jquery.matchHeight.min.js"></script>
<script src="assets/js/main.js"></script>


<script src="assets/js/lib/data-table/datatables.min.js"></script>
<script src="assets/js/lib/data-table/dataTables.bootstrap.min.js"></script>
<script src="assets/js/lib/data-table/dataTables.buttons.min.js"></script>
<script src="assets/js/lib/data-table/buttons.bootstrap.min.js"></script>
<script src="assets/js/lib/data-table/jszip.min.js"></script>
<script src="assets/js/lib/data-table/vfs_fonts.js"></script>
<script src="assets/js/lib/data-table/buttons.html5.min.js"></script>
<script src="assets/js/lib/data-table/buttons.print.min.js"></script>
<script src="assets/js/lib/data-table/buttons.colVis.min.js"></script>
<script src="assets/js/init/datatables-init.js"></script>


<script type="text/javascript">
    $(document).ready(function () {
        $('#bootstrap-data-table-export').DataTable();
    });
</script>
<script>
    /*$('#checkbox').click(function(){
        if ($(this).is(':checked')){
            $('#text').show(100);
        } else {
            $('#text').hide(100);
        }
    });*/
</script>

</body>
</html>




