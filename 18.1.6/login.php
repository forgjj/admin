<?php
/*var_dump($_POST);*/
$user = $_POST['username'];
$pass = $_POST['password'];

$mysql = new mysqli('localhost','root','','wuif1709',3306);
/*  获取数据库  */
$mysql->query('set name utf8');
/* 设置查询字符集 */
$sql = "select * from manger";
/* 读取manger表里的信息  查询    用双引号 */
$result = $mysql->query($sql)->fetch_all(MYSQLI_ASSOC);
/*   由对象转换为数组    二维数组 */
for($i=0;$i<count($result);$i++){
    /* 函数count($result)  相当于length*/
    if($result[$i]['username'] == $user && $result[$i]['password'] == $pass){
        echo'ok';
        exit;
    }
};
echo'error';
/*var_dump($result);*/

