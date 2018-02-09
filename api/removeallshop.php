<?php
    //接受删除的ID
    $idarr = isset($_GET['idarr']) ? $_GET['idarr'] : null;
    // foreach($idarr as $item){
    require('connect.php');
   
    for($i=0; $i<count($idarr); $i++){

        $sqlt = "delete from car where id='$idarr[$i]'";
        $rest = $conn->query($sqlt);
    }
    
    echo $sqlt;

    // }



    //删除多余的AND
    // $len = strlen($sqlt)-4;
    // $res = substr($sqlt,0,$len);
    // echo $res;
?>