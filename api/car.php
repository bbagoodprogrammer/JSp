<?php
    require('connect.php');
    $sqlt = "select * from car";
    $rest = $conn->query($sqlt);
    $rowt = $rest->fetch_all(MYSQLI_ASSOC);
    echo json_encode($rowt,JSON_UNESCAPED_UNICODE);



?>