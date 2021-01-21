INSERT INTO `admin` (name_first, name_last, phone, email, `password`) VALUES
('Brad', 'Karulas', '416-887-3545', 'bkarulas@gmail.com', 'Password'),
('Paul', 'Taskas', '416-550-7181','ptaskas@yahoo.com', 'Tori10paul'),
('Ken', 'Karulas', '416-877-9111', 'kkarulas@hotmail.com', 'TheBeach'); 

INSERT INTO game (team_1, team_2, game_time) VALUES
(3, 2, '2021-02-07 18:30:00'),
(15, 7, '2021-02-07 18:30:00'),
(15, 19, '2021-02-07 18:30:00'),
(33, 7, '2021-02-07 18:30:00'),
(33, 19, '2021-02-07 18:30:00');


INSERT INTO board (admin_id, game_id, cost_1sq, cost_3sq, pay_q1, pay_q2, pay_q3, pay_q4) VALUES
(1,1,5,10,10,30,10,50),
(2,1,10,0,10,30,10,50),
(3,1,5,0,10,30,10,50),
(1,2,5,10,10,30,10,50),
(1,3,5,10,10,30,10,50),
(1,4,5,10,10,30,10,50),
(1,5,5,10,10,30,10,50);


INSERT INTO player (admin_id, name_first, name_last, email, phone) VALUES
(1, 'Brad', 'Karulas', 'bkarulas@gmail.com', '416-887-3545'),
(1, 'Frances', 'Karulas', 'fkarulas@yahoo.com', '416-937-8835'),
(1, 'Alexandra', 'Karulas', 'alexandrakarulas@gmail.com', ''),
(1, 'Samantha', 'Karulas', 'samanthakarulas@gmail.com', ''),
(2, 'Paul', 'Taskas', 'ptaskas@yahoo.com', '416-550-7181'),
(3, 'Ken', 'Karulas', 'kkarulas@hotmail.com', '416-877-9111');

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
