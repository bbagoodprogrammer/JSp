<?php
    //接受删除的ID
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    //链接数据库删除数据
    require('connect.php');
    //编写语句,删除对应ID的商品
    $sqlt = "delete from car where id='$id'";
    $rest = $conn->query($sqlt);

?>