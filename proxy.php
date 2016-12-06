<?php
header("Content-type: text/avascript; charset=utf-8");
$c = $_GET['a'];
$s = file_get_contents($c );
header("Access-Control-Allow-Origin: *");
echo $_GET['callback'] . '(' . $s . ');';
?>

