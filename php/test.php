<?php
include '../config/connection.php';
$conn = OpenCon();
echo "Connected Successfully";
CloseCon($conn);
?>