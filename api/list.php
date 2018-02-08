<?php
    $page_no = isset($_GET['pagno']) ? $_GET['pagno'] : 1;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : 20;
    // 引入其他文件
    $kai=($page_no-1)*$qty;
    require('connect.php');//include 'connect.php'
    // $sql = "select * from goods order by id limit $kai,$qty;";
    // $res = $conn->query($sql);
    // $row = $res->fetch_all(MYSQLI_ASSOC);
    //获取数据的总长度
    $sqlt = "select * from goods where caregory='llist'";
    $rest = $conn->query($sqlt);
    $rowt = $rest->fetch_all(MYSQLI_ASSOC);
    $len = count($rowt);
    //设置返回的数组
    
    $attr = array(
        'total'=>$len,
        'goods'=>array_slice($rowt, ($page_no-1)*$qty,$qty)
        );  

    echo json_encode($attr,JSON_UNESCAPED_UNICODE);
    // echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>