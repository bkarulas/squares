<?php
include '../../config/connection.php';

$api = $_GET['api'];
$id = $_GET['id'];
$aid = $_GET['aid'];

$conn = OpenCon();

switch ($api) {
    case 'deleteplayer':
        deletePlayer($conn,$id,$aid);
    break;
    default:
        echo "Error API";
}

function deletePlayer($conn,$id,$aid){
      $query = "INSERT into playerhistory (id, admin_id, name_first, name_last, email, phone, created, updated)
      SELECT id, admin_id, name_first, name_last, email, phone, created, updated FROM player
      WHERE player.id=".$id." AND admin_id=".$aid.";";
    if(mysqli_query($conn, $query)){
        echo "Records inserted to History successfully.";
        deleteTheInfo($conn,$id,$aid);
    } else{
        echo "ERROR: Could not able to execute $query. " . mysqli_error($conn);
    }
    CloseCon($conn);
}

function deleteTheInfo($conn,$id,$aid){
    $query = "DELETE FROM player WHERE id=".$id." AND admin_id=".$aid.";";

    if(mysqli_query($conn, $query)){
        echo "Records inserted to History successfully.";
    } else{
        echo "ERROR: Could not able to execute $query. " . mysqli_error($conn);
    }
}