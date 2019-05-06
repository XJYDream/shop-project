<?php
    $config = array(
        "host" => "localhost:3306",
        "dbname" => "1902",
        "username" => "root",
        "password" => ""
    );
    //跟数据库建立连接
    mysql_connect($config["host"], $config["username"], $config["password"]);
    //选择数据库
    mysql_select_db($config["dbname"]);

    //编码格式
    mysql_query("set charet 'utf8'");
    mysql_query("set character set 'utf8'");
    //汉字不乱码
?>