<?php
$cid = $_GET['cid'];
$types = $_GET['types'];
$values = $_GET['values'];

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


/*  ""识别变量*/

// $sql = "update contect set $types=‘{$values}’ where cid=$cid";
$sql = "update contact set $types='${values}' where cid=$cid";

$mysql->query($sql);

/*$mysql->insert_id;  返回新id */
if ($mysql->affected_rows == 1) {
    echo 'ok';
    exit();
}else{
    echo 'error';
}

$mysql->close();

