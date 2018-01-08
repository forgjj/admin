<?php

$cid = $_GET['cid'];

$mysql = new mysqli('localhost', 'root', '', 'wuif1709', 3306);
/* 连接数据库*/
if ($mysql->connect_errno) {
    /* 判断是否连接成功*/
    echo '数据连接失败，失败原因' . $mysql->connect_errno;
    /*  .连字符 */
    exit; /* 结束 下面代码不执行*/
};
/*  设置查询字符集 */
$mysql->query('set names utf8');
/**/
$sql = "delete from contact where cid=$cid";
/* 检验 */
/*echo $sql;
exit();*/
$mysql->query($sql);

if($mysql->affected_rows == 1/*数据多时>=1*/){
    echo  'ok';
    exit();
}else {
    echo  'error';
}


