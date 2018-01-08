<?php
//链接数据库
$mysql = new mysqli('localhost', 'root', '', 'wuif1709', 3306);
//判断是否链接成功
if ($mysql->connect_errno) {
    echo '数据库链接失败,失败原因是:' . $mysql->connect_errno;
    exit();
}
//设置查询字符集
$mysql->query('set names utf8');
