<?php
include '../../config/connection.php';

$api = $_GET['api'];
$id = $_GET['id'];

$conn = OpenCon();

switch ($api) {
    case 'editplayer':
        $nameFirst = $_GET['f'];
        $nameLast = $_GET['l'];
        $email = $_GET['e'];
        $phone = $_GET['p'];
        postCreateNewPlayer($conn,$id,$nameFirst,$nameLast,$phone,$email);
    break;
    case 'deleteplayer':
        makePlayerInactive($conn,$id);
    break;
    default:
        echo "Error API";
}

function postCreateNewPlayer($conn,$id, $nameFirst, $nameLast, $phone, $email){
    $query = "UPDATE player SET name_first = '".$nameFirst."', name_last='".$nameLast."', email='".$email."', phone='".$phone."', updated=now()
    WHERE id=".$id.";";

    if(mysqli_query($conn, $query)){
        echo "Records has been updated successfully.";
    } else{
        echo "ERROR: Could not able to execute $query. " . mysqli_error($conn);
    }

    CloseCon($conn);
}

function makePlayerInactive($conn,$id){
    $query = "UPDATE player SET active = 0 WHERE id=".$id.";";
    if(mysqli_query($conn, $query)){
        echo "Records has been updated successfully.";
    } else{
        echo "ERROR: Could not able to execute $query. " . mysqli_error($conn);
    }

    CloseCon($conn);
}