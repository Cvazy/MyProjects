<aside id="left-panel" class="left-panel">
    <nav class="navbar navbar-expand-sm navbar-default">
        <div id="main-menu" class="main-menu collapse navbar-collapse">
            <ul class="nav navbar-nav">

                <li class="menu-title">ADMIN</li><!-- /.menu-title -->

                <li class="<?php if($url === '/account_new' ) echo 'bold';?>">
                    <a href="account_new"> <i class="menu-icon fa fa-home"></i>Главная</a>
                </li>
                <li class="<?php if($url === '/addProduct' ) echo 'bold';?>">
                    <a href="addProduct"> <i class="menu-icon fa fa-plus-square"></i>Добавить товар </a>
                </li>
                <li class="<?php if($url === '/account-addState' ) echo 'bold';?>">
                    <a href="addInstruction"> <i class="menu-icon fa fa-plus-square"></i>Добавить статью </a>
                </li>
                <li class="<?php if($url === '/account-generator' ) echo 'bold';?>">
                    <a href="account-generator"> <i class="menu-icon fa fa-refresh"></i>Генератор</a>
                </li>
                <li class="<?php if($url === '/account-user' ) echo 'bold';?>">
                    <a href="account-user"> <i class="menu-icon fa fa-user"></i>Аккаунт</a>
                </li>
                <li class="<?php if($url === '/oldBase' ) echo 'bold';?>">
                    <a href="oldBase"> <i class="menu-icon fa fa-user"></i>Старая база</a>
                </li>
                <li class="<?php if($url === '/client' ) echo 'bold';?>">
                    <a href="client"> <i class="menu-icon fa fa-envelope"></i>Email</a>
                </li>

                <li class="<?php if($url === '/logout' ) echo 'bold';?>">
                    <a href="logout"> <i class="menu-icon fa fa-suitcase"></i>Выход</a>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </nav>
</aside>