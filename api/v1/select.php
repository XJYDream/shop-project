<?php 
    include("./config.php");
    $indexPage = $_GET["indexPage"];
    $count = $_GET["count"];

    $sqlAll = "select * from shop";
    $resAll = mysql_query($sqlAll);
    $numAll = mysql_num_rows($resAll);
    $totalPage = ceil($numAll / $count);
    //limit 语句 分页
    // $sql = "select * from shop limit ($indexPage-1)*$count,$count";
    //($indexPage-1)*$count 字符串的故事不会被解析为结果值
    $start = ($indexPage-1)*$count;
    $sql = "select * from shop limit $start,$count";

    $res = mysql_query($sql);

    $shop = array();

    while($row = mysql_fetch_assoc($res)){
        array_push($shop, $row);
    }

    //返回接口文档的格式数据
    $json = array(
        "res_code" => 1,
        "res_message" => "查询成功",
        "res_body" => array(
            "data" => $shop,
            "totalPage" => $totalPage
        )
    );
    echo json_encode($json);
    mysql_close();
?>