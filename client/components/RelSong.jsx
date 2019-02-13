import React from 'react';


function RelSong({ eachSong, key }) {
  return (
    <li key={key}>{eachSong.songName}</li>
  );
}

export default RelSong;
