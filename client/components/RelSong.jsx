import React from 'react';
import PropTypes from 'prop-types'; // ES6
import RelatedSongsList from './RelSongBox.jsx/index.js';
import Epony from './Eponymous.jsx';


function RelSong({ eachSong, key }) {
  return (
    <li>{eachSong.songName}</li>
  );
}

export default RelSong;
