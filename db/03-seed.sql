INSERT INTO `admin` (id, name_first, name_last, phone, email, `password`) VALUES
(4501, 'Brad', 'Karulas', '416-887-3545', 'bkarulas@superbowlpools.ca', 'Password'),
(8102, 'Paul', 'Taskas', '416-550-7181','ptaskas@superbowlpools.ca', 'Tori10paul'),
(1103,'Ken', 'Karulas', '416-877-9111', 'kkarulas@superbowlpools.ca', 'TheBeach'),
(1204,'Jim', 'Kelly', '123-456-7890', 'jkelly@superbowlpools.ca', 'BigJim');

INSERT INTO game (team_1, team_2, game_time) VALUES
(33, 19, '2021-02-07 18:30:00');


INSERT INTO board (id, admin_id, game_id, cost_1sq, cost_3sq, pay_q1, pay_q2, pay_q3, pay_q4) VALUES
(120,4501,1,2,5,10,30,10,50),
(220,8102,1,10,20,10,30,10,50),
(320,1103,1,5,10,10,30,10,50);



INSERT INTO player (admin_id, name_first, name_last, email, phone) VALUES
(4501, 'Brad', 'Karulas', 'bkarulas@gmail.com', '416-887-3545'),
(4501, 'Frances', 'Karulas', 'fkarulas@yahoo.com', '416-937-8835'),
(4501, 'Alexandra', 'Karulas', 'alexandrakarulas@gmail.com', ''),
(4501, 'Samantha', 'Karulas', 'samanthakarulas@gmail.com', ''),
(8102, 'Paul', 'Taskas', 'ptaskas@yahoo.com', '416-550-7181'),
(1103, 'Ken', 'Karulas', 'kkarulas@hotmail.com', '416-877-9111'),
(1204, 'Jim', 'Kelly', 'jkelly@superbowlpools.ca', '123-456-7890'),
(1204, 'Peyton', 'Manning', 'pmanning@superbowlpools.ca', '123-456-7890'),
(1204, 'Tom', 'Brady', 'tbrady@superbowlpools.ca', '123-456-7890'),
(1204, 'Drew', 'Brees', 'dbrees@superbowlpools.ca', '123-456-7890');

/*
INSERT INTO square (board_id, player_id, y_value, x_value, updated) VALUES
(1, 1, 4, 3, CURRENT_TIMESTAMP),
(1, 1, 7, 3, CURRENT_TIMESTAMP),
(1, 1, 4, 6, CURRENT_TIMESTAMP),
(1, 2, 7, 6, CURRENT_TIMESTAMP),
(1, 2, 0, 6, CURRENT_TIMESTAMP),
(1, 2, 2, 6, CURRENT_TIMESTAMP),
(1, 3, 2, 1, CURRENT_TIMESTAMP),
(1, 3, 0, 3, CURRENT_TIMESTAMP),
(1, 3, 0, 4, CURRENT_TIMESTAMP),
(1, 4, 3, 0, CURRENT_TIMESTAMP),
(1, 4, 0, 0, CURRENT_TIMESTAMP),
(1, 4, 9, 9, CURRENT_TIMESTAMP);
*/