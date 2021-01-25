SELECT * FROM nfl_team;
SELECT * FROM admin;
SELECT * FROM game;
SELECT * FROM board;
SELECT * FROM player;
SELECT * FROM square;
SELECT * FROM playerhistory;


SELECT id FROM player WHERE admin_id=1 AND email='bkaurlas@gmail.com';
SELECT id FROM player WHERE admin_id=1 AND email='bkarulas@gmail.com';

SELECT admin_id FROM board where id=1;
UPDATE player SET active = 1 WHERE id=1;

INSERT INTO square (board_id, player_id, y_value, x_value, updated) VALUES
    (1,4,2,3, CURRENT_TIMESTAMP);
    
UPDATE nfl_team SET name='AFC' WHERE id=2;

/*UPDATE USER*/
UPDATE player SET name_first = 'TheBRAD', name_last='TheKarulas', email='theEmail@email.com', phone='55378008', updated=now()
WHERE id=6;

/*OWNING*/
SELECT player_id as player, COUNT(*) AS `squares` FROM square WHERE board_id = 120 GROUP BY player_id;

/*INSERT INTO HISTORY AND DELETE*/
/*INSERT*/
INSERT into playerhistory (id, admin_id, name_first, name_last, email, phone, created, updated)
SELECT id, admin_id, name_first, name_last, email, phone, created, updated FROM player
WHERE player.id=5 AND admin_id=1;
/*DELETE*/
DELETE FROM player WHERE id=5 AND admin_id=1;

/*EDIT PLAYER*/
UPDATE player SET name_first = 'TheBRAD', name_last='TheKarulas', email='theEmail@email.com', phone='55378008', updated=now()
WHERE id=12;

SELECT * FROM player WHERE id=1 AND admin_id=1;

/*SELECT ALL PLAYERS WITH ADMIN ID*/
SELECT * FROM player WHERE admin_id = 4501 ORDER BY id;

SELECT player_id as player, COUNT(*) AS `squares` FROM square WHERE board_id = 120 GROUP BY player_id;

/* CALL USED TO GET PLAYER INFO AND SQUARES SELECTED*/
SELECT s.player_id, COUNT(*) AS `squares`,  p.admin_id, p.name_first, p.name_last, p.email, p.phone
FROM square s 
INNER JOIN player p ON p.id = s.player_id
WHERE p.admin_id = 4501
GROUP BY s.player_id
ORDER BY s.player_id;

SELECT p.id, p.admin_id, p.name_first, p.name_last, p.email, p.phone, COUNT(*) AS squares 
FROM player p
INNER JOIN square s ON p.id = s.player_id
WHERE p.admin_id = 4501 AND s.board_id = 120
ORDER BY p.id;

SELECT p.id, p.admin_id, p.name_first, p.name_last, p.email, p.phone
FROM player p
WHERE p.active=1 AND p.admin_id = 4501
ORDER BY p.id;

/*ONE BOARD BY ADMIN*/


/*ALL BOARDS BY ADMIN*/
SELECT b.id, a.name_first, a.name_last, g.id as gameId, n1.name as team1, n2.name as team2, g.game_time, cost_1sq, cost_3sq, pay_q1, pay_q2, pay_q3, pay_q4, b.created 
    FROM board b
    INNER JOIN admin a ON a.id=b.admin_id
    INNER JOIN game g on g.id=b.game_id
    JOIN nfl_team n1 on n1.id = g.team_1
    JOIN nfl_team n2 on n2.id = g.team_2
    WHERE b.admin_id = 2 AND b.id=2
    order by g.game_time;

/*TAKEN SQUARES*/
SELECT p.name_first, p.name_last, y_value, x_value, win
FROM square s
INNER JOIN player p ON p.id=s.player_id
WHERE board_id=1
ORDER BY y_value, x_value;

SELECT nfl_team.name as home, nfl_team.name as vis, game.game_time as time FROM game
inner join nfl_team ON nfl_team.id = game.team_1 || nfl_team.id = game.team_2;

/*BOARD BASIC INFO*/
SELECT g.team_1, g.team_2, g.game_time, a.name_first, a.name_last, a.phone, a.email, cost_1sq, cost_3sq, pay_q1, pay_q2, pay_q3, pay_q4
FROM board b
INNER JOIN admin a ON a.id=b.admin_id
INNER JOIN game g ON g.id=b.game_id
WHERE game_id=1;

/*BOARD BASIC INFO WITH TEAM NAMES*/
SELECT n1.full as team1_full, n1.name as team1_name, n1.short as team1_short, n2.full as team2_full, n2.name as team2_name, n2.short as team2_short, g.game_time, a.name_first, a.name_last, a.phone, a.email, cost_1sq, cost_3sq, pay_q1, pay_q2, pay_q3, pay_q4
FROM board b
INNER JOIN admin a ON a.id=b.admin_id
INNER JOIN game g ON g.id=b.game_id
JOIN nfl_team n1 on n1.id = g.team_1
JOIN nfl_team n2 on n2.id = g.team_2
WHERE game_id=1;



SELECT player.name_first, player.name_last, admin.name_first, admin.name_last FROM player
INNER JOIN admin ON admin.id = player.admin_id; 

SELECT * FROM game
inner join nfl_team ON nfl_team.id = game.team_1 || nfl_team.id = game.team_2;

