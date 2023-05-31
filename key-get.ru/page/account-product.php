<?php
if(empty($_SESSION['name'])){
    $_SESSION['error'] = 'У Вас нет доступа!';
    header("Location: auth");
    exit;
}
headerFUN('description', 'keywords', 'Все продукты');
//получить все продукты
$getProduct = getProduct();
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

   <script type="text/javascript" src="https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js"></script>

</head>
<body>
<!-- Left Panel -->
<?php include_once 'page/leftPanel.php'; ?><!-- /#left-panel -->
<!-- Left Panel -->
<!-- Right Panel -->
<div id="right-panel" class="right-panel">
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
                            <input class="search form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search">
                            <button class="search-close" type="submit"><i class="fa fa-close"></i></button>
                        </form>
                    </div>
                </div>
                <div class="user-area dropdown float-right">
                    <a href="#" class="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
    <div class="breadcrumbs">


<div class="form-actions form-group">
    <a class="btn btn-primary btn-sm" href="https://enter-code.ru/account_new" >Enter Code</a>
    <a class="btn btn-primary btn-sm" href="https://key-get.ru/account_new" >Key Get</a>

</div>



    </div>
    <div class="col-sm-12">
        <?php include_once 'lib/message.php'; ?>
    </div>
        <div class="content">
            <div class="animated fadeIn">
                <div class="row">

                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <strong class="card-title">Товары</strong>
                            </div>
                            <div class="card-body">
                                <div id="searchresult">
                                <table id="bootstrap-data-table" class="table table-striped table-bordered">
                                    <thead>
                                    <tr>
                                        <th>Название</th>
                                        <th>Коды (не активированные)</th>
                                        <th>Ключей</th>
                                        <th>Продаж за три дня</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <?php foreach($getProduct as $item):?>
                                    <tr>
                                        <!--Название-->
                                        <td><a href="account-edit?id=<?= $item['id'] ?>"><?= $item['title'] ?></a></td>
                                        <!--Коды (не активированные)-->
                                        <td>
                                        <?php
                                        $itemID = $item['id'];
                                        $key_column = countCodeActivated('code_key_get', 'id_product', $itemID );
                                        echo $key_column;

                                        ?>
                                        </td>
                                        <!--Ключей-->
                                        <td>
                                        <?php
                                        $itemID = $item['id'];
                                        $key_column = countItem('key', 'id_product', $itemID );
                                        echo $key_column;

                                        ?>
                                        </td>
                                        <!--Продаж за три дня-->
                                        <td>
                                        <?php
                                        $itemID = $item['id'];
                                        $data = time() - 259200;
                                        $count = null;

                                        $key_column = CountertItem($itemID);

                                        foreach ($key_column as $item){
                                            if($item['date'] > $data ){
                                                $count = $count + 1;
                                            }
                                        }


                                        if($count) echo $count;
                                        else echo '0';
                                        ?>
                                        </td>
                                    </tr>
                                    <?php endforeach; ?>
                                    </tbody>
                                </table>
                                </div>
                            </div>

                        </div>


                    </div>


                </div>
            </div><!-- .animated -->
        </div><!-- .content -->


        <div class="clearfix"></div>
        <footer class="site-footer">
            <div class="footer-inner bg-white">
                <div class="row">
                    <div class="col-sm-6">
                        <a href="prezent">ПОДАРОК</a>
                    </div>
                    <div class="col-sm-6">
                        <?php
                        $key_prezent = CounterPrezent();
                        echo 'Количество кодов, активированных за последние 3 дня - '.$key_prezent['sum'].'шт';
                        ?>
                    </div>





                </div>
            </div>
        </footer>
        <br>

    <footer class="site-footer">
        <div class="footer-inner bg-white">
            <div class="row">
                <div class="col-sm-6">
                    Copyright &copy; 2018 Ela Admin
                </div>
                <div class="col-sm-6 text-right">
                    Designed by <a href="https://colorlib.com">Colorlib</a>
                </div>

            </div>
        </div>
    </footer>

</div><!-- /#right-panel -->

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
    $(document).ready(function() {
        $('#bootstrap2').DataTable();
    } );



</script>
<script src="main.js"></script>

</body>
</html>
