<?php
include '../../config/connection.php';

$api = $_GET['api'];
$id = $_GET['id'];
$info = array();

$conn = OpenCon();

switch ($api) {
    case 'boardinfo':
        getBoardInfo($conn,$info, $id);
    break;
    case 'boardadmin':
        getBoardAdmin($conn,$info, $id);
    break;
    case 'userid':
        $eid = $_GET['eid'];
        getUserId($conn,$info,$id,$eid);
    break;
    case 'takensquares':
        getTakenSquares($conn,$info, $id);
    break;
    case 'adminallboard':
        getAdminAllBoard($conn,$info, $id);
    break;
    case 'adminoneboard':
        $bid = $_GET['bid'];
        getAdminOneBoard($conn,$info, $id, $bid);
    break;
    case 'playersforadmin':
        getAllPlayersForADMIN($conn,$info, $id);
    break;
    case 'oneplayersinfo':
        $aid = $_GET['aid'];
        getOnePlayerInfo($conn,$info, $id, $aid);
    break;
    default:
        echo "HERE _ Error API";
}

//GENERAL BOARD INFO
function getBoardInfo($conn,$info, $id){
    $query = "SELECT n1.full as team1_full, n1.name as team1_name, n1.short as team1_short, n2.full as team2_full, n2.name as team2_name, n2.short as team2_short, 
    g.game_time, a.name_first, a.name_last, a.phone, a.email, cost_1sq, cost_3sq, pay_q1, pay_q2, pay_q3, pay_q4
    FROM board b
        INNER JOIN admin a ON a.id=b.admin_id
        INNER JOIN game g ON g.id=b.game_id
        JOIN nfl_team n1 on n1.id = g.team_1
        JOIN nfl_team n2 on n2.id = g.team_2
        WHERE b.id=".$id.";";
    $result = mysqli_query($conn, $query);

    while ($row = $result->fetch_assoc()) {
        array_push($info,
            array(
                "team1Full"=>$row['team1_full'],
                "team1Name"=>$row['team1_name'],
                "team1Short"=>$row['team1_short'],
                "team2Full"=>$row['team2_full'],
                "team2Name"=>$row['team2_name'],
                "team2Short"=>$row['team2_short'],
                "gameTime"=>$row['game_time'],
                "adminFirst"=>$row['name_first'],
                "adminLast"=>$row['name_last'],
                "adminPhone"=>$row['phone'],
                "adminEmail"=>$row['email'],
                "cost1Sq"=>$row['cost_1sq'],
                "cost3Sq"=>$row['cost_3sq'],
                "payQ1"=>$row['pay_q1'],
                "payQ2"=>$row['pay_q2'],
                "payQ3"=>$row['pay_q3'],
                "payQ4"=>$row['pay_q4']
            ));
    }
    echo json_encode($info);
    CloseCon($conn);
}

function getBoardAdmin($conn,$info, $id){
    $query = "SELECT admin_id FROM board WHERE board.id=".$id.";";
    $result = mysqli_query($conn, $query);
    while ($row = $result->fetch_assoc()) {
        array_push($info,
            array(
                "adminId"=>$row['admin_id']
            ));
    }
    echo json_encode($info);
    CloseCon($conn);
}

function getUserId($conn,$info,$id,$eid){
    $query = "SELECT id FROM player WHERE admin_id=".$id." and email='".$eid."';";
    $result = mysqli_query($conn, $query);
    while ($row = $result->fetch_assoc()) {
        array_push($info,
            array(
                "userId"=>$row['id']
            ));
    }
    echo json_encode($info);
    CloseCon($conn);
}

function getTakenSquares($conn,$info, $id){
    $query = "SELECT p.name_first, p.name_last, y_value, x_value, win
    FROM square s
    INNER JOIN player p ON p.id=s.player_id
    WHERE board_id=".$id." 
    ORDER BY y_value, x_value;";
    $result = mysqli_query($conn, $query);

    while ($row = $result->fetch_assoc()) {
        array_push($info,
            array(
                "nameFirst"=>$row['name_first'],
                "nameLast"=>$row['name_last'],
                "valueY"=>$row['y_value'],
                "valueX"=>$row['x_value'],
                "win"=>$row['win']
            ));
    }
    echo json_encode($info);
    CloseCon($conn);
}

//ADMIN INFO

function getAdminAllBoard($conn,$info, $id){
    $query = "SELECT b.id, a.name_first, a.name_last, g.id as gameId, n1.name as team1, n2.name as team2, g.game_time, cost_1sq, cost_3sq, pay_q1, pay_q2, pay_q3, pay_q4, b.created 
    FROM board b
    INNER JOIN admin a ON a.id=b.admin_id
    INNER JOIN game g on g.id=b.game_id
    JOIN nfl_team n1 on n1.id = g.team_1
    JOIN nfl_team n2 on n2.id = g.team_2
    WHERE b.admin_id=".$id."
    order by g.game_time;";
    $result = mysqli_query($conn, $query);

    while ($row = $result->fetch_assoc()) {
        array_push($info,
            array(
                "boardId"=>$row['id'],
                "adminFirst"=>$row['name_first'],
                "adminLast"=>$row['name_last'],
                "gameID"=>$row['gameId'],
                "team1"=>$row['team1'],
                "team2"=>$row['team2'],
                "gameTime"=>$row['game_time'],
                "cost1Sq"=>$row['cost_1sq'],
                "cost3Sq"=>$row['cost_3sq'],
                "payQ1"=>$row['pay_q1'],
                "payQ2"=>$row['pay_q2'],
                "payQ3"=>$row['pay_q3'],
                "payQ4"=>$row['pay_q4'],
                "created"=>$row['created']
            ));
    }
    echo json_encode($info);
    CloseCon($conn);
}

function getAllPlayersForADMIN($conn,$info, $id){
    $query = "SELECT s.player_id, COUNT(*) AS `squares`, p.name_first, p.name_last, p.email, p.phone, p.active, p.created, p.updated
    FROM square s 
    INNER JOIN player p ON p.id = s.player_id
    WHERE p.active = 1 AND p.admin_id = ".$id."
    GROUP BY s.player_id
    ORDER BY s.player_id;";
     $result = mysqli_query($conn, $query);

    while ($row = $result->fetch_assoc()) {
        array_push($info,
            array(
                "id"=>$row['player_id'],
                "squares"=>$row['squares'],
                "nameFirst"=>$row['name_first'],
                "nameLast"=>$row['name_last'],
                "email"=>$row['email'],
                "phone"=>$row['phone'],
                "active"=>$row['active'],
                "created"=>$row['created'],
                "updated"=>$row['updated']
        ));
    }
    echo json_encode($info);
    CloseCon($conn);
}
    

function getOnePlayerInfo($conn,$info, $id, $aid){
    $query = "SELECT * FROM player WHERE id = ".$id." AND admin_id = ".$aid.";";
    $result = mysqli_query($conn, $query);

    while ($row = $result->fetch_assoc()) {
        array_push($info,
            array(
                "id"=>$row['id'],
                "nameFirst"=>$row['name_first'],
                "nameLast"=>$row['name_last'],
                "email"=>$row['email'],
                "phone"=>$row['phone'],
                "created"=>$row['created'],
                "updated"=>$row['updated']
            ));
    }
    echo json_encode($info);
    CloseCon($conn);
}