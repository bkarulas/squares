CREATE TABLE `nfl_team` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `full` varchar(255),
  `name` varchar(255),
  `short` varchar(255)
);

CREATE TABLE `admin` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name_first` varchar(255),
  `name_last` varchar(255),
  `phone` varchar(255),
  `email` varchar(255),
  `password` varchar(255) DEFAULT null,
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime
);

CREATE TABLE `game` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `team_1` int,
  `team_2` int,
  `game_time` datetime,
  `score_team1q1` int DEFAULT null,
  `score_team2q1` int DEFAULT null,
  `score_team1q2` int DEFAULT null,
  `score_team2q2` int DEFAULT null,
  `score_team1q3` int DEFAULT null,
  `score_team2q3` int DEFAULT null,
  `score_team1q4` int DEFAULT null,
  `score_team2q4` int DEFAULT null,
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime
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
  `pay_q4` int,
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime
);

CREATE TABLE `player` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `admin_id` int NOT NULL,
  `name_first` varchar(255),
  `name_last` varchar(255),
  `email` varchar(255),
  `phone` varchar(255),
  `active` boolean DEFAULT 1,
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime
);

CREATE TABLE `square` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `board_id` int NOT NULL,
  `player_id` int NOT NULL,
  `x_value` int,
  `y_value` int,
  `win` int DEFAULT 0,
  `updated` datetime
);

CREATE TABLE `money` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `player_id` int NOT NULL,
  `game_id` int NOT NULL,
  `owe` int DEFAULT null,
  `paid` int DEFAULT null,
  `updated` datetime
);

CREATE TABLE `playerhistory` (
  `id` int UNIQUE PRIMARY KEY NOT NULL,
  `admin_id` int NOT NULL,
  `name_first` varchar(255),
  `name_last` varchar(255),
  `email` varchar(255),
  `phone` varchar(255),
  `created` datetime,
  `updated` datetime,
  `deleted` datetime DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE `game` ADD FOREIGN KEY (`team_1`) REFERENCES `nfl_team` (`id`);

ALTER TABLE `game` ADD FOREIGN KEY (`team_2`) REFERENCES `nfl_team` (`id`);

ALTER TABLE `board` ADD FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`);

ALTER TABLE `board` ADD FOREIGN KEY (`game_id`) REFERENCES `game` (`id`);

ALTER TABLE `player` ADD FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`);

ALTER TABLE `square` ADD FOREIGN KEY (`board_id`) REFERENCES `board` (`id`);

ALTER TABLE `square` ADD FOREIGN KEY (`player_id`) REFERENCES `player` (`id`);

ALTER TABLE `money` ADD FOREIGN KEY (`player_id`) REFERENCES `player` (`id`);

ALTER TABLE `money` ADD FOREIGN KEY (`game_id`) REFERENCES `game` (`id`);

ALTER TABLE `playerhistory` ADD FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`);
