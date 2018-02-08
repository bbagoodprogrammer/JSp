<?php
    //获取数据
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    $imgs = isset($_GET['imgs']) ? $_GET['imgs'] : null;
    $name = isset($_GET['name']) ? $_GET['name'] : null;
    $price =isset($_GET['price']) ? $_GET['price'] : null;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : null;
    $color = isset($_GET['color']) ? $_GET['color'] : null;
    $size = isset($_GET['size']) ? $_GET['size'] : null;
    $xiaoji = isset($_GET['xiaoji']) ? $_GET['xiaoji'] : null;
    //链接数据库
    require('connect.php');
    $sqlt = "insert into car (id,name,imgs,price,color,size,qty,xiaoji) values ('$id','$name','$imgs','$price','$color','$size','$qty','$xiaoji')";
    echo $sqlt;
    $rest = $conn->query($sqlt);
    // $rowt = $rest->fetch_all(MYSQLI_ASSOC);


?>