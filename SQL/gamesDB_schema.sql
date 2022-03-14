DROP SCHEMA IF EXISTS gameDB;

CREATE SCHEMA gameDB;

USE gameDB;

CREATE TABLE games  (
  game_id int not null auto_increment,
  game_name varchar(25),
  CONSTRAINT PK_game_id primary key(team_id)
);


CREATE TABLE publisher (
  publisher_id int not null auto_increment,
  publisher_name varchar(25),
  CONSTRAINT PK_publisher_id primary key(publisher_id)
);


CREATE TABLE platform (
  platform_id int not null auto_increment,
  platform_name varchar(25),
  CONSTRAINT PK_platform_id primary key(platform_id)
);
