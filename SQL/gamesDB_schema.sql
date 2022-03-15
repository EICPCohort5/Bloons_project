DROP SCHEMA IF EXISTS gameDB;

CREATE SCHEMA gameDB;

USE gameDB;

CREATE TABLE publisher (
  publisher_id int not null auto_increment,
  publisher_name varchar(25),
  CONSTRAINT PK_publisher_id primary key(publisher_id)
);
INSERT INTO publisher (publisher_name) VALUES ('Activision'), ('EA'), ('Nintendo'), ('Blizzard'), ('Ubisoft'), ('Capcom'), ('Sega'), ('SquareEnix');

CREATE TABLE platform (
  platform_id int not null auto_increment,
  platform_name varchar(25),
  CONSTRAINT PK_platform_id primary key(platform_id)
);

INSERT INTO platform (platform_name) VALUES ('PC'), ('XBOX'), ('PS'), ('Switch');
 
CREATE TABLE games  (
  game_id int not null auto_increment,
  game_name varchar(25),
  CONSTRAINT PK_game_id primary key(game_id),
  game_publisher_id int,
  CONSTRAINT FK_game_publisher_id foreign key (game_publisher_id) references publisher (publisher_id)
);

INSERT INTO games (game_name, game_publisher_id) VALUES ('Call of Duty', 1), ('NHL', 2), ('Mario Kart', 3), ('Overwatch', 4), ('Rainbow 6', 5), ('Street Fighter', 6), ('Sonic', 7), ('Final Fantasy', 8);

CREATE TABLE games_platforms (
  game_id int not null,
  platform_id int not null,
  game_platform_id int not null auto_increment,
  CONSTRAINT PK_game_platform_id primary key (game_platform_id),
  CONSTRAINT FK_game_id foreign key(game_id) references games(game_id),
  CONSTRAINT FK_platform_id foreign key(platform_id) references platform(platform_id)
);

INSERT INTO games_platforms (game_id, platform_id) VALUES (1,1), (1,2), (1,3), (2,2), (2,3), (3,4), (4,1), (4,2), (5,1), (5,2), (5,3), (6,1), (6,2), (6,3), (6,4), (7,1), (7,2), (7,3), (8,1), (8,3), (8,4);

'''SELECT g.game_name, pl.platform_name, pu.publisher_name, gp.game_platform_id
FROM games_platforms gp
	INNER JOIN games g
		ON g.game_id = gp.game_id
	INNER JOIN platform pl
		ON pl.platform_id = gp.platform_id
	INNER JOIN publisher pu
		ON g.game_publisher_id = pu.publisher_id;'''