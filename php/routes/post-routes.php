<?php
include '../../config/connection.php';

$api = $_GET['api'];
$id = $_GET['id'];

$conn = OpenCon();

switch ($api) {
    case 'createnewplayer':
        $nameFirst = $_GET['f'];
        $nameLast = $_GET['l'];
        $email = $_GET['e'];
        $phone = $_GET['p'];
        postCreateNewPlayer($conn,$id,$nameFirst,$nameLast,$phone,$email);
    break;
    case 'fillasquare':
        $playId = $_GET['p'];
        $yValue = $_GET['y'];
        $xValue = $_GET['x'];
        fillTheSquare($conn,$id,$playId,$yValue,$xValue);
    break;
    default:
        echo "Error API";
}

function postCreateNewPlayer($conn,$id, $nameFirst, $nameLast, $phone, $email){
      $query = "INSERT INTO player (admin_id, name_first, name_last, email, phone) VALUES
    (".$id.",'".$nameFirst."','".$nameLast."','".$email."','".$phone."');";

    if(mysqli_query($conn, $query)){
        echo "Records inserted successfully.";
    } else{
        echo "ERROR: Could not able to execute $query. " . mysqli_error($conn);
    }

    CloseCon($conn);
}

function fillTheSquare($conn,$id,$playId,$yValue,$xValue){
    $query = "INSERT INTO square (board_id, player_id, y_value, x_value, updated) VALUES
    (".$id.",".$playId.",".$yValue.",".$xValue.", CURRENT_TIMESTAMP);";

    if(mysqli_query($conn, $query)){
        echo "Records inserted successfully.";
        echo $query;
    } else{
        echo "ERROR: Could not able to execute $query. " . mysqli_error($conn);
    }

    CloseCon($conn);
}