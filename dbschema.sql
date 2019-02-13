/* -------------------------------------------------------*/
/*                      CREATE MAIN TABLE/DB              */
/* -------------------------------------------------------*/

CREATE DATABASE IF NOT EXISTS zoundloud;

use zoundloud;

CREATE TABLE if not exists relatedsongs (
  song_id int not null auto_increment, 
  artist_name varchar(35) not null,
  song_name varchar(56) not null,
  album_pic varchar(110) not null, 
  artist_pic varchar(110) not null,
  num_comments int default null,
  num_plays int default null, 
  num_likes int default null,
  num_reposts int default null,
  pro_user boolean not null,
  primary_songidentifier int not null,
  primary key(song_id)
);

/* -------------------------------------------------------*/
/*                      Tables (for later)                */
/* -------------------------------------------------------*/

-- CREATE TABLE if not exists Artists {
--   id int not null auto_increment,
--   avatar_pic_url varchar(110) not null,
--   pro_user boolean not null, 
--   location varchar(100)
-- }

-- CREATE TABLE if not exists Playlists {
--   playid int not null auto_increment,
--   name varchar(60) not null,
--   play_pic_url varchar(110),
--   author_id int not null
-- }

-- CREATE TABLE if not exists Likes {
--   id int not null auto_increment,
--   userid int not null,
--   songid || playlistid int not null
-- }

-- CREATE TABLE if not exists Followers {
--   id int not null auto_increment, 

-- }

-- CREATE TABLE if not exists Comments {
--   id int not null auto_increment,
--   userid int not null,
--   songid int not null
-- }

-- CREATE TABLE if not exists Users{
--   id int not null auto_increment,
--   username varchar(40) not null,
--   numfollowers int,
--   location varchar(40)
-- }