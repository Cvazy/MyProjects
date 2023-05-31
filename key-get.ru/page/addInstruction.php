<?php

if(empty($_SESSION['name'])){
    $_SESSION['error'] = 'У Вас нет доступа!';
    header("Location: auth");
    exit;
}
headerFUN('description', 'keywords', 'Добавление инструкции');

?>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css">
<link rel="stylesheet" href="assets/css/cs-skin-elastic.css?id='1'">
<link rel="stylesheet" href="assets/css/style.css?id='1'">
<!-- <script type="text/javascript" src="https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js"></script> -->
<link href="https://cdn.jsdelivr.net/npm/chartist@0.11.0/dist/chartist.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/jqvmap@1.5.1/dist/jqvmap.min.css" rel="stylesheet">

<link href="https://cdn.jsdelivr.net/npm/weathericons@2.1.0/css/weather-icons.css" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/npm/fullcalendar@3.9.0/dist/fullcalendar.min.css" rel="stylesheet" />

<link rel=\"stylesheet\" href=\"css/style-add.css?id=12\">

<body>
<!-- Left Panel -->
<?php include_once 'page/leftPanel.php'; ?>
<!-- /#left-panel -->

<script src="//cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.4.0/clipboard.min.js"></script>
<script src="/tinymce/tinymce.min.js"></script>
<script src="/tinymce/tinymce_init.js"></script>

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
                        <a class="nav-link" href="account-user"><i class="fa fa-user"></i>My Profile</a>
                    </div>
                </div>
            </div>
        </div>
    </header><!-- /header -->
    <!-- Header-->

    <div class="col-lg-12">
        <div class="market_block_title">
            <h1 class="market_title">Добавление инструкции </h1>
        </div>

        <?php include_once 'lib/message.php'; ?>
        <div class="row">
            <div class="col-lg-12">
                <section class="card">
                    <div class="card-body text-secondary">

                        <form action="addInstructionFunc" method="post" enctype="multipart/form-data" >
                            <div class="account_product_block">
                                <div class="account_product_block_title add">Заголовок:</div>
                                <div class="col-11 ">
                                    <input type="text" id="text-input" name="title" placeholder="Название" class="form-control">
                                </div>
                            </div>

                            <div class="account_product_block">
                                <div class="account_product_block_title add">Продукт:</div>
                                <div class="col-11">
                                    <select id="product-select" name="product" class="form-control">
                                        <option value="Windows">Windows</option>
                                        <option value="Office">Office</option>
                                    </select>
                                </div>
                            </div>

                            <div class="account_product_block">
                                <div class="account_product_block_title add">Инструкция</div>
                                <div class="col-11 ">
                                    <textarea class="mytextarea" name="content"></textarea>
                                </div>
                            </div>

                            <br>

                            <div class="form-actions form-group">
                                <input type="submit" class="btn btn-primary btn-sm" name="add_instruction" value="добавить">
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>

    </div>

</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
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
<script>
    $('#checkbox').click(function(){
        if ($(this).is(':checked')){
            $('#text').show(100);
        } else {
            $('#text').hide(100);
        }
    });
</script>
</body>

