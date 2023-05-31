<?php

if(empty($_SESSION['name'])){
    $_SESSION['error'] = 'У Вас нет доступа!';
    header("Location: auth");
    exit;
}

//получит gj GET
if($_GET['id_product']){
    $id_product = $_GET['id_product'];
    $getProductID = getProductID($id);
}


headerFUN('description', 'keywords', 'Генератор');
//коды которые не присвоены
$getAllCodeActive = getAllCodeActive();
$getAllCode = getAllCode();
$getAllCodeActive_enter_code = getAllCodeActive_enter_code();


$getAllCodeActive_general = getAllCodeActive_general();

?>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css">
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
                <a class="navbar-brand" href="./"><img src="Untitled.png" alt="Logo" style="width: 25px;"> Key Get</a>
                <a id="menuToggle" class="menutoggle"><i class="fa fa-bars"></i></a>
            </div>
        </div>
        <div class="top-right">
            <div class="header-menu">
                <div class="header-left">
                    <button class="search-trigger"><i class="fa fa-search"></i></button>
                    <div class="form-inline">
                        <form class="search-form">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search">
                            <button class="search-close" type="submit"><i class="fa fa-close"></i></button>
                        </form>
                    </div>
                </div>
                <div class="user-area dropdown float-right">
                    <a href="#" class="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img class="user-avatar rounded-circle" src="images/admin.jpg" alt="User Avatar">
                    </a>

                    <div class="user-menu dropdown-menu">
                        <a class="nav-link" href="#"><i class="fa fa-user"></i>My Profile</a>
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
                            <h1>Генератор:  <?php echo $getProductID['title']?></h1>
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

        <form action="account-generatorFunc2" method="post">
            <div class="col col-sm-4">
                <div class="input-group">
                    <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                    <input class="form-control" name="data" placeholder="дата 0627" required>
                </div>
            </div>
            <br>
            <div class="col col-sm-4">
                <div class="input-group">
                    <div class="input-group-addon"><i class="fa fa-asterisk"></i></div>
                    <input class="form-control" name="number" placeholder="2 цифры - код товара " required>
                </div>
            </div>
            <br>

            <br>
            <div class="col col-sm-4">
                <div class="input-group">
                    <div class="input-group-addon"><i class="fa fa-repeat"></i></div>
                    <input  name="codes_count" class="form-control" placeholder="Количество кодов" required>
                </div>
            </div>
            <br>
            <div class="col col-sm-4">
                <!-- Button trigger modal -->
                <input  name="id" type="hidden" value="<?= $id_product ?>">
                <button type="submit" id="input-generate" class="btn btn-primary">Создать</button>
            </div>
        </form>
        <br>
        <div class="col-lg-8">
            <h3> Не активированные коды</h3>
            <br>
            дубли <?= $getAllCodeActive_general ?>
            <div class="card_body_flex">

                <div class="card-body ">

                    <table  class="table table-hover">
                        <!--<table id="bootstrap-data" class="table table-hover">-->
                        <thead  >
                        <tr>
                            <th class="sorting_desc">История Key Get (Не активированные)</th>
                            <th style="display: none">Дата</th>
                            <th>удалить</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($getAllCodeActive as $codeActives): ?>
                            <tr>
                                <td>
                                    <?= $codeActives['code'] ?>
                                </td>
                                <td style="display: none">
                                    <?php
                                    $data = $codeActives['data'];
                                    echo date('d.m.Y H:i', $data);
                                    ?>
                                </td>
                                <td>
                                    <a href="delete?generator=<?= $codeActives['id'] ?>" class="delete_block_gen" title="удалить">
                                        <p class="delete_item delete_block_link"><i class="menu-icon fa fa-times-circle"></i></p>

                                    </a>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
                <div class="card-body ">
                    <table  class="table table-hover">
                        <!--<table id="bootstrap-data" class="table table-hover">-->
                        <thead  >
                        <tr>
                            <th class="sorting_desc">История Enter Code (Не активированные)</th>
                            <th style="display: none">Дата</th>

                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($getAllCodeActive_enter_code as $codeActives): ?>
                            <tr>
                                <td>
                                    <?= $codeActives['code'] ?>
                                </td>
                                <td style="display: none">
                                    <?php
                                    $data = $codeActives['data'];
                                    echo date('d.m.Y H:i', $data);
                                    ?>
                                </td>

                            </tr>
                        <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>


        <div class="col-lg-8">
            <h3> История</h3>
            <br>

            <div class="card-body">
                <table id="bootstrap-data-table" class="table table-hover">
                <!--<table id="bootstrap-data" class="table table-hover">-->
                    <thead  >
                    <tr>
                        <th class="sorting_desc">История (активированные коды)</th>
                        <th style="display: none">Дата</th>
                        <th>удалить</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php foreach ($getAllCode as $codeActives): ?>
                        <tr>
                            <td>
                                <?= $codeActives['code'] ?>
                            </td>
                            <td style="display: none">
                                <?php

                                $data = $codeActives['data'];
                                echo date('d.m.Y H:i', $data);

                                ?>

                            </td>
                            <td>
                                <a href="delete?generator=<?= $codeActives['id'] ?>" class="delete_block_gen" title="удалить">
                                    <p class="delete_item delete_block_link"><i class="menu-icon fa fa-times-circle"></i></p>

                                </a>
                            </td>

                        </tr>
                    <?php endforeach; ?>
                    </tbody>
                </table>
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

    $(document).ready(function() {
        $('#bootstrap-data-table-export').DataTable();
    } );
</script>



</body>
</html>




