import React from 'react';
import RelSong from './RelSong.jsx';


function RelSongList({ fakeData }) {
  return (
    <ul>
      {fakeData.map((eachSong, key) => (
        <RelSong song={eachSong} key={`${eachSong.primarySong}_related_${key}`} />
      ))}
    </ul>
  );
}


export default RelSongList;
