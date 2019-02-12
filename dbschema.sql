CREATE DATABASE IF NOT EXISTS zoundloud;

use zoundloud;

CREATE TABLE if not exists relatedsongs (
  song_id int not null auto_increment, 
  artistName varchar(35) not null,
  album_pic varchar(110) not null, 
  artist_pic varchar(110) not null,
  numComments int default null,
  numPlays int default null, 
  numLikes int default null,
  numReposts int default null,
  pro_user boolean not null,
  primarysongidentifier int not null,
  primary key(song_id)
);


-- CREATE TABLE Artists if not exists {
--   id int not null auto_increment,
--   avatar_pic_url varchar(110) not null,
--   pro_user boolean not null, 
--   location varchar(100)
-- }

-- CREATE TABLE Playlists if not exists {
--   playid int not null auto_increment,
--   name varchar(60) not null,
--   play_pic_url varchar(110),
--   author_id int not null
-- }

-- CREATE TABLE Likes if not exists {
--   id int not null auto_increment,
--   userid int not null,
--   songid || playlistid int not null
-- }

-- CREATE TABLE Followers if not exists {
--   id int not null auto_increment, 

-- }

-- CREATE TABLE Comments if not exists {
--   id int not null auto_increment,
--   userid int not null,
--   songid int not null
-- }

-- CREATE TABLE Users if not exists {
--   id int not null auto_increment,
--   username varchar(40) not null,
--   numfollowers int,
--   location varchar(40)
-- }