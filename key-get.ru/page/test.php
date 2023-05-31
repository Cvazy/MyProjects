<?php
 $data= time();

echo $data;
//сегодня
$data_baza1 = '1658422620';
//вчера
$data_baza2 = 1658422620 - 86400;



if($data > $data_baza2){
    echo 'да больше';
}