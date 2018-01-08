<?php

$mysql = new mysqli('localhost', 'root', '', 'wuif1709', 3306);
/* 连接数据库*/
if ($mysql->connect_errno) {
    /* 判断是否连接成功*/
    echo '数据连接失败，失败原因' . $mysql->connect_errno;
    /*  .连字符 */
    exit; /* 结束 下面代码不执行*/
};

$mysql->query('set names utf8');
$sql = "select * from contact";
$data = $mysql->query($sql)->fetch_all(MYSQLI_ASSOC);
/*  整体 索引数组 包含内联数组 */
/*删除  数据*/

echo json_encode($data);
/* 返回json数据*/
$mysql->close();/* 关掉数据库*/



