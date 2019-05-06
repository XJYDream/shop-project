<?php 
    include("./config.php");
    //插入 先获取数据
    $name = $_GET["name"];
    $price = $_GET["price"];
    $num = $_GET["num"];

    $sql = "insert into shop (name, price, num) values('$name', '$price', '$num') ";
    //增删改查 查返回resource  其余布尔值
    $res = mysql_query($sql);

    //返回给前端的是insert成功与否及提示信息
    //echo 编译输出语句到html  具体在查
    if($res){
        echo json_encode(array(
            "res_code" => 1,
            "res_message" => "添加成功"
        ));
    }else{
        echo json_encode(array(
            "res_code" => 0,
            "res_message" => "添加商品失败"
        ));
    };
    
?>