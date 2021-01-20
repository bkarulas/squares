CREATE TABLE `admin` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name_first` varchar(255),
  `name_last` varchar(255),
  `phone` varchar(255),
  `email` varchar(255),
  `password` varchar(255) DEFAULT null
);

CREATE TABLE `game` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `team_1` varchar(255) DEFAULT null,
  `team_2` varchar(255) DEFAULT null,
  `score_team1q1` int DEFAULT null,
  `score_team2q1` int DEFAULT null,
  `score_team1q2` int DEFAULT null,
  `score_team2q2` int DEFAULT null,
  `score_team1q3` int DEFAULT null,
  `score_team2q3` int DEFAULT null,
  `score_team1q4` int DEFAULT null,
  `score_team2q4` int DEFAULT null
);

CREATE TABLE `board` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `admin_id` int NOT NULL,
  `game_id` int NOT NULL,
  `cost_1sq` int,
  `cost_3sq` int,
  `pay_q1` int,
  `pay_q2` int,
  `pay_q3` int,
  `pay_q4` int
);

CREATE TABLE `player` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `admin_id` int NOT NULL,
  `name_first` varchar(255),
  `name_last` varchar(255),
  `email` varchar(255),
  `phone` varchar(255)
);

CREATE TABLE `square` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `board_id` int NOT NULL,
  `player_id` int NOT NULL,
  `x_value` int,
  `y_value` int
);

CREATE TABLE `money` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `player_id` int NOT NULL,
  `game_id` int NOT NULL,
  `owe` int DEFAULT null,
  `paid` int DEFAULT null
);

ALTER TABLE `board` ADD FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`);

ALTER TABLE `board` ADD FOREIGN KEY (`game_id`) REFERENCES `game` (`id`);

ALTER TABLE `player` ADD FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`);

ALTER TABLE `square` ADD FOREIGN KEY (`board_id`) REFERENCES `board` (`id`);

ALTER TABLE `square` ADD FOREIGN KEY (`player_id`) REFERENCES `player` (`id`);

ALTER TABLE `money` ADD FOREIGN KEY (`player_id`) REFERENCES `player` (`id`);

ALTER TABLE `money` ADD FOREIGN KEY (`game_id`) REFERENCES `game` (`id`);
