<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

require "vendor/autoload.php";
require "php-lib/ImageTool.php";


define('DIR_ROOT', '/var/www/www-root/data/www');
define('DIR_APP', $_SERVER['DOCUMENT_ROOT']);
define('DIR_IMAGE', $_SERVER['DOCUMENT_ROOT'].'/_assets/image/');

//phpinfo();
$img = new ImageTool;
$yaml = new Symfony\Component\Yaml\Yaml();
$config = $yaml->parseFile(DIR_APP.'/config.yaml');


if (is_file(getcwd().'/page.yaml')) {
  $page_config = $yaml->parseFile(getcwd().'/page.yaml');
  if($page_config) foreach ($page_config as $key => $value) {
    $config[$key] = $value;
  }
}



include(DIR_APP.'/_assets/Секции/header/block.php');


if(@$config['Секции']) foreach ($config['Секции'] as $key => $value) {
  include(DIR_APP.'/_assets/Секции/'.$key.'/block.php');
}


include(DIR_APP.'/_assets/Секции/footer/block.php');



// function render_block($block_path){
//   $file = DIR_APP.'/_assets/blocks/'.$block_path.'/block.php';
//   if (is_file($file)) {
//     include DIR_APP.'/_assets/blocks/'.$block_path.'/block.php';
//   } else {
//     echo 'block error';
//   }
  
// }


