const faker = require('faker');
const mysql = require('mysql');

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
  relatedTrack.push(faker.image.imageUrl());
  relatedTrack.push(faker.image.people());
  relatedTrack.push(`${faker.address.city()}, ${faker.address.country()}`);
  relatedTrack.push(faker.random.number({ min: 0, max: 8000 }));
  relatedTrack.push(faker.random.number({ min: 0, max: 10000 }));
  relatedTrack.push(faker.random.number({ min: 0, max: 100 }));

  fakeData.push(relatedTrack);
}

console.log(fakeData);
// connection.query()
// ;
