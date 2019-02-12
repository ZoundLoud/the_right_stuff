const faker = require('faker');
const download = require('image-downloader');

for (let i = 0; i < 300; i += 1) {
  // write album pic

  const albumoptions = {
    url: `${faker.image.imageUrl()}`,
    dest: `pics/albumPics/album-${i}.jpeg`, // Save photo under this name
  };


  download.image(albumoptions)
    .then(({ filename, image }) => {
      console.log('File saved to', filename);
    })
    .catch((err) => {
      console.error(err);
    });

  const artistOptions = {
    url: `${faker.image.people()}`,
    dest: `pics/artistPics/artist-${i}.jpeg`, // Save photo under this name
  };

  download.image(artistOptions)
    .then(({ filename, image }) => {
      console.log('File saved to', filename);
    })
    .catch((err) => {
      console.error(err);
    });
}
