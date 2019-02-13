const faker = require('faker');
const mysql = require('mysql');
const path = require('path');
const download = require('image-downloader');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'zoundlound',
});

connection.connect();

const fakeData = [];


for (let i = 0; i < 2; i += 1) {
  const relatedTrack = [];

  relatedTrack.push(faker.name.findName());


  // relatedTrack.push(faker.image.people());
  relatedTrack.push(`${faker.address.city()}, ${faker.address.country()}`);
  // comments
  if (i !== 0 && i % 15 === 0) {
    relatedTrack.push(null);
  } else if (i % 15 !== 0 || i === 0) {
    relatedTrack.push(faker.random.number({ min: 0, max: 8000 }));
  }
  // plays
  relatedTrack.push(faker.random.number({ min: 0, max: 10000 }));
  // likes
  relatedTrack.push(faker.random.number({ min: 0, max: 100 }));
  // reposts
  if (i !== 0 && i % 43 === 0) {
    relatedTrack.push(null);
  } else if (i % 15 !== 0 || i === 0) {
    relatedTrack.push(faker.random.number({ min: 0, max: 1000 }));
  }
  // primarysongid
  relatedTrack.push(faker.random.number({ min: 0, max: 100 }));


  fakeData.push(relatedTrack);
}

// CREATE TABLE if not exists relatedsongs (
//   song_id int not null auto_increment,
//   artist_name varchar(35) not null,
//   album_pic varchar(110) not null,
//   artist_pic varchar(110) not null,
//   num_comments int default null,
//   num_plays int default null,
//   num_likes int default null,
//   num_reposts int default null,
//   pro_user boolean not null,
//   primary_songidentifier int not null,
//   primary key(song_id)
// );
