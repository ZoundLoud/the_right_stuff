const faker = require('faker');

for (let i = 0; i < 21; i++) {
  const randomName = faker.name.findName();
  console.log(randomName);
  var srcimage = faker.image.avatar();
  console.log(srcimage);
}
// var randomName = faker.name.findName(); // Caitlyn Kerluke
// var randomName = faker.name.findName();
var srcimage = faker.image.avatar();

// const User = {
//   randomName = faker.name.findName(),
//   randomName = faker.name.findName(),
//   srcimage = faker.image.avatar()
// }
